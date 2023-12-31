"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'; 
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section className = "mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className = "relative">
                <motion.div
                initial = {{opacity: 0, scale: 0}}
                animate = {{opacity: 1, scale: 1}}
                transition = {{ease: "easeInOut", duration: 0.25}}> 
                  <Image src="https://media.licdn.com/dms/image/D4E03AQFpZVUVMWqQ9A/profile-displayphoto-shrink_800_800/0/1696641139700?e=1709164800&v=beta&t=p6sQkr030FQfmizO7zWBivRCbSut0uUpJfdTJbkR8Os" alt="Portrait of Ali Khachab." width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  />
                </motion.div>
                  <motion.span
                    className="absolute bottom-0 right-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                  }}
                  >
                    👋
                  </motion.span>
            </div>
        </div>
        <motion.h1 className="mb-10 mt-4 px-4 text-3xl font-medium leading-[1.5]"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}>
          <span className="font-bold">Microsoft please hire me.</span> I'm so fucking poor{" "}
          <span className="font-bold">So many vacuums while I am on Fortnite... </span> 4090 supercomputer in my brain I promise I'm internship worthy{" "}
          <span className="font-bold">我饿死了 </span> Where Broly in Fortnite 
      </motion.h1>
      <motion.div className = "flex justify-center items-center sm:flex-row flex-col gap-2 font-medium text-lg"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}>
        <Link href="#contact" className="bg-gray-900 px-7 py-3 text-white flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all group outline-none cursor-pointer">
          Contact me! <BsArrowRight className="group-hover:translate-x-1 opacity-70 transform" />{" "}
        </Link>

        <a href='/Ali_Khachab_Downloadable_Résumé.pdf' className="bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all group outline-none cursor-pointer border border-black/10" download>
          Download résumé <HiDownload className="opacity-60 group-hover:translate-y-0.5" />{" "} 
        </a>

        <a href='https://www.linkedin.com/in/ali-khachab-a70909257/' className="bg-white p-4 items-center text-[1.35rem] flex gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all group outline-none cursor-pointer border border-black/10 text-gray-700 hover:text-gray-950" target="_blank">
          <BsLinkedin/>{" "} 
        </a>

        <a href='https://www.github.com/AliKhachab' className="bg-white p-4 items-center text-[1.35rem] flex gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all group outline-none cursor-pointer border border-black/10 text-gray-700 hover:text-gray-950" target="_blank">
          <BsGithub />{" "} 
        </a>
      </motion.div>
    </section>
  )
}
