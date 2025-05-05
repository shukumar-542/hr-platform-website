import { BackButton } from '@/components/BackButton/BackButton'
import ShiftSwapRequest from '@/components/ShiftSwapRequest/ShiftSwapRequest'
import React from 'react'

const ShiftSwapPage = () => {
  return (
    <div className='bg-white p-4 rounded-md min-h-[87vh]'>
        <BackButton title='Shift Swap Request' />
        {/* <ShiftSwapRequest/> */}
    </div>
  )
}

export default ShiftSwapPage