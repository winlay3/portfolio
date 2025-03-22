import Image from "next/image";
import React from "react";
import languagesIcon from "@/assets/code.png";
import educationIcon from "@/assets/graduation.png";
import projectsIcon from "@/assets/briefcase.png";
import userImage from "@/assets/user_image.jpg";
import gitIcon from "@/assets/git.png";
import vscodeIcon from "@/assets/vscode.png";
import figmaIcon from "@/assets/figma.png";
import dockerIcon from "@/assets/docker.png";
import mongoIcon from "@/assets/mongo.png";
import mysqlIcon from "@/assets/mysql.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 pt-36">
      <h4 className="text-center mb-2 text-lg z-50">Introduction</h4>
      <h2 className="text-center text-5xl ">About Me</h2>

      <div
        className="flex w-full flex-col lg:flex-row items-center
        gap-20 my-20"
      >
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={userImage}
            alt="User"
            className="w-full rounded-3xl"
            width={200}
            height={200}
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-lg text-center md:text-left text-gray-300">
            Software Engineering graduate passionate about web development,
            problem-solving, and learning new technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <div
              className="border-2 border-gray-600 rounded-xl p-5 flex flex-col items-center text-center cursor-pointer 
              hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500"
            >
              <Image
                src={languagesIcon}
                alt="Languages"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold mt-3">Languages</h3>
              <p className="text-md mt-2 text-gray-400">
                JavaScript, React, Nextjs, Java, Python
              </p>
            </div>

            {/* Education */}
            <div
              className="border-2 border-gray-600 rounded-xl p-5 flex flex-col items-center text-center cursor-pointer 
              hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500"
            >
              <Image
                src={educationIcon}
                alt="Education"
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold mt-3">Education</h3>
              <p className="text-md mt-2 text-gray-400">
                Bachelor's in Software Engineering
              </p>
            </div>

            {/* Projects */}
            <div
              className="border-2 border-gray-600 rounded-xl p-5 flex flex-col items-center text-center cursor-pointer 
              hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500"
            >
              <Image src={projectsIcon} alt="Projects" width={40} height={40} />
              <h3 className="text-lg font-semibold mt-3">Projects</h3>
              <p className="text-md mt-2 text-gray-400">
                Completed over 5 projects
              </p>
            </div>
          </div>
          <h2 className="text-xl mt-14">Tools I Use:</h2>

<div className="grid grid-cols-2 md:grid-cols-10 gap-2 mt-3">
  {/* VS Code */}
  <div className="border-2 border-gray-600 rounded-xl p-1 flex flex-col items-center text-center cursor-pointer
   hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500">
    <Image src={vscodeIcon} alt="VS Code" width={30} height={30} />
  </div>

  {/* Git */}
  <div className="border-2 border-gray-600 rounded-xl p-1 flex flex-col items-center text-center cursor-pointer
   hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500">
    <Image src={gitIcon} alt="Git" width={30} height={30} />
  </div>

  {/* Node.js */}
  <div className="border-2 border-gray-600 rounded-xl p-1 flex flex-col items-center text-center cursor-pointer
   hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500">
    <Image src={mongoIcon} alt="MongoDB" width={30} height={30} />
  </div>

  {/* Figma */}
  <div className="border-2 border-gray-600 rounded-xl p-1 flex flex-col items-center text-center cursor-pointer
   hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500">
    <Image src={figmaIcon} alt="Figma" width={30} height={30} />
  </div>

  {/* Docker */}
  <div className="border-2 border-gray-600 rounded-xl p-1 flex flex-col items-center text-center cursor-pointer
   hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500">
    <Image src={dockerIcon} alt="Docker" width={30} height={30} />
  </div>
  <div className="border-2 border-gray-600 rounded-xl p-1 flex flex-col items-center text-center cursor-pointer
   hover:bg-gray-800 hover:scale-105 transition-transform hover:-translate-y-1 duration-500">
    <Image src={mysqlIcon} alt="MySql" width={30} height={30} />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
