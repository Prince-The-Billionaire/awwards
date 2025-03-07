import React from 'react'
import Image from 'next/image'

interface props{
    name: string;
    index: number;
}
const NavLink = ({name,index}:props) => {
  return (
    <div key={index} className='flex gap-2 hover:invert hover:cursor-pointer p-2 hover:bg-black ease-in-out duration-200 transition-all rounded-2xl '>
        <p className='text-xs'>{name}</p>
        <Image 
            src={'/img/play.svg'}
            width={12}
            height={12}
            alt="test"
            className='rotate-[15deg] -mt-1 invert '
        />
    </div>
  )
}

export default NavLink