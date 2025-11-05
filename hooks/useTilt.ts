// hooks/useTilt.ts
import { useEffect, useRef } from "react";

export const useTilt = (ref: React.RefObject<HTMLElement>) => {
 useEffect(() => {
  const element = ref.current;
  if (!element) return;

  const handleMouseMove = (e: MouseEvent) => {
   const rect = element.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;

   const centerX = rect.width / 2;
   const centerY = rect.height / 2;

   const rotateX = (y - centerY) / 25;
   const rotateY = (centerX - x) / 25;

   element.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
  };

  const handleMouseLeave = () => {
   element.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
   element.removeEventListener("mousemove", handleMouseMove);
   element.removeEventListener("mouseleave", handleMouseLeave);
  };
 }, [ref]);
};
