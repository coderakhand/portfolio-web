"use client";

import { useModeStore } from "@/store/States";

export default function SimplePage() {
  const mode = useModeStore((state) => state.mode);
  const darkBackground =
    "bg-gradient-to-br from-black/95 via-black/90 to-black/95";
  const lightBackground =
    "bg-gradient-to-br from-[#111010] via-slate-500 to-[#111010]";
  return (
    <div
      className={`py-[20px] flex justify-center min-h-screen min-w-screen max-xsm:px-[2px]  max-sm:px-[10px] sm:px-[20px] ${
        mode === "dark" ? darkBackground : lightBackground
      }`}
    >
      <div className="py-[20px] flex flex-col gap-3 w-full tmd:w-[800px]"></div>
    </div>
  );
}
