import Link from "next/link";
// import { GiFireDash } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className="fixed bottom-0  flex justify-center pb-4 w-98">
      <div className="w-80 h-10 bg-black rounded-full border-white/16 border-[0.5px] px-4 text-white/40 flex justify-around items-center">
        <Link href={"/"}>
          <button>Home</button>
        </Link>
        <Link href={"/blogs"}>
          <button>Blogs</button>
        </Link>
        <Link href={"/life"}>
          <button>Life</button>
        </Link>
      </div>
    </div>
  );
}
