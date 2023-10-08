// import React from 'react'
// import { MazeSVG } from './MazeSVG'

type Props = {
    boards: any[];
    shows: boolean
}

export const MazeBoards = (props: Props) => {
    return (
        <div className='col-span-5 flex flex-wrap gap-4 justify-center w-full'>
            Comming Soon...
            {/* {props.boards?.map((x: any[], index: number) => (
                <div id={`canvas${index + 1}`} key={index} className='max-h-[45vh] w-[50vh] flex justify-center items-center rounded-md bg-pink-50 shadow-lg'>
                    <MazeSVG mazes={x} shows={props.shows} />
                </div>
            ))} */}
        </div>
    )
}