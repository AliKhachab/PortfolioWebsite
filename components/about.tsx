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
        I'm a <span className="font-bold">senior student</span> pursuing my bachelor's degree in <span className="font-bold">Computer Science</span> at the New York Institute of Technology (NYIT). I'm currently focusing on mastering <span className="font-bold">full-stack development</span> while exploring emerging technologies. I'm particularly fascinated by <span className="font-bold">artificial intelligence</span> and <span className="font-bold">game development</span>, areas where creativity meets technical problem-solving. When I'm not coding, you can find me in New York City, staying active through exercise, or playing video games.
      </p>
    </motion.section>
  )

}
