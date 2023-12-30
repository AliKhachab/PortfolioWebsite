import React from 'react'
import Image from 'next/image';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image src="https://media.licdn.com/dms/image/D4E03AQFpZVUVMWqQ9A/profile-displayphoto-shrink_800_800/0/1696641139700?e=1709164800&v=beta&t=p6sQkr030FQfmizO7zWBivRCbSut0uUpJfdTJbkR8Os" alt="Portrait of Ali Khachab."/>
            </div>
        </div>
    </section>
  )
}
