"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView("About", 0.75);


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className = "mb-3">
        I'm currently doing my senior year in <span className="font-bold">computer science</span> at NYIT to purue my passion for programming. I have many things I would like to learn, but right now I am focusing on <span className="font-bold">full-stack software development.</span> In my free time, I like to exercise, play video games, and explore New York City. I also enjoy learning new things, and I'm always looking for ways to improve my skills and knowledge. I also am interested in <span className="font-bold">game development and AI.</span> 
      </p>
    </motion.section>
  )

}
