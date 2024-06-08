import React from "react";
import StyledButton from "../atoms/StyledButton";
import HeaderSVG from "../atoms/HeaderSVG";

const HeaderSection = () => {
  return (
    <div id="#home" className=" header mb-8 md:mb-32 w-full h-[85vh] relative overflow-hidden py-14">
      <div className="flex justify-center flex-col items-center gap-5 md:gap-3">
        <div className="text-white text-4xl md:text-7xl tracking-[-1.54px] mx-auto text-center font-light px-4 md:px-0">
          The Dev Community that doesn’t suck.
        </div>
        <div className="text-white text-lg md:text-[22px] tracking-wide text-center w-full px-2 md:w-3/5 font-light ">
          <span className="italic">Tired of coding in solitude?</span> <br /> Dive into <span className="font-normal">Circuit</span>, the thriving developer
          haven where you can learn, share, and level up your skills alongside
          passionate peers.
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-2/3  md:top-1/2 z-10 "><StyledButton buttonText={"Join Now"} /></div>
      <div className="absolute scale-75 md:scale-100 -bottom-32 md:-bottom-20 left-1/2 -translate-x-1/2 ">
        <HeaderSVG />
      </div>
    </div>
  );
};

export default HeaderSection;
