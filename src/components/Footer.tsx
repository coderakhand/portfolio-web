import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full  pb-40 flex flex-col justify-center items-center gap-4 pt-36">
        <div className="h-px w-full bg-white/40 rounded-full mb-4"/>
      <div className="flex gap-10 px-2" id="contact-info">
        <div className="flex justify-center items-center">
          <a href="mailto:coderakhand@gmail.com" target="_blank">
            <SiGmail className="w-6 h-6 text-white/40 hover:text-white" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://x.com/coderakhand" target="_blank">
            <FaXTwitter className="w-6 h-6 text-white/40 hover:text-white" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.linkedin.com/in/coderakhand" target="_blank">
            <FaLinkedinIn className="w-6 h-6 text-white/40 hover:text-white" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white/40 text-xs w-full flex justify-center">© 2025 Akhand Pratap Singh. All rights reserved.</p>
      </div>
      <div/>
    </div>
  );
}
