import React from 'react'
import { zentryRegular } from './Fonts'

const CTA = () => {
  return (
    <div className='p-10'>
        <div className='rounded-2xl min-h-fit bg-black flex flex-col gap-5 py-10 items-center relative '>
            <p className='text-center text-xs text-white'>join zentry</p>
            <h1 className={`${zentryRegular.className} text-8xl text-white text-center`}>LET'S BUILD THE <br/> NEW ERA OF <br/> GAMING TOGETHER</h1>
            <button className='bg-white text-black rounded-2xl mb-10 px-4 p-2'>
                CONTACT US
            </button>
            <img loading='lazy' src='/img/swordman.webp' className='w-[250px] h-[500px] object-cover absolute -skew-x-[5deg] top-0 right-12 '/>
        </div>
       
    </div>
  )
}

export default CTA