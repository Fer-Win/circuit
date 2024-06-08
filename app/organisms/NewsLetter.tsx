import Image from "next/image";
import React from "react";
import EmailInput from "../molecules/EmailInput";

const NewsLetter = () => {
  return (
    <div className="newsletter relative w-full h-[60vh] my-20 overflow-hidden flex justify-center items-center">
      <Image
        alt="star"
        src={"/shapes/star.svg"}
        width={200}
        height={200}
        objectFit="cover"
        className="absolute top-0 left-0"
      ></Image>
      <Image
        alt="ellipse"
        src={"/shapes/ellipse.svg"}
        width={200}
        height={200}
        objectFit="cover"
        className="absolute bottom-0 right-0"
      ></Image>
      <div className="flex justify-center gap-10 flex-col items-center  w-full">
        <div className="text-4xl md:text-section-title text-center font-light w-[45%]">
          Keep up to date with Circuit and join our news letter
        </div>
        <EmailInput/>
      </div>
    </div>
  );
};

export default NewsLetter;
