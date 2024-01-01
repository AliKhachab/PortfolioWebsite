import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <Projects />
      <p className="mb-8 font-black mt-8">Note that these projects are placeholders for me to put my actual real projects. These are projects made by ByteGrad, the person who's tutorial I watched as reference for this website.</p> 
      <SectionDivider />
    </main>
  )
}
