"use client"
import React, { useState } from 'react'

const ScheduleTable = () => {
  const [openDetailsModal, setOpenDetailModal] = useState(false)

  const timeSlots = [
    '7A', '8A', '9A', '10A', '11A', '12P',
    '1P', '2P', '3P', '4P', '5P', '6P',
    '7P', '8P', '9P', '10P', '11P', '12A',
    '1A', '2A', '3A', '4A', '5A', '6A',
  ];

  const schedule = [
    {
      date: '01/04/25',
      tasks: [
        {
          start: '15:00',
          end: '23:00',
          role: 'Care Staff',
          location: 'Farm House 2',
          color: '#E2FFE7',
        },
      ],
    },
    {
      date: '02/04/25',
      tasks: [
        {
          start: '07:00',
          end: '15:00',
          role: 'Care Staff',
          location: 'Farm House 2',
          color: '#FFF9E4',
        },
      ],
    },
    {
      date: '03/04/25',
      tasks: [
        {
          start: '23:00',
          end: '07:00',
          role: 'Care Staff',
          location: 'Farm House 2',
          color: '#FFE2E3',
        },
      ],
    },
  ];

  // Get index of start time based on 7AM being index 0
  const getColumnIndex = (hourStr: string) => {
    const hour = parseInt(hourStr.split(':')[0], 10);
    return hour < 7 ? hour + 24 - 7 : hour - 7;
  };

  // Get span of task, including overnight handling
  const getSpan = (start: string, end: string) => {
    const startIdx = getColumnIndex(start);
    const endIdx = getColumnIndex(end);
    return endIdx > startIdx ? endIdx - startIdx : 24 - startIdx + endIdx;
  };

  return (
    <div className="grid grid-cols-[100px_repeat(24,minmax(40px,1fr))] border border-[#EBEBEB] text-sm w-full mt-5">
      {/* Header Row */}
      <div className="border-[#EBEBEB] border p-2 font-semibold">Date & Time</div>
      {timeSlots.map((slot, idx) => (
        <div key={idx} className="border-[#EBEBEB] border p-2 text-center">{slot}</div>
      ))}

      {/* Date Rows */}
      {schedule.map((day, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {/* Left Date Cell */}
          <div className="border-[#EBEBEB] border p-2">{day.date}</div>

          {/* Time Grid */}
          <div className="col-span-24 grid grid-cols-24 relative">
            {/* Empty Time Cells */}
            {Array(24).fill(0).map((_, idx) => (
              <div key={idx} className="border border-[#EBEBEB] h-12" />
            ))}

            {/* Task Blocks */}
            {day.tasks.map((task, taskIndex) => {
              const startIdx = getColumnIndex(task.start);
              const span = getSpan(task.start, task.end);

              return (
                <div
                  onClick={() => setOpenDetailModal(true)}
                  key={taskIndex}
                  className="absolute top-0 h-12 text-xs cursor-pointer p-1 rounded text-black flex items-center"
                  style={{
                    left: `${(startIdx / 24) * 100}%`,
                    width: `${(span / 24) * 100}%`,
                    backgroundColor: task.color,
                  }}
                >
                  {task.start}–{task.end}, {task.role}, {task.location}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScheduleTable;
