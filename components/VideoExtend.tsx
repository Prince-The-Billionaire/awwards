"use client"
import React, { useEffect, useRef } from 'react'
import { circularWeb, robertRegular, zentryRegular } from './Fonts';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const VideoExtend = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null)
    const subtextRef = useRef(null)

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,
      x:70,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // Starts when the element is 80% in view
        end: "top 50%",
        scrub: true, // Smooth animation on scroll
      },
    })
    gsap.to(imageRef.current, {
        width:'100vw',
        height:'100vh',
        borderRadius:0,
        display:'absolute',
        duration: 10,
        scrollTrigger: {
        trigger: imageRef.current,
        start: "top top", // Starts when the element is 80% in view
        end: "=+250px",
        scrub: true, // Smooth animation on scroll
      },
    })
    gsap.to(subtextRef.current, {
      y: -50,
      opacity: 0,
      marginTop:'-100px',
      display: 'hidden',
      duration: 3,
      scrollTrigger: {
        trigger: subtextRef.current,
        start: "top 90%", // Starts when the element is 80% in view
        end: "=+50px",
        scrub: true, // Smooth animation on scroll
      },
    })
  }, []);
  return (
    <div className='flex flex-col justify-center pt-20 items-center'>
        <p className={`${circularWeb.className} text-sm`}>Welcome to awwards</p>
        <h1 ref={textRef} className={`${zentryRegular.className} text-8xl -z-10 text-center`}>
            DISCOVER THE WORLD LARGEST <br/> SHARED ADVENTURE
        </h1>
        <img ref={imageRef} className='object-cover w-[500px] h-[400px] block rounded-2xl z-20' src='/img/about.webp' />
        <p ref={subtextRef} className={`${robertRegular.className} font-bold pt-8`}>The game of games begins your life, now an epic MMORPG <br/> zentry unites every player from countless games and platforms</p>
    </div>
  )
}

export default VideoExtend