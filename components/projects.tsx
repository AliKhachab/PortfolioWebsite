"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data'; 
import Project from './project';
import { useSectionInView } from '@/lib/hooks';



export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

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
