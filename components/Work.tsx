import React from 'react'
import { Carousel } from './ui/carousel'
const Work = () => {
  const slideData = [
    {
      title: "DoiTung E-Learning",
      button: "View Project",
      src: "https://i.postimg.cc/mrPX5kQ0/home.png"
      // src: "https://www.doitung.com/wp-content/uploads/slider/cache/377b8e9eac2e17da04d2498921f7b596/doi_tung_RB300157.jpg"
      // src: "https://drive.google.com/uc?export=view&id=17eF7Jxcw8pZ3DfXb6jcipnw3SU6lZv1X",
    },
    {
      title: "University Dormitory System",
      button: "View Project",
      src: "https://i.postimg.cc/DwrybfJ3/rentalx.png",
    },
    {
      title: "University Sports Complex",
      button: "View Project",
      src: "https://i.postimg.cc/qMd7BCqx/sportcomplex.png",
    },
    {
      title: "Hackathon Project",
      button: "View Project",
      src: "https://i.postimg.cc/HnFsbV9d/hackathon.png",
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
