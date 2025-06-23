import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import trekbagImg from "@/public/trekbag.png";
import focusflow from "@/public/focusflow.png";
import quizapp from "@/public/quizapp.png";
import hustler from "@/public/hustler.png";

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
      "I am currently in my senior year of college at NYIT studying for my B.S. in computer science, and I intend on pursuing a Master's degree. I graduate in Fall 2025 but I intend on staying in school for another semester to prepare for the industry. I am open to internships.",
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
    title: "FocusFlow",
    description:
      "A ReactNative application task managing and Pomodoro timer app to help users focus. Uses Firebase for auth and data storage. ",
    tags: ["ReactNative", "TypeScript", "CSS", "Firebase", "NoSQL", "Expo"], 
    imageUrl: focusflow,
    link: "https://github.com/Jasonl145/FocusFlow_v1.0"
  },
  {
    title: "Hustler",
    description:
      "Led front-end development and demod this hackathon web app project to help gig workers easily manage view all their funds from different banks in one place.",
    tags: ["React", "TypeScript", "Auth0", "Vite", "D3js", "MongoDB"], 
    imageUrl: hustler,
    link: "https://github.com/khamseaffan/Hustler_Hackathon"
  },
    {
    title: "Quiz App",
    description: "A full-stack LAMP web app that allows you to take two quizzes and stores leaderboard data. Built for my Internet Programming class with team. Backend focus.",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    imageUrl: quizapp,
    link: "https://github.com/AliKhachab/ITEC305QuizWebsite"
  },
  {
    title: "CorpComment",
    description:
      "A front-end web application where users can give public feedback to companies. Filter through each company or write comments of your own, using a hashtag to write about the company of choice.",// "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "JavaScript"], // ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    link: "https://github.com/AliKhachab/CorpComment"
  },
  {
    title: "rmtDev",
    description:
      "A job website front-end focused application built for remote developers. Filter, sort, and paginate through companies seamlessly.",//"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "JavaScript", "NodeJS"], //["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://github.com/AliKhachab/rmtDev"
  },
  {
    title: "TrekBag",
    description:
      "A React web app that allows users to keep track of a list of things they need to go on a trip. Add any items you need, mark them as packed, and sort or delete them.",
    tags: ["HTML", "CSS", "JavaScript", "React"],//["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: trekbagImg,
    link: "https://alikhachab.github.io/TrekBag/"
  },
  {
    title: "Word Analytics",
    description:
      "A web app for quick analytics on text. It shows word count, character count and social media post limits. Made a version with React and with vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],//["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/AliKhachab/ReactWordAnalytics"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "ReactNative",
  "Next.js",
  "Node.js",
  "Firebase",
  "Git",
  "Tailwind",
  "C#",
  "WPF",
  "XAML",
  "SQL",
  "PHP",
  "Python",
  "Framer Motion",
] as const;