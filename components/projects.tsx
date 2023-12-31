"use client";
import React from 'react'
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { projectsData } from '@/lib/data'; 
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
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

type ProjectProps = (typeof projectsData)[number]; // number = iterate through all objects without needing to write the for loop

function Project({ title, description, tags, imageUrl } : ProjectProps) {
    return (
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] mb-3 sm:mb-8 flex flex-col h-full last:mb-0">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
            ))
            } </ul>
            </div>
            <Image src={imageUrl} alt="Project I worked on." quality={95} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"/>
        </section>
    );
}