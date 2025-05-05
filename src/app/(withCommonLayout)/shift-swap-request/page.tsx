import { BackButton } from '@/components/BackButton/BackButton'
import ShiftSwapRequest from '@/components/ShiftSwapRequest/ShiftSwapRequest'
import React from 'react'
import emp2 from '@/assets/emp2.png'

const ShiftSwapPage = () => {
    const shiftData = [
        {
          key: "1",
          slNo: "#1233",
          date: "12/03/25",
          employee: "Annette Black",
          image: emp2,
          currentShift: "7 AM - 3 PM",
          requestedSwap: "11 PM - 7 AM",
          status: "approved",
        },
        {
          key: "2",
          slNo: "#1233",
          date: "12/03/25",
          employee: "Ronald Richards",
          image: emp2,
          currentShift: "3 PM - 11 PM",
          requestedSwap: "7 AM - 3 PM",
          status: "declined",
        },
      ];
  return (
    <div className='bg-white p-4 rounded-md min-h-[87vh]'>
        <BackButton title='Shift Swap Request' />
        <ShiftSwapRequest shiftData={shiftData} />
    </div>
  )
}

export default ShiftSwapPage