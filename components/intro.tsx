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
                  <Image src="https://media.licdn.com/dms/image/D4E03AQFpZVUVMWqQ9A/profile-displayphoto-shrink_800_800/0/1696641139700?e=1709164800&v=beta&t=p6sQkr030FQfmizO7zWBivRCbSut0uUpJfdTJbkR8Os" alt="Portrait of Ali Khachab." width="192" height="192" quality="95" priority={true} className="h-30 w-30 rounded-full object-cover shadow-xl border-[0.4rem] border-white"/>
                </motion.div>
                <motion.span className="text-4xl absolute bottom-0 right-0"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{bounce: 0.35, duration: 0.7, delay: 0.1, type: "spring"}}>
                🫡
                </motion.span>
            </div>
        </div>
        <motion.p className="mb-10 mt-4 px-4 text-3xl font-medium leading-[1.5]">
          <span className="font-bold">If they don't nerf JP</span> I swear to God{" "}
          <span className="font-bold">I will handle Capcom myself. </span> IDK what to put here.{" "}
          <span className="font-bold">I need money. </span> Pokemon Company International please up your game quality. 
      </motion.p>
      <div className = "flex justify-center items-center">
        <Link href="#contact" className="bg-gray-900 px-7 py-3 text-white flex items-center gap-2 rounded-full">
          Contact me! <BsArrowRight />{" "}
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
          Download résumé <HiDownload />{" "} 
        </a>
        <a className="bg-white p-4 items-center text-[1.35rem] flex gap-2 rounded-full">
          <BsLinkedin />{" "} 
        </a>
        <a className="bg-white p-4 items-center text-[1.35rem] flex gap-2 rounded-full">
          <BsGithub />{" "} 
        </a>
      </div>
    </section>
  )
}
