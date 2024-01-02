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
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll:mt-28"
    initial={{y:100, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{delay:0.175, type: "bounce"}}
    id="about">
      <SectionHeading>About me</SectionHeading>
      <p className = "mb-8">
        I'm currently working towards a Bachelor's degree in <span className="font-bold">computer science</span> at NYIT to purue my passion for programming. I have many goals I want to achieve, and the first is <span className="font-bold">full-stack software development.</span> 
      </p>
      <p>
        In my free time, I like to work out, play video games, and roam around New York City. Once I fulfill my academic goals, I might start trying to work in game development or machine learning. 
      </p>
    </motion.section>
  )
  
}
