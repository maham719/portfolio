import React, { useState } from 'react'
import Navbar from './Navbar'
import ThemeBtn from './ThemeBtn'
import MenuToggle from './MenuToggle'
import LetsTalk from './LetsTalk'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [animate,setAnimate]=useState(false)

  return (
    <header>
        <div className='flex items-center justify-between md:w-1/9 lg:w-1/9 w-1/7 gap-1.5'>
        <span className='logo'></span>
        <h1>Maham.</h1>
        </div>
        <Navbar toggle={toggle} settoggle={setToggle} animate={animate} setAnimate={setAnimate}/>
        <div className='flex items-center gap-1'>
          <span className='md:flex lg:flex items-center gap-2 hidden '>
        <ThemeBtn/>
        <LetsTalk/>
        </span>
        <MenuToggle  settoggle={setToggle} animate={animate} setAnime={setAnimate}/>
        </div>
    </header>
  )
}

export default Header
