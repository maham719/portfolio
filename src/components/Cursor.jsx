import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cursor({}) {
  const cursorRef = useRef(null);
//   const imageRef = useRef(null);
const pointRef=useRef(null)

useEffect(() => {
    const cursor = cursorRef.current;
    const point = pointRef.current;

    // Keep this for the RING, as it centers the 32x32 ring
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // **REMOVE OR COMMENT OUT THIS LINE** (We will use CSS for the dot's offset)
    // gsap.set(point, { xPercent: -50, yPercent: -50 }); 
    
    // ... rest of the code is fine

    const handleMove = (e) => {
        // ...
        // Your movement logic is correct for both elements
    };

    // ...
}, []);

return (
    <div>
        {/* Cursor JSX is fine */}
        <div
            id="cursor"
            ref={cursorRef}
            className="cursor fixed top-0 left-0 pointer-events-none 
                        bg-transparent  text-white text-xs flex items-center justify-center 
                        rounded-full z-1000"
        />
        {/* **FIX: Use top-0 and left-0 for initial position** */}
        <div id='point' className="point fixed top-0 left-0 pointer-events-none z-50" ref={pointRef}></div> 
    </div>
);}