import Link from 'next/link'
import React from 'react'
import { Badge } from 'antd';
import { IoIosNotificationsOutline } from 'react-icons/io';
import img from '../../assets/profile.png'
import Image from 'next/image';
const Header = () => {
  return (
    <div className='w-full py-4 bg-[#FEFEFE] flex justify-end items-center  gap-4'>
    <div>
        <Link href="/notification" style={{ boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.24)" }} className=' bg-[#F2F2F2] h-10 flex items-center w-10 rounded-full p-2'>
            <Badge>
                <IoIosNotificationsOutline className='text-[#03346E]' size={25} />
            </Badge>
        </Link>
    </div>
    <div  className='flex justify-end items-center gap-1 border-[var(--secondary-color)] p-[2px] px-4 rounded-md cursor-pointer'>
        <Image src={img} height={100} width={100} className='h-10 w-10 rounded-full' alt='img' />
        <p className='font-medium text-[#333333]'>Robert Smith</p>
    </div>
</div>
  )
}

export default Header