import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
const SocialMediaLinks = () => {
  return (
    <div className="flex gap-6 justify-center items-center ">
      <BsTwitterX cursor={"pointer"} size={25} color="#A1A1AA" />
      <IoLogoLinkedin cursor={"pointer"} size={25} color="#A1A1AA" />
      <FaFacebook cursor={"pointer"} size={25} color="#A1A1AA" />
    </div>
  );
};

export default SocialMediaLinks;
