"use client";
import AnimatedPage from "@/Pages/AnimatedPage";
import SimplePage from "@/Pages/SimplePage";
import { useWebStyleStore } from "@/store/States";

export default function Home() {
  const webStyle = useWebStyleStore((state) => state.webStyle);

  if (webStyle === "simple") {
    return <SimplePage />;
  }

  return <AnimatedPage />;
}
