import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import trekbagImg from "@/public/trekbag.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer co-op @ Intersoft Associates",
    location: "Hybrid (Remote/Long Island, NY)",
    description:
      "I worked as an intern at Intersoft Associates for 6 months full time. I worked on a full-stack using XAML for front-end, C# for back-end and SQL Server for database.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Dec 2024",
  },
  {
    title: "Senior year of college @ NYIT",
    location: "NYC, NY",
    description:
      "I am currently in my senior year of college at NYIT studying for my B.S. in computer science, and I intend on pursuing a Master's degree. I graduate in Fall 2025. I am open to internships.",
    icon: React.createElement(LuGraduationCap),
    date: "Fall 2022 - Fall 2025",
  },
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "A front-end web application where users can give public feedback to companies. Filter through each company or write comments of your own, using a hashtag to write about the company of choice.",// "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "JavaScript"], // ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "A job website front-end focused application built for remote developers. Filter, sort, and paginate through companies seamlessly.",//"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "JavaScript", "NodeJS"], //["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "TrekBag",
    description:
      "A React website that allows users to keep track of a list of things they would need to go on a trip. Add any items you need, mark them as packed, and sort or delete them.",
    tags: ["HTML", "CSS", "JavaScript", "React"],//["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: trekbagImg,
  },
  {
    title: "Word Analytics",
    description:
      "A web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "JavaScript"],//["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C#",
  "WPF",
  "XAML",
  "SQL Server",
  "Python",
  "Framer Motion",
] as const;
// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;