import { useModeStore } from "@/store/States";
import Image from "next/image";
import MeshBgCard from "./MeshBgCard";
import CodingProfileCard from "./CodingProfileCard";

export default function ProfileCard() {
  const mode = useModeStore((state) => state.mode);
  return (
    <div className="relative flex items-center w-full md:w-[600px] bg-black/70 md:h-[140px] rounded-xl overflow-hidden">
      {mode === "light" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -bottom-10 -right-10 w-90 h-full bg-gradient-to-r from-slate-900 to-slate-700 opacity-30 blur-3xl rounded-full" />
          <div className="absolute -left-10 w-50 h-full bg-purple-500 opacity-30 blur-xl rounded-full" />
        </div>
      ) : (
        <MeshBgCard></MeshBgCard>
      )}

      <div className="px-[30px] pb-[20px] w-full">
        <div className="relative z-10 flex max-xmd:flex-col max-xmd:py-[30px] items-center md:gap-3 w-full">
          <Image
            src="/akhand.jpeg"
            width={100}
            height={100}
            alt="Akhand"
            className="bg-black rounded-full max-xmd:w-[80px]"
          />
          <div className="w-full">
            <div className="max-xmd:flex max-xmd:flex-col max-xmd:items-center py-[10px]  xsm:px-[10px] md:px-[30px] xmd:py-[35px]">
              <p className="bg-gradient-to-br from-white/60 via-slate-600 to-white/60  text-transparent bg-clip-text  max-xsm:text-lg text-2xl sm:text-3xl font-bold">
                Akhand Pratap Singh
              </p>
              <p
                className={`${
                  mode === "light" ? "text-white/50" : "text-slate-300"
                } font-semibold`}
              >
                I learn, I build things
              </p>
            </div>
            <div className="absolute max-xmd:hidden max-xmd:bottom-0 max-xmd:-left-14 xmd:-right-7 xmd:top-3 bg-[url(/oscar.png)] bg-cover w-[100px] h-[100px]" />
          </div>
        </div>
      </div>
      <CodingProfileCard></CodingProfileCard>
    </div>
  );
}
