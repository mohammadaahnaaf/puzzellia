import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string;
    subtitle: string;
    link: string
}

export const GameCard = (props: Props) => {
    return (
        <div>
            <div className='relative grid content-center justify-center cursor-pointer text-pink-600 p-4 gap-4 w-full rounded-lg shadow-lg hover:bg-pink-100 ring-pink-400 hover:ring-2 bg-pink-50'>
                <div className='relative h-20 w-20 mx-auto'>
                    <Image fill src='/puzzellia.svg' className='object-center h-full w-full' alt='games-icon' />
                </div>
                <div className='gap-1 pb-2 grid items-center'>
                    <h2 className='font-semibold text-center text-lg'>{props.title}</h2>
                    <h2 className='font-medium text-center text-sm text-pink-500'>{props.subtitle}</h2>
                </div>
                <Link href={`/games/${props.link}`} className='absolute w-full h-full rounded-lg' />
            </div>
        </div>
    )
}