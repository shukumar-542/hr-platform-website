import React, { ReactNode } from 'react'

interface IButtonProps {
    children: ReactNode;
}

const Button: React.FC<IButtonProps> = ( {children}) => {
  return (
    <button className='bg-[#2A216D] text-white w-full rounded-sm shadow-2xl py-2 cursor-pointer text-[18px]'>{children}</button>
  )
}

export default Button;