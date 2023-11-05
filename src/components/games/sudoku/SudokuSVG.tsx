import React from 'react'

type Props = {
    temps: any;
    shows: boolean
}

export const SudokuSVG = (props: Props) => {

    let temps = props.temps

    return temps.temp1 !== undefined ? (
        <div className='h-[40vh]'>
            <h2 className='text-center h-full text-3xl items-center'>Comming Soon</h2>
        </div>
    ) : null
}