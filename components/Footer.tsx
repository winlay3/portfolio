import Image from "next/image";
import React from "react";
import winImage from "@/assets/win.png";
import { IconMail, IconBrandGithub, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-black-100">
      <div className="flex flex-col items-center">
        {/* Name Logo */}
        <Image
          src={winImage}
          alt="My Name Logo"
          width={500}
          height={500}
          className="w-48 cursor-pointer"
        />
        
        {/* Email Section */}
        <div className="flex items-center">
          <IconMail className="w-6 h-6 text-white mr-2" />
          <span className="text-white">winmyintkyaw1234@gmail.com</span>
        </div>
      </div>
      <div className="w-full border-t border-purple py-6 mt-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between">
          <p>© 2025 Win Myint Kyaw. All rights reserved</p>
          <ul className="flex items-center gap-10 mt-4 sm:mt-0">
            <li>
              <a target="_blank" href="https://github.com/" className="flex items-center">
                <IconBrandGithub className="w-5 h-5 mr-1" /> Github
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/" className="flex items-center">
                <IconBrandInstagram className="w-5 h-5 mr-1" /> Instagram
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/" className="flex items-center">
                <IconBrandFacebook className="w-5 h-5 mr-1" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;