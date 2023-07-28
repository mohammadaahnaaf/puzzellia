import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
  return (
    <div className='bg-pink-200'>
      <header className='max-w-6xl w-full mx-auto grid'>
        <div className='p-2 flex items-center gap-4'>
          <div className='relative w-[64px] h-[64px]'>
            <Image src='/puzzellia.svg' className='object-fit h-full custom-spin' fill alt='puzzellia-logo' />
          </div>
          <Link href='/' className='text-xl font-bold text-[#EE2345] hover:text-white'>PUZZELLiA</Link>
        </div>

      </header>
      <nav></nav>
    </div>
  )
}