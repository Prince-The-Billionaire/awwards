import React from 'react'
import Image from 'next/image'

import NavLink from './NavLink'
import { general } from './Fonts'

const Navbar = () => {
    const links = ['NEXUS','VAULT','PROLOGUE','ABOUT','CONTACT']
  return (
    <div className={`${general.className} fixed p-10 max-lg:p-1 flex flex-row justify-between w-screen bg-transparent z-20 text-white text-4xl`}>
        <div className='flex flex-row gap-5'>
            <button className='button p-2 px-8 bg-white'>
                <p className='text-xs '>PRODUCTS</p>
                <Image 
                    src={'/img/play.svg'}
                    width={12}
                    height={12}
                    alt="test"
                    className='rotate-[135deg] -mt-1 '
                />
            </button>
            <button className='button max-lg:p-0 max-lg:px-2 p-2 px-8 bg-white'>
                <p className='text-xs'>WHITEPAPER</p>
            </button>
        </div>
        <div className='flex flex-row gap-4 max-lg:hidden'>
            {links.map((item,index) => (
                <NavLink name={item} key={index} index={index}/>
            ))}
            
        </div>
        
    </div>
  )
}

export default Navbar