import { useRef,useEffect } from 'react';
import profile1copy from '../assets/images/profile1copy.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import bootstrap from '../assets/images/bootstrap.png'
import git from '../assets/images/git.png'
import tailwind from '../assets/images/tailwind.png'
import Typed from 'typed.js';
const Hero = () => {
  const el =useRef(null);

 useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Html', 'CSS' ,'Javascript' , 'React','Firebase'],
      typeSpeed: 80,
      backSpeed:0,
      loop:true,
  
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
useGSAP(()=>{
   const tl = gsap.timeline({ defaults: { duration: 1, ease: "slow(0.5, 0.8, true)" } });
    tl.from(".hero-text h1", { x: 30, opacity: 0, stagger: 0.5, delay: 1 })
      .from(".hero-text p", { x: 20, opacity: 0 ,stagger:0.5}, "-=0.5", ) 
gsap.from(".glow-border", 
  { width:0,height:0, rotate: 0 }, )
})


  return (
   <div className=' hero h-[350px] overflow-hidden rounded-2xl flex justify-center items-center relative '>
      
      <div className='relative flex  right-[15%] justify-center items-center w-full h-full rounded-full  '>
      
      <div className='relative flex  justify-center  items-center w-full h-full top-[10%] '>
        

        <div className='absolute glow-border w-[250px] h-[250px] rounded-full z-40 
                       '>
          
          <div id='circle' className='w-full h-full rounded-full'></div>
        </div>

       
        <img 
          src={profile1copy} 
          alt="Profile" 
          /* Use a fluid size like w-[150px] or w-[200px] but center it with absolute/translate if needed */
          width={200} 
          height={200} 
          className='z-40 rounded-full' 
        />
      </div>
      </div>
      <div className='hero-text absolute z-60 right-[2%] top-[10%] w-1/2 flex flex-col gap-2 ' >
      <h1 className='text-3xl'>Hello,i am </h1>
      <h1 className='text-3xl font-extrabold'>Syeda Maham Amjad</h1>
      <p>Frontend Developer <span ref={el} className='whitespace-nowrap bg-[#ff00ff80] text-xl font-bold'></span></p>
      <p className=''><span className='font-bold text-xl bg-[#ff00ff80] '>Passionate</span><br /> about creating interactive web experiences.</p>
      </div>
      </div>
   
  )
}

export default Hero
