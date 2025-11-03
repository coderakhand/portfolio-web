"use client";

import { useEffect, useState } from "react";

export default function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    addEventListener("mousemove", updateMousePosition);
    return () => {
      removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return position;
}
