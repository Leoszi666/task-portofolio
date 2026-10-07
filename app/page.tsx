import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="w-full flex-1">
        <div className="max-w-[1080px] mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Skills />
          <ProjectGrid />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
