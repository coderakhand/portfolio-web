"use client";
import { useModeStore } from "@/store/States";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileCard() {
  const mode = useModeStore((state) => state.mode);
  return (
    <motion.div
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      }}
      className="relative px-[30px] flex items-center w-full md:w-[600px] bg-black/70 md:h-[140px] rounded-xl overflow-hidden"
    >
      {mode === "light" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -bottom-10 -right-10 w-90 h-full bg-gradient-to-r from-slate-900 to-slate-700 opacity-30 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-90 h-full bg-blue-500 opacity-30 blur-3xl rounded-full" />
          <div className="absolute -left-10 w-50 h-full bg-purple-500 opacity-30 blur-xl rounded-full" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-r from-slate-900 to-slate-700 opacity-30 blur-3xl rounded-full" />
          <div className="absolute  w-full h-full bg-blue-500 opacity-30 blur-xl rounded-full" />
        </div>
      )}

      <div className="relative z-10 flex max-xmd:flex-col max-xmd:py-[30px] items-center md:gap-3 w-full">
        <Image
          src="/akhand.jpeg"
          width={100}
          height={100}
          alt="Akhand"
          className="bg-black rounded-full max-xmd:w-[100px] max-sm:w-[80px]"
        />
        <div className="w-full">
          <div className="max-xmd:flex max-xmd:flex-col max-xmd:items-center py-[10px]  xsm:px-[10px] md:px-[30px] xmd:py-[35px]">
            <p className="bg-gradient-to-br from-white/60 via-slate-600 to-white/60  text-transparent bg-clip-text  max-xsm:text-lg text-2xl sm:text-3xl font-bold">
              Akhand Pratap Singh
            </p>
            <p
              className={`${
                mode === "light" ? "text-white/50" : "text-slate-950"
              } font-semibold`}
            >
              I learn, I build things
            </p>
          </div>
          <p className="bg-gradient-to-br from-white/60 via-slate-600 to-white/60  text-transparent bg-clip-text text-xs absolute bottom-0 -right-6 max-md:bottom-1 max-xsm:text-[10px]">
            {'"College lectures are boring coding is cool!"'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
