import React from 'react'
import { MathSVG } from './MathSVG';

type Props = {
    boards: any;
    shows: boolean;
    digit: number;
}

export const Boards = (props: Props) => {
    return (
        <div className='col-span-5 grid grid-cols-2 gap-4 justify-center w-full'>
            {props.boards?.map((x: any, index: number) => (
                <div id={`canvas${index + 1}`} key={index} className='h-full w-full flex justify-center items-center rounded-md bg-pink-50 shadow-lg'>
                    <MathSVG digit={props.digit} numbers={x.items} total={x.sum} shows={props.shows} />
                </div>
            ))}
        </div>
    )
}