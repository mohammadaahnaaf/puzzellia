import React from 'react'
import { ThermoSVG } from './ThermoSVG'

type Props = {
    boards: any[];
    shows: boolean
}

export const ThermoBoards = (props: Props) => {
    return (
        <div className='flex flex-wrap gap-4 justify-center w-full'>
            {props.boards?.map((x: any, index: number) => (
                <div id={`canvas${index + 1}`} key={index} className='max-h-[45vh] w-[50vh] flex justify-center items-center rounded-md bg-pink-50 shadow-lg'>
                    <ThermoSVG temps={x} shows={props.shows} />
                </div>
            ))}
        </div>
    )
}