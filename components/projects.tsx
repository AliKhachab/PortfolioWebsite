"use client";
import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data'; 
import Project from './project';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";



export default function Projects() {
  const { ref, inView } = useInView({threshold:0.5});
  const { setActiveSection } = useActiveSectionContext();

  useEffect( () => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section className = "text-center justify-center items-center scroll-mt-28" id="projects" ref={ref}>
        <SectionHeading>My projects</SectionHeading>
        <div>
            { // note that these projects should be turned into mine soon, not the YouTuber's. this is just filler
            projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <Project {...project} />
                </React.Fragment>
            ))
            }
        </div>
    </section>
  )
}
