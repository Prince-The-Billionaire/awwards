"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { general, zentryRegular } from './Fonts'
import gsap from 'gsap'

// Define custom fonts

  
  
  
 

const Hero = () => {
    const videodivref = useRef(null)
    const [videoBox, setvideoBox] = useState(false)
    const [videoNumber, setVideoNumber] = useState(1)
    const videoRef = useRef<HTMLVideoElement>(null)
    const video1Ref = useRef<HTMLVideoElement>(null)
    const show = () => {
        if (!videodivref.current) return
        gsap.to(videodivref.current,{
            scale:1,
            opacity:1,
            ease:'circ.inOut',
            duration:0.5
        })
        
    }
    const hide = () => {
        if(!videodivref.current) return
        gsap.to(videodivref.current,{
            scale:0.5,
            opacity:0, 
            ease:'circ.inOut',
            duration:0.5
        })
    }
    const handleClick = () => {
        if(videoNumber < 4){
            setVideoNumber(videoNumber + 1)
            console.log(videoNumber)
            if (videoRef.current) {
                videoRef.current.load(); // Forces the video to reload
            }
            if(video1Ref.current){
                video1Ref.current.load()
            }
        }
        else{
            setVideoNumber(1)
            if (videoRef.current) {
                videoRef.current.load(); // Forces the video to reload
              }
              if(video1Ref.current){
                video1Ref.current.load()
            }
        }
    }
    
  return (
    <div className=' relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative text-blue-50 z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <video ref={videoRef} width="100%" autoPlay muted className='absolute z-0'>
                    <source src={`../videos/hero-${videoNumber}.mp4`}/>
                </video>
            </div>
            <div 
                ref={videodivref}
                onClick={handleClick} 
                className={`size-96 absolute z-30 opacity-0 hover:cursor-pointer  top-[25%] left-[35%]`} 
                onMouseEnter={show} 
                onMouseLeave={hide}
                >
                <video ref={video1Ref}  muted className='object-cover w-64 h-64 rounded-lg border border-gray-700'  >
                    <source src={`../videos/hero-${videoNumber == 4 ? 1: videoNumber+1}.mp4`}/>
                </video>
            </div>
            <div className={`relative pt-32  p-4 px-16 h-screen flex flex-col`}>
                <div className={`${general.className } flex flex-col gap-4 `}>
                    <h1 className={`text-9xl ${zentryRegular.className} z-20 text-white `}>REDEFINE</h1>
                    <div>
                        <p>Enter the Metagame</p>
                        <p>Unleash the Play Economy</p>
                    </div>
                    <button className='button bg-yellow-320'>
                        <Image 
                            src={'/img/play.svg'}
                            width={20}
                            height={20}
                            alt="test"
                            className='rotate-[40deg]'
                        />
                        <p>Watch Trailer</p>
                    </button>
                </div>
                <h1 className={`${zentryRegular.className} text-9xl mt-auto ml-auto`}>GAMING</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero