
import React from "react";
import SectionHeading from "../molecules/SectionHeading";
import Image from "next/image";
import Logo from "../atoms/Logo";

const BentoGrid = () => {
  return (
    <div className="flex justify-center flex-col  items-center gap-6 md:gap-12 py-6">
      <SectionHeading
        title={"Why join circuit?"}
        subtitle={"Where developers are their own rulers"}
      />

      <div className="flex w-full h-[300vh] md:h-[95vh]  md:px-6  items-center justify-center">
        <div className="grid h-full w-full grid-cols-12 grid-rows-12 gap-3">
          <div className="bento bento1 col-span-12 md:col-span-3  row-span-2 md:row-span-8 relative flex ">
            <Image
              alt="bg"
              src={"/bento/bento1.png"}
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 opacity-15"
            ></Image>
            <div className="bento-container1">
              <p className="bento-heading">Challenge Accepted</p>
              <p className="bento-description">
                Dive headfirst into adrenaline-pumping hackathons! Join our
                vibrant hackathons and test your coding prowess.
              </p>
            </div>
          </div>
          <div className="bento bento1 col-span-12 md:col-span-6 row-span-2 md:row-span-4 overflow-hidden">
            <Image
              alt="bg"
              src={"/bento/bento1.png"}
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 opacity-15"
            ></Image>
            <div className="bento-container2">
              <p className="bento-heading">Level Up Your Skills</p>
              <p className="bento-description2">
                Sharpen your knowledge with in-depth tutorials and expert
                discussions.
              </p>
            </div>
           
             
                <Image
                  alt="skills"
                  src={"/bento/skills.svg"}
                   width={800} height={800}
                  objectFit="fill"
                  className="absolute right-24 bottom-28 md:bottom-5 md:right-10 scale-150 md:scale-100 "
                />

          </div>
          <div className="bento bento2 col-span-12 md:col-span-3  row-span-2 md:row-span-8">
            <Image
              alt="bg"
              src={"/bento/bento2.png"}
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 opacity-15"
            ></Image>
            <div className="bento-container1">
              <p className="bento-heading">Empower Your Career</p>
              <p className="bento-description">
                Access exclusive resources, job opportunities, and valuable
                career guidance.
              </p>
            </div>
          </div>
          <div className="bento flex justify-center items-center bentologo col-span-12 md:col-span-6 row-span-2 md:row-span-4">
            <Image
              alt="bg"
              src={"/bento/bentologo.png"}
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 opacity-15"
            ></Image>
            {/* <Image
              alt="bg"
              src={"/bento/logobg.svg"}
              layout="fill"
              objectFit="cover"
              className="absolute  opacity-15"
            ></Image> */}
            <div className="scale-150">
              <Logo />
            </div>
          </div>

          <div className="bento bento2 col-span-12 md:col-span-6 row-span-2 md:row-span-5">
            <Image
              alt="bg"
              src={"/bento/bento2.png"}
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 opacity-15"
            ></Image>
            <div className="bento-container2">
              <p className="bento-heading">Community Forum</p>
              <p className="bento-description2">
                Ditch the solo grind! Connect & code with your developer tribe
                at Circuit.
              </p>
            </div>
          </div>
          <div className="bento bento1 col-span-12 md:col-span-6 row-span-2 md:row-span-5">
            <Image
              alt="bg"
              src={"/bento/bento1.png"}
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 opacity-15"
            ></Image>
            <div className="bento-container2">
              <p className="bento-heading">Fuel Your Inspiration</p>
              <p className="bento-description2">
                Explore innovative ideas, insightful discussions, and projects
                to spark your creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

