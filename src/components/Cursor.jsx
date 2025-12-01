import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cursor({}) {
  const cursorRef = useRef(null);
//   const imageRef = useRef(null);
const pointRef=useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current;
   const point=pointRef.current;
   gsap.set(cursor, { xPercent: -50, yPercent: -50 });
gsap.set(point, { xPercent: -50, yPercent: -50 });



  
    const handleMove = (e) => {
     let mouseX = e.clientX;
    let mouseY = e.clientY;
      gsap.to(cursor, {
       x: mouseX,
        y: mouseY,
        duration: 1,
      });
     
      gsap.to(point, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power2.out"
      });
    };

    // Image hover enter
    const handleEnter = () => {
      cursor.innerHTML = "View More";
      gsap.to(cursor, { scale: 4 });
    };

    // Image hover leave
    const handleLeave = () => {
      cursor.innerHTML = "";
      gsap.to(cursor, { scale: 1 });
    };

    window.addEventListener("mousemove", handleMove);

    // Image hover events
    // image.addEventListener("mouseenter", handleEnter);
    // image.addEventListener("mouseleave", handleLeave);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMove);
    //   image.removeEventListener("mouseenter", handleEnter);
    //   image.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="cursor fixed top-0 left-0 pointer-events-none 
                   bg-transparent  text-white text-xs flex items-center justify-center 
                   rounded-full z-1000"
      />
   <div id='point'  className="point fixed top-[50] left-[50] pointer-events-none z-50" ref={pointRef}></div>
   
    </div>
  );
}
