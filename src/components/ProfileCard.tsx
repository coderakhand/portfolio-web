import Link from "next/link";
import AnimatedName from "./AnimatedName";
import CodingProfileCard from "./CodingProfileCard";
import { FcContacts } from "react-icons/fc";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function ProfileCard() {
  return (
    <div className="w-full flex justify-center gap-2 h-28">
      <div className="w-28 h-full relative  overflow-hidden rounded-lg">
        <video
          src="/videos/akhand_model.mp4"
          autoPlay
          muted
          className="absolute w-full -top-8"
        ></video>
      </div>
      <AnimatedName className="max-sm:hidden w-98" />
      <div className="flex flex-col py-3 justify-center items-center gap-3 h-full w-10 bg-black/60 rounded-full">
        <Link href="#contact-info">
          <FcContacts className="w-7 h-7" />
        </Link>
        <a
          href="https://drive.google.com/file/d/1EiG0A7Jd0UTJ8e9_jU8STo8C6-5-X5eM/view?usp=sharing"
          target="_blank"
          className="text-3xl flex justify-center w-[35px] h-[35px] rounded-full"
        >
          <PiReadCvLogoFill className="fill-blue-500 w-7 strok-2 -rotate-10" />
        </a>
      </div>
      <CodingProfileCard />
      <div className="w-7 h-full  py-2">
        <div className="h-full bg-white w-full  rounded-full">
          <div className="-rotate-90 translate-y-9 fo font-allura flex justify-center gap-1">
            <p>{"<"}</p>
            <p>Skills</p>
            <p>{"/>"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
