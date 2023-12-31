import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode,
};

export default function SectionHeading({ children } : SectionHeadingProps) {
  return (
    <h2 className="font-medium text-3xl mb-3 capitalize mb-8 sm:mb-40 text-center">{ children }</h2>
  )
}
