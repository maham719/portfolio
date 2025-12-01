
import Header from '../components/Header'
import Hero from '../components/Hero'
import SkillsAndTools from '../components/Skills&tools'
import Social from '../components/Social'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Services from '../components/Services'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Portfolio = () => {
  useGSAP(()=>{
    const tl=gsap.timeline()
      tl.from(".animate-hero-hero",{
      y:50,
      opacity:0,
      duration:1
    })
    tl.from(".animate-hero",{
      y:50,
      opacity:0,
      duration:1,
      delay:0.1,
      stagger:0.5
    })
  
  })
  return (
    <div className='w-full h-auto min-h-screen pt-4'>
      <Header/>
      <div className='firstgrid w-[96%] grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 grid-rows-2 md:grid-rows-2 lg:grid-rows-2 gap-2 rounded-2xl ' >

        <div className='animate-hero md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2 row-span-2 h-full l'><SkillsAndTools/></div>

        <div className='animate-hero-hero relative h-full md:col-span-2 lg:md:col-span-2 row-span-2 overflow-hidden rounded-2xl'>
        <Hero/>
        </div>
        <div className=' animate-hero' ><Resume/></div>
        <div className=' animate-hero row-span-2 max-h-auto  overflow-hidden rounded-2xl  ' >
        <Social/></div>
      </div>

      <div className='service-container w-[96%]  h-auto'>
        <Services/>
      </div>
      <Projects/>
    </div>
  )
}

export default Portfolio
