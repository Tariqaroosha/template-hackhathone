


// import Image from "next/image"
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { CiYoutube } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";

export default function BlueHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
          <LuPhone />
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
          <MdOutlineMailOutline />
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
          <div className="text-white flex gap-2">
          <GrInstagram />
          <CiYoutube />
          <RiFacebookCircleLine />
          <LuTwitter />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}