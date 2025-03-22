'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";


export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
  <div className="max-w-7xl w-full px-5 sm:px-10">
    <Hero/>
    <About/>
  </div>
  <Services/> {/* Now a direct child of main */}
  <div className="max-w-7xl w-full px-5 sm:px-10">
    <Work/>
    <Contact/>
  </div>
</main>
      <Footer/>
    </>
  );
}
