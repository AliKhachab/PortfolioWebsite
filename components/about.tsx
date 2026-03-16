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
      <p className="mb-3">
        I'm a <span className="font-bold">Computer Science graduate</span> from
        the <span className="font-bold">New York Institute of Technology</span>,
        where I earned my B.S.{" "}
        <span className="font-bold">Summa Cum Laude</span>. I'm currently
        seeking opportunities in{" "}
        <span className="font-bold">software engineering</span> and{" "}
        <span className="font-bold">game development</span>, with a strong
        interest in building scalable systems and engaging interactive
        experiences. My background includes{" "}
        <span className="font-bold">full-stack development, gameplay
        programming</span>, and working with technologies such as{" "}
        <span className="font-bold">
          C++, C#, JavaScript/TypeScript, React, Unreal Engine, and Godot
        </span>
        . I enjoy tackling complex technical challenges and turning ideas into
        polished, functional software. I'm particularly passionate about{" "}
        <span className="font-bold">
          gameplay systems, multiplayer architecture, and artificial
          intelligence
        </span>
        —areas where creativity and engineering intersect. When I'm not coding,
        you can usually find me in New York City, staying active through
        exercise, or playing video games.
      </p>
    </motion.section>
  );
}
