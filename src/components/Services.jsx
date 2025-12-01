import React, { useRef } from 'react'
import { PiDesktopTowerLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { PiFilmStripLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(_ScrollTrigger);
const Services = () => {
  const ref = useRef()
    useGSAP(() => {
    gsap.from(".service-cards div", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-cards div",
        start: "top 90%", 
        end: "top 50%",
        scrub: 2,
              
      }
    })
    
  }, []);
  return (
    <div className='service'>
      <h1 className='text-xl font-bold'>-services</h1>

   <div className='service-title flex md:flex-row lg:flex-row flex-col items-center justify-between'>   
    <h1 className='text-3xl'><span className='font-bold'>Services </span> i Provide</h1> 
   <button className='flex items-center gap-2 text-xl font-semibold'>View All Services <GoArrowUpRight className='text-2xl'/></button></div>

      <div className='service-cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-1 md:grid-rows-1 lg:grid-rows-1 gap-5' ref={ref}>
        <div className='flex flex-col gap-2 justify-evenly h-full ' >
          <span className='text-4xl self-center'><PiDesktopTowerLight/></span>
          <h2 className='text-2xl'>Responsive Website Development</h2>
          <p>I build websites that look perfect and function flawlessly on every screen size—from large desktop monitors...</p>
          <button className='learnmore flex items-center gap-2 self-end'>Learn More  <GoArrowRight/></button></div>

        <div className='flex flex-col gap-2 justify-evenly '>
          <span className='text-4xl self-center'><TfiLayoutListThumb/></span>
          <h2 className='text-2xl'>UI/UX Implementation from Figma, XD, Sketch</h2>
          <p>If you have a UI design in Figma, XD, or Sketch, I will convert it into clean, scalable code using React or standard HTML/CSS</p>
      <button className='learnmore flex items-center gap-2 self-end'>Learn More  <GoArrowRight/></button>
        </div>
        <div className='flex flex-col gap-2 justify-evenly '>
          <span className='text-4xl self-center'><PiFilmStripLight /></span>
          <h2 className='text-2xl'>Frontend Animation Services</h2>
          <p>I create engaging, interactive animations that bring your website to life using GSAP, Framer Motion, and CSS animations.</p>
           <button className='learnmore flex items-center gap-2 self-end'>Learn More  <GoArrowRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Services
