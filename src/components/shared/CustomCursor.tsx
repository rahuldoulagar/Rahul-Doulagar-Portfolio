"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop devices with fine pointers
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };
    
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[100] mix-blend-difference"
      animate={{
        x: position.x - (isHovering ? 16 : 8),
        y: position.y - (isHovering ? 16 : 8),
        scale: isHovering ? 2 : 1,
        opacity: 0.8
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 2
      }}
    />
  );
}
