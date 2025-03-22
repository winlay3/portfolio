import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

const Services = () => {
  return (
    <section id="skills" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Lines for aesthetic effect */}
      <BackgroundLines className="absolute inset-0">
        {/* Service Content */}
        <div className="relative z-10 text-center  md:px-6">
          <h4 className="text-center mt-4 mb-4 text-lg z-50">
            My Skills & Expertise
          </h4>
          <h2 className="text-center text-5xl ">What I Can Do</h2>

          {/* Add service cards or content here */}
          <p className="text-center max-w-2xl mb-12 mt-10 mx-auto">
            I build scalable and efficient software solutions with expertise in
            Java Spring, microservices, and machine learning. Always eager to
            solve real-world challenges and grow my skills.
          </p>

          <div className="flex flex-wrap justify-center mt-[100px] gap-6">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                Web App & Full-Stack Development
              </GlowingStarsTitle>
              <GlowingStarsDescription>
                I develop modern, responsive web applications.
              </GlowingStarsDescription>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                Problem Solving & Collaboration
              </GlowingStarsTitle>
              <GlowingStarsDescription>
                I analyze and solve complex software challenges.
              </GlowingStarsDescription>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                Microservices & Enterprise Solutions
              </GlowingStarsTitle>
              <GlowingStarsDescription>
                I build scalable backend solutions for enterprises.
              </GlowingStarsDescription>
            </GlowingStarsBackgroundCard>

            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                Machine Learning & Data Science
              </GlowingStarsTitle>
              <GlowingStarsDescription>
                I work with AI and data-driven technologies.
              </GlowingStarsDescription>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Services;
