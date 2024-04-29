import Image from "next/image";
import React from "react";
import Computer from "@/assets/images/ux.png";

const Banner = () => {
  return (
    <div className="banner-gradient p-5 relative rounded-lg lg:mb-4 overflow-hidden  lg:py-10 lg:px-7 lg:col-span-12 lg:row-span-2">
      <Image
        src={Computer}
        alt="computer"
        className="absolute w-[130px] lg:w-[160px] -top-2 -left-3"
      />
      <div className="ml-32 lg:ml-36">
        <h2 className="text-[16px] lg:text-[20px] text-white  font-bold">
          Newsfeed
        </h2>
        <h4 className="text-[14px] text-[#F5F3FF]">
          Check what your friends have been up to
        </h4>
      </div>
    </div>
  );
};

export default Banner;
