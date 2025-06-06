"use client";
import { useTheme } from '@/context/theme-context';
import { addHookAliases } from 'next/dist/server/require-hook';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { HiDocumentSearch } from 'react-icons/hi';



export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className='fixed bottom-5 right-5 z-10000 bg0white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
    onClick={toggleTheme}>
        { theme === "light" ? <BsSun /> : <BsMoon /> } 

    </button>
  )
} 

