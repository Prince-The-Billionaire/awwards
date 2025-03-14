"use client"
import React, { useRef } from 'react'
import { circularWeb,  zentryRegular } from './Fonts'
import gsap from 'gsap'
import Image from 'next/image'

const Metagame = () => {
    const videoref = useRef<HTMLVideoElement>(null)
    const divref = useRef<HTMLDivElement>(null)
    const video1ref = useRef<HTMLVideoElement>(null)
    const video2ref = useRef<HTMLVideoElement>(null)
    const video3ref = useRef<HTMLVideoElement>(null)
    const div1ref = useRef<HTMLDivElement>(null)
    const div2ref = useRef<HTMLDivElement>(null)
    const div3ref = useRef<HTMLDivElement>(null)
    
    const playVideo = (event: React.MouseEvent<HTMLDivElement>,divRef:React.RefObject<HTMLDivElement | null>,videoRef:React.RefObject<HTMLVideoElement | null>) => {
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
        if(videoRef.current){
            videoRef.current.play()
            
        }
        
    }

    const endmove = (divRef:React.RefObject<HTMLDivElement | null>) => {
        if(!divRef.current) return
        gsap.to(divRef.current,{
            rotateX:0,
            rotateY:0,
            skewX:0,
            skewY:0,
            ease:"power2.out",
            duration:0.5,
        })
    }
  return (
    <div className={`${circularWeb.className} flex flex-col  w-screen relative bg-black p-60 max-lg:p-4`}>
        <h1 className='text-white text-xl'>Into the Metagame</h1>
        <p className='text-white/50 text-base'>
        Immerse yourself in a rich and ever-expanding universe <br/>
         where a vibrant array of products converge into an <br/>
         interconnected overlay experience on your world.
        </p>
        <div ref={divref} onMouseMove={(e) => playVideo(e,divref,videoref)} onMouseLeave={() => endmove(divref)} >
            <video id='videotest' ref={videoref} width={'100%'} className='mt-10 max-lg:w-[90vw] w-[70vw] border-gray-500/50 rounded-lg border ' muted >
                <source src='/videos/feature-1.mp4'/>
            </video>
        </div>
        <div className='max-lg:flex-col max-lg:flex max-lg:gap-2 grid grid-rows-2 mt-6 grid-cols-2 h-fit gap-5'>
            <div className='row-span-2 h-fit col-span-1' ref={div1ref} onMouseMove={(e) => playVideo(e,div1ref,video1ref)} onMouseLeave={() => endmove(div1ref)}>
                <video ref={video1ref} width={'100%'} className='border-gray-500/50 rounded-lg border ' muted >
                    <source src='/videos/feature-2.mp4'/>
                </video>
            </div>
            <div ref={div2ref} className='h-fit' onMouseMove={(e) => playVideo(e,div2ref,video2ref)} onMouseLeave={() => endmove(div2ref)}>
                <video ref={video2ref} width={'100%'} className='border-gray-500/50 rounded-lg border h-[20em] object-cover ' muted >
                    <source src='/videos/feature-3.mp4'/>
                </video>
            </div>
            <div ref={div3ref} className='h-fit' onMouseMove={(e) => playVideo(e,div3ref,video3ref)} onMouseLeave={() => endmove(div3ref)}>
                <video ref={video3ref} width={'100%'} className='border-gray-500/50 rounded-lg border h-[20em] object-cover ' muted >
                    <source src='/videos/feature-4.mp4'/>
                </video>
            </div>
        </div>
        <div className='grid grid-cols-2 mt-4 gap-6'>
            <div className='flex flex-col bg-purple-900 rounded-lg p-4' >
                <p className={`${zentryRegular.className} text-6xl`}>MORE <br/> COMING <br/> SOON</p>
                <Image
                    className='mt-auto ml-auto'
                    src={'/img/play.svg'}
                    width={60}
                    height={60}
                    alt='play'

                />
            </div>
            <div ref={div3ref} className='h-fit' onMouseMove={(e) => playVideo(e,div3ref,video3ref)} onMouseLeave={() => endmove(div3ref)}>
                <video ref={video3ref} width={'100%'} className='border-gray-500/50 rounded-lg border h-[20em] object-cover ' muted >
                    <source src='/videos/feature-5.mp4'/>
                </video>
            </div>
        </div>
        
    </div>
  )
}

export default Metagame