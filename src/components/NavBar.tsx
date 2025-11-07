import Link from "next/link";
import React from "react";
import { GiFireDash } from "react-icons/gi";
import { FaFolderClosed } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function NavBar() {
  return (
    <div className="fixed bottom-0  flex justify-center pb-2 w-full max-w-98 px-2">
      <div className="z-50 py-1 w-full max-w-80 h-11 bg-black rounded-full border-white/16 border-[0.5px] px-4 text-white/40 flex justify-around items-center">
        <NavItem href="/" name="Home">
          <MdHome className="h-4 w-4" />
        </NavItem>
        <NavItem href="/blogs" name="Blogs"  className="gap-0.5">
          <FaFolderClosed className="w-3 h-3" />
        </NavItem>
        <NavItem href="/life" name="Life"  className="gap-0.5">
          <GiFireDash className="h-3 w-3" />
        </NavItem>
      </div>
    </div>
  );
}

function NavItem({
  name,
  href,
  children,
  className,
}: {
  name: string;
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href}>
      <div
        className={twMerge(
          "flex flex-col justify-center items-center hover:text-white/80 text-white/30 transition-colors duration-150 ease-out",
          className
        )}
      >
        <div className="w-full h-full flex justify-center items-center ">
          {children}
        </div>
        <div className=" text-xs flex items-center">{name}</div>
      </div>
    </Link>
  );
}
