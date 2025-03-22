'use client'
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import winImage from "@/assets/win.png";
import menuImage from "@/assets/menu.png";
import { NavbarDemo } from "./ui/NavBar";

const MainNav = () => {
  const [isScroll, setIsScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  },[])
  
  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 ${isScroll ? "bg-black-100 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        <a href="#top">
          <Image
            src={winImage}
            alt="My Name Logo"
            width={120}
            height={60}
            className="w-48 cursor-pointer mr-14"
          />
        </a>
        <NavbarDemo />
        <div className="flex items-center gap-4">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your navbar height
            duration={1200} // Animation duration in ms
            className="hidden lg:flex items-center justify-center font-bold
              gap-3 px-8 py-2.5 border-2 border-gray-500 rounded-full ml-4 hover:bg-gray-500 hover:text-white hover:border-gray-700
              hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap w-40 cursor-pointer"
            aria-label="Work with me"
          >
            Work with me
          </ScrollLink>
          <button className="block md:hidden ml-3">
            <Image src={menuImage} alt="Menu Icon" width={30} height={30} className="w-6"/>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MainNav;