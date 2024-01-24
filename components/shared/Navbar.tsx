import React from "react";
import logo from "@/public/assets/shared/logo.svg";
import Image from "next/image";
import SlideShowButton from "./SlideShowButton";
const Navbar = () => {
  return (
    <nav className=" flex justify-between py-7 ">
      <Image src={logo} alt="logo" className=" w-44 max-md:w-28" />
      <SlideShowButton>Start Slideshow</SlideShowButton>
    </nav>
  );
};

export default Navbar;
