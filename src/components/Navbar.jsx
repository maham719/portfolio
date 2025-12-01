import React, { useState,useRef } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ThemeBtn from './ThemeBtn';
import LetsTalk from './LetsTalk';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = ({toggle, settoggle, animate,setAnimate}) => {
  const [active, setActive] = useState("Home");
  const menuItems = ["Home", "About", "Projects", "Contact"];
 const listRef=useRef(null);
 const btnref=useRef(null)
useGSAP(() => {
  if (animate) {
    gsap.from(listRef.current.querySelectorAll("li"), {
      x: -100,
      opacity: 0,
      delay: 0.77,
      duration: 0.77,
      ease: "slow(0.5, 0.8, true)",
      stagger: 0.2
    });
     gsap.from(btnref.current, {
      x: -100,
      opacity: 0,
      delay: 0.77,
      duration: 0.77,
      ease: "slow(0.5, 0.8, true)",
    });

  }
}, [animate]);


  return (

    <nav className='nav-links duration-500 md:static lg:bg-transparent md:bg-transparent absolute md:min-h-fit min-h-screen  md:w-auto  w-full flex items-center justify-center px-5 top-0 z-90'  style={{left: !toggle? '-100%': '0%'}}>
      <ul className='list lg:text-md md:text-md flex md:flex-row flex-col md:items-center gap-8 md:justify-around text-center  ' ref={listRef}>
       <button className='md:hidden lg:hidden absolute top-2 right-0 ' onClick={()=>{settoggle(false);setAnimate(false)}}><IoCloseSharp size={30}/></button>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`list-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        
        ))}
   <div className=' md:hidden lg:hidden flex items-center gap-2 justify-center mt-3 pt-5' ref={btnref}>
    <ThemeBtn/>
    <LetsTalk/>
   </div>
      </ul>
    </nav>
  )
}

export default Navbar;
