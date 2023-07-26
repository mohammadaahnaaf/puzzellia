import React from 'react'

type Props = {}

export const TopHeader = (props: Props) => {
    return (
        <div className='h-[40vh] grid items-center'>
            <div className='grid gap-4'>
                {/* <h1 className='text-6xl text-center kufi-font font-bold text-pink-500'>مرحـــبا بكم في پـــازلـــيا</h1> */}
                <h1 className='text-6xl text-center font-bold text-pink-500'>Welcome To Puzzellia</h1>
                <h2 className='text-center text-2xl font-semibold text-pink-600'>Fun Way To Learn About Math, Geomatry And Puzzle Games.</h2>
            </div>
        </div>
    )
}