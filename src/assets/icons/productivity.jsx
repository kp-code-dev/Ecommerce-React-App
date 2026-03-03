import { IoDesktopOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { BiLogoAdobe } from "react-icons/bi";

function productivity() {
  return (
    <div className="relative flex items-center justify-center w-8 h-8 group-hover:scale-110 transition-transform duration-300">
      <IoDesktopOutline className="w-full h-full text-inherit drop-shadow-lg" />

      <div className="absolute top-[12%] left-0 w-full h-[56%] flex items-center justify-center gap-0.5">
        <FaCode className="w-2.5 h-2.5 text-inherit" />

        <BiLogoAdobe className="w-2.5 h-2.5 text-inherit" />
      </div>
    </div>
  );
}

export default productivity;
