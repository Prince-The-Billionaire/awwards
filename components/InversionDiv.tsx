"use client"
import React, { useRef } from 'react'
import { circularWeb, general, zentryRegular } from './Fonts'
import gsap from 'gsap'

const InversionDiv = () => {
    const divref = useRef<HTMLImageElement>(null)
    const mouseover = (event:React.MouseEvent<HTMLImageElement>, divRef:React.RefObject<HTMLImageElement | null>) => {
        if(!divRef.current) return
        const bbox = divRef.current.getBoundingClientRect()
        const centerX = bbox.left + bbox.width/2
        const centerY = bbox.top + bbox.height/2

        const deltaX = event.clientX - centerX
        const deltaY = event.clientY - centerY
        
        const rotateX = (deltaY/bbox.height) * 20
        const rotateY = (-deltaX/bbox.width) * 20
        const skewX = (-deltaX/bbox.width) *10
        const skewY = (deltaY/bbox.height) * 10
        gsap.to(
            divRef.current,{
                rotateX,
                rotateY,
                skewX,
                skewY,
                ease:"power2.out",
                duration:0.3
            }
        )
    }

    const endmove = (divRef:React.RefObject<HTMLDivElement | null>) => {
        if(!divRef.current) return
        gsap.to(divRef.current,{
            rotateX:0,
            rotateZ:-6,
            skewX:3,
            skewY:4,
            ease:"power2.out",
            duration:0.5,
        })
    }
  return (
    <div className='bg-black py-10 '>
        <div className=' flex flex-col gap-6 items-center'>
            <p className={`text-white ${general.className} text-xs`}>the multiversal IP world</p>
            <h1 className={`text-white max-md:text-3xl text-8xl text-center ${zentryRegular.className}`}>STORY OF <br/> A HIDDEN REALM</h1>
            <img ref={divref} onMouseLeave={() => endmove(divref)} onMouseMove={(e) => mouseover(e,divref)} src='/img/entrance.webp' alt='entrance' className='object-cover max-md:w-[360px] max-md:h-[200px] rounded-2xl w-[800px] h-[500px] z-10 -mt-12 skew-x-3 rotate-z-6 mix-blend-difference mb-10 max-md:mb-4'/>
            <div className='max-md:mt-4 max-md:pl-8 ml-auto mt-20 pr-10'>
                <p className={`text-white ${circularWeb.className} `}>Where realms converge, lies Zentry and the <br/> boundless pillar. Discover its secrets and shape your <br/> fate amidst infinite opportunites</p>
                <button className='text-black hover:curosr-pointer bg-white p-2 px-4 rounded-full mt-4 '>
                    Discover prologue
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default InversionDiv