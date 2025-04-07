import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        {/* <small className='mb-2 text-xs block'>
            &copy; 2024 Ali. I would actually have a copyright here if I made stuff but for now this is a placeholder.
        </small> */}
        <p className='text-xs'>
            <span className='font-semibold'>About this website: </span>built with React, Next.js, TypeScript, TailwindCSS, Framer Motion, React Email and Resend Email API. Hosted on Vercel.
        </p>
    </footer>
  )
}
