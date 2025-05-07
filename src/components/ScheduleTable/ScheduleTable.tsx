"use client"
import { Table, Button, Tag } from 'antd';
import React from 'react';

interface Schedule {
  employee: string;
  timeSlots: string[];
}

// Define the valid shifts and their start and end times
const shiftTimes: { 
  [key in '7A-3P' | '3P-11P' | '11P-7A']: { start: number; end: number; }
} = {
  '7A-3P': { start: 0, end: 7 }, // 7A starts at 0 index, 3P ends at 7 index
  '3P-11P': { start: 7, end: 15 }, // 3P starts at 7 index, 11P ends at 15 index
  '11P-7A': { start: 15, end: 23 }, // 11P starts at 15 index, 7A ends at 23 index
};

const shiftColors: { [key in '7A-3P' | '3P-11P' | '11P-7A']: string } = {
  '7A-3P': 'lightgreen',
  '3P-11P': 'lightblue',
  '11P-7A': 'lightcoral',
};

export default function ScheduleTable() {
  // Define columns with 24-hour slots from 7 AM to 7 AM
  const columns = [
    {
      title: 'Employee',
      dataIndex: 'employee',
      key: 'employee',
      render: (text: string) => <strong>{text}</strong>,
    },
    ...Array.from({ length: 24 }, (_, index) => {
      const hour = (index + 7) % 24; // To account for the 24-hour range (7 AM to 6 AM)
      const suffix = hour >= 12 ? 'P' : 'A';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12; // Show 12 instead of 0 for 12 PM/AM
      const timeLabel = `${displayHour}${suffix}`;

      return {
        title: timeLabel,
        dataIndex: `timeSlot${index}`,
        key: `timeSlot${index}`,
        render: (_: any, record: Schedule) => renderShiftTag(record.timeSlots[index], timeLabel),
      };
    }),
  ];

  // Render shift tags with colors based on the shift type
  const renderShiftTag = (shift: string, timeLabel: string) => {
    const color = getColorForSlot(timeLabel, shift);
    return (
      <Tag color={color}>
        {shift || ' '}
      </Tag>
    );
  };

  // Determine the color of the time slot based on its index and the shift
  const getColorForSlot = (timeLabel: string, shift: string) => {
    const { start, end } = shiftTimes[shift as '7A-3P' | '3P-11P' | '11P-7A'] || { start: -1, end: -1 };

    // Check if the current time label is within the start and end index for the shift
    if (start <= getTimeIndex(timeLabel) && getTimeIndex(timeLabel) <= end) {
      return shiftColors[shift as '7A-3P' | '3P-11P' | '11P-7A'] || 'white'; // Apply color if within the shift time range
    }
    return 'white'; // No color if outside the shift time range
  };

  // Helper function to convert time string (e.g., '7A', '3P') to its respective index
  const getTimeIndex = (time: string) => {
    const timeMap: { [key: string]: number } = {
      '7A': 0,
      '8A': 1,
      '9A': 2,
      '10A': 3,
      '11A': 4,
      '12P': 5,
      '1P': 6,
      '2P': 7,
      '3P': 8,
      '4P': 9,
      '5P': 10,
      '6P': 11,
      '7P': 12,
      '8P': 13,
      '9P': 14,
      '10P': 15,
      '11P': 16,
      '12A': 17,
      '1A': 18,
      '2A': 19,
      '3A': 20,
      '4A': 21,
      '5A': 22,
      '6A': 23,
    };
    return timeMap[time] || -1; // Return the index of the time
  };

  const data: Schedule[] = [
    {
      employee: 'Robert Fox',
      timeSlots: ['7A-3P', '', '', '', '', '', '', '', '', '3P-11P', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
    {
      employee: 'Guy Hawkins',
      timeSlots: ['7A-3P', '', '', '', '', '3P-11P', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
    {
      employee: 'Annette Black',
      timeSlots: ['7A-3P', '', '3P-11P', '', '', '', '3P-11P', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
  ];

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }}>
        Add Shift
      </Button>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </div>
  );
}
