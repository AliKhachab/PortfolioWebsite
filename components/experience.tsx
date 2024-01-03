import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export default function Experience() {

  const { ref } = useSectionInView("Experience");


  return (
    <section id="experience" ref = { ref }>
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline>
            <VerticalTimelineElement>
                
            </VerticalTimelineElement>
        </VerticalTimeline>
    </section>
  )
}
