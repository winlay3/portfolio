import React from 'react'
import { Carousel } from './ui/carousel'

const Work = () => {
    const slideData = [
        {
          title: "Mystic Mountains",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Urban Dreams",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Neon Nights",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Desert Whispers",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mt-2 mb-4 text-lg z-50">
            My Portfolio
          </h4>
          <h2 className="text-center text-5xl ">My Latest Work</h2>

          {/* Add service cards or content here */}
          <p className="text-center max-w-2xl mb-12 mt-10 mx-auto">
  I create web apps, system solutions, and user-friendly designs to solve real-world problems. Each project is a step toward better technology and seamless user experiences.
</p>
    <Carousel slides={slideData}/>
    </div>
  )
}

export default Work
