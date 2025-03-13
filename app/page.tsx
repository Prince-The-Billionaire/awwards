import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import InversionDiv from '@/components/InversionDiv'
import Metagame from '@/components/Metagame'
import Navbar from '@/components/Navbar'
import VideoExtend from '@/components/VideoExtend'
import React from 'react'

const page = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <VideoExtend/>
      <Metagame/>
      <InversionDiv/>
      <CTA/>
    </main>
  )
}

export default page