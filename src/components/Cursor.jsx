import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cursor({}) {
  const cursorRef = useRef(null);
  const pointRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const point = pointRef.current;

    // 1. **Centering the Ring:** Centers the 32x32 element on the mouse coordinates.
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // 2. **Centering the Dot (NEW):** We must also center the dot. 
    //    Since you are using `gsap.to(point, { x: e.clientX, y: e.clientY... })` 
    //    to track the mouse, you should use GSAP centering here too for consistency, 
    //    unless you rely purely on the CSS `transform: translate(-50%, -50%)`.
    //    For GSAP animations, it's safer to keep the GSAP offset.
    gsap.set(point, { xPercent: -50, yPercent: -50 });


    const handleMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // 3. **Movement Logic for the Ring (Cursor)**
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 1, // Slower duration for the trailing effect
      });

      // 4. **Movement Logic for the Dot (Point)**
      gsap.to(point, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // Faster duration for a more direct feel
        ease: "power2.out",
      });
    };

    // ... (handleEnter/handleLeave remains the same if you re-add the listeners)

    // 5. **Attach Event Listener**
    window.addEventListener("mousemove", handleMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      {/* Both elements should start at top-0 left-0 for GSAP to handle positioning */}
      <div
        id="cursor"
        ref={cursorRef}
        className="cursor fixed top-0 left-0 pointer-events-none 
                   bg-transparent  text-white text-xs flex items-center justify-center 
                   rounded-full z-1000"
      />
      <div id='point' className="point fixed top-0 left-0 pointer-events-none z-50" ref={pointRef}></div>
    </div>
  );
}
