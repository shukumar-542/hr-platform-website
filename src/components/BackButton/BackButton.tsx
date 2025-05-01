"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

export const BackButton = ({title} : {title :  string}) => {
    const router = useRouter();
  return (
    <div className='flex items-center gap-2  pb-2'><IoArrowBackOutline onClick={()=> router.back()} className='cursor-pointer'  size={20} color='black' /><p className='font-semibold'>{title}</p></div>
  )
}
 