"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
      <p className="flex items-center justify-center">
        <span className="font-bold">Hello! I'm Ali.</span> I'm currently a{" "}
        <span className="font-bold">computer science student </span> studying for my B.S. degree.
      </p>
        <div className="flex items-center justify-center">
            <div className = "relative">
                <motion.div
                initial = {{opacity: 0, scale: 0}}
                animate = {{opacity: 1, scale: 1}}
                transition = {{ease: "easeInOut", duration: 0.25}}> 
                  <Image src="https://media.licdn.com/dms/image/D4E03AQFpZVUVMWqQ9A/profile-displayphoto-shrink_800_800/0/1696641139700?e=1709164800&v=beta&t=p6sQkr030FQfmizO7zWBivRCbSut0uUpJfdTJbkR8Os" alt="Portrait of Ali Khachab." width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover shadow-xl border-[0.4rem] border-white"/>
                </motion.div>
                <motion.span className="text-4xl absolute bottom-0 right-0"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{bounce: 0.35, duration: 0.7, delay: 0.1, type: "spring"}}>
                🫡
                </motion.span>
            </div>
        </div>
    </section>
  )
}
