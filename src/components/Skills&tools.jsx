import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6"; 
import { TbBrandBootstrap } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";


const SkillsAndTools = () => {
  useGSAP(()=>{
    const content = document.querySelector(".marquee-content");
    gsap.to(content,{
     x: "-200%",
    duration:8,
    repeat:-1,
    ease:"linear"
    })
  },{ scope: '.skills' })
  return (
    <div className='skills rounded-2xl h-auto flex flex-col'>
      <h2 className='skill-heading text-2xl'>Skills and Tools</h2>
   <div className='skills-text whitespace-nowrap overflow-hidden'><div className='marquee-content flex gap-2'>
    <span className='movingtext'>problem solving</span> <span className='movingtext'>attention to detail</span><span className='movingtext'>fast learner</span> <span className='movingtext'>creativity</span>  <span className='movingtext'>problem solving</span> <span className='movingtext'>attention to detail</span><span className='movingtext'>fast learner</span> <span className='movingtext'>creativity</span>   <span className='movingtext'>problem solving</span> <span className='movingtext'>attention to detail</span><span className='movingtext'>fast learner</span> <span className='movingtext'>creativity</span>  </div></div>

    <div className='skill-icons flex flex-col w-full justify-evenly h-1/2'>
       <div className='flex items-center justify-evenly'>
        <GrHtml5 className='text-5xl'/>
       <TbBrandCss3  className='text-5xl'/>
       <TbBrandJavascript className='text-5xl'/>
       <FaReact className='text-5xl'/>
       </div>
       <div className='flex items-center justify-evenly'>
       <RiTailwindCssFill className='text-5xl'/>
        <TbBrandBootstrap className='text-5xl'/>
       <RiFirebaseLine className='text-5xl'/>
       </div>
    </div>
    </div>
  )
}

export default SkillsAndTools