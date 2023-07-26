import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
}

export const GameCard = (props: Props) => {
    return (
        <div className='grid items-center justify-center cursor-pointer text-pink-600 p-4 gap-4 w-full rounded-lg shadow-lg hover:bg-pink-100 ring-pink-400 hover:ring-2 bg-white'>
            <div className='relative h-20 w-20 mx-auto'>
                <Image fill src='/puzzellia.svg' className='object-center h-full w-full' alt='games-icon' />
            </div>
            <div>
                <h2 className='font-semibold text-center text-lg'>{props.title}</h2>
            </div>
        </div>
    )
}