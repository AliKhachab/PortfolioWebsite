"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);
  return (
    <section className="mb-20 sm:mb-28  " id="contact" ref={ref}>
        <SectionHeading>Contact me</SectionHeading>
        <p>Please contact me directly at <a href="mailto:a.khachab620@gmail.com" className="underline">a.khachab620@gmail.com</a>{" "} or through this form:</p>

        <form>
            <input type="email" />
            <textarea />
            <button type="submit">Submit <FaPaperPlane /></button>
        </form>
    </section>
  )
}
