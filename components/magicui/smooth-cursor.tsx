"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface SmoothCursorProps {
  className?: string;
}

export const SmoothCursor: React.FC<SmoothCursorProps> = ({ className = "" }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        cursorX.set(touch.clientX - 16);
        cursorY.set(touch.clientY - 16);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-primary-600 mix-blend-difference ${className}`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};