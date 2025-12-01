import React, { useRef } from 'react'
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { GoArrowUpRight } from 'react-icons/go'
import coffeedesktop from "../assets/images/projects/coffeedesktop.png"
import coffeetablet from "../assets/images/projects/coffeetablet.png"
import coffeemobile from "../assets/images/projects/coffeemobile.png"
import coffeeresponsive from "../assets/images/projects/coffeeresponsive.jpg"
import portfolioresp from "../assets/images/projects/portfolioresp.jpg"
import reumedesktop from "../assets/images/projects/reumedesktop.png"
import resumetablet from "../assets/images/projects/resumetablet.png"
import resumemobile from "../assets/images/projects/resumemobile.png"
import blogdesktop from "../assets/images/projects/blogdesktop.png"
import blogtablet from "../assets/images/projects/blogtablet.png"
import blogmobile from "../assets/images/projects/blogmobile.png"
import blogresponsive from "../assets/images/projects/blogresponsive.jpg"
import notesapphome from '../assets/images/projects/notesapphome.png'
import notesapp1 from '../assets/images/projects/notesapp1.png'
import notesappsignup from '../assets/images/projects/notesappsignup.png'
import notesapplogin from '../assets/images/projects/notesapplogin.png'
import blog from '../assets/images/projects/blog.png'
import portfolio from '../assets/images/projects/portfolio.png'
import coffee from '../assets/images/projects/coffee.png'
import notes from "../assets/images/projects/notes.png"
import { LiaArrowRightSolid } from "react-icons/lia";
import gsap from 'gsap'

gsap.registerPlugin(_ScrollTrigger);

const Projects = () => {

  const projects=[
    {id:"left",
      name: "Cafe Bloom - Coffee Shop Landing Page",
    thumbnail:coffee,
     images:[coffeedesktop,coffeetablet,coffeemobile,coffeeresponsive],
     tags:"ui"
    },
       {id:"right",
      name: "HTML CSS Resume",
      thumbnail:portfolio,
     images:[reumedesktop,resumetablet,resumemobile,portfolioresp],
     tags:"ui"
    },
     {id:"left",
      name: "Food Blog",
      thumbnail:blog,
     images:[blogdesktop,blogtablet,blogmobile,blogresponsive],
     tags:"ui"
    },
        {id:"left",
      name: "Notes Taking Web App",
      thumbnail:notes,
     images:[notesapphome,notesapp1,notesappsignup,notesapplogin],
     tags:"ui/ux/crud"
    },
  ]
  return (
    <div className='w-full  projects  rounded-2xl'>
       <h1>-projects</h1>
        <div className='service-title flex md:flex-row lg:flex-row flex-col items-center justify-between '>   
           <h1 className='text-3xl'>My <span className='font-bold'>Latest</span> projects</h1> 
          <button className='flex items-center gap-2 text-xl font-semibold'>View All Projects<GoArrowUpRight className='text-2xl'/></button></div>
         <div className='project-cards w-full grid md:grid-cols-2  lg:grid-cols-2  h-full gap-9 gap-y-12 '> 

          {/* card 1  */}
          {projects.map((item,idx)=>{
           return <div className="project-card row-span-3 flex flex-col gap-4 " id={item.id}>
            <div className="images p-2 rounded-2xl overflow-hidden h-full">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="tags"><span>{item.tags}</span></div>
            <div className="title flex items-center justify-between">
              <h1 className='text-2xl'>{item.name}</h1>
              <button className='project-cardBtn'><LiaArrowRightSolid className='font-bold text-xl'/></button>
            </div>
          </div>
}
          )}
         
    
         </div>
    </div>
  )
}

export default Projects
