import React from 'react'
import { zentryRegular } from './Fonts'

const CTA = () => {
  return (
    <div className='p-10'>
        <div className='rounded-2xl min-h-fit bg-black flex flex-col gap-5 py-10 max-md:py-2 items-center relative overflow-clip '>
            <p className='text-center z-5 text-xs text-white'>join zentry</p>
            <h1 className={`${zentryRegular.className} z-10 max-md:text-3xl text-8xl text-white text-center`}>LET'S BUILD THE <br/> NEW ERA OF <br/> GAMING TOGETHER</h1>
            <button className='bg-white z-30 text-black rounded-2xl max-md:mb-2 mb-10 px-4 p-2'>
                CONTACT US
            </button>
            <img loading='lazy' src='/img/swordman.webp' className='w-[250px] h-[500px] max-md:w-[60px] max-md:h-[60px] object-cover absolute -skew-x-[5deg] top-0 right-12 '/>
            <img loading='lazy' src='/img/contact-1.webp' className='w-[120px] h-[150px] max-md:w-[60px] max-md:h-[60px] object-cover absolute  -top-2 skew-y-5 left-4  '/>
            <img loading='lazy' src='/img/contact-2.webp' className='w-[250px] h-[400px] max-md:w-[60px] max-md:h-[60px] object-cover absolute rotate-x-45 max-md:-bottom-1 max-md:left-4 -bottom-40 skew-x-10 left-30'/>
        </div>
       
    </div>
  )
}

export default CTA