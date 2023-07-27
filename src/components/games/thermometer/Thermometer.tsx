import React from 'react'
import { Thermoc } from './boardData'
import { ThermoSVG } from './ThermoSVG'

type Props = {

}

export const Thermometer = (props: Props) => {

    const [temps, setTemps] = React.useState<any>({})
    const [boards, setBoards] = React.useState<any>([])
    const [shows, setShows] = React.useState<boolean>(false)
    const [limit, setLimit] = React.useState<number>(1)

    async function create() {
        let result = new Thermoc()
        let data = result.makeData()
        setTemps(data)
    }
    async function createMulti() {
        let result = new Thermoc()
        let multidata = result.makeMultiData(limit)
        setBoards(multidata)
    }
    async function handleDownload() {


        for (let i = 1; i <= limit; i++) {
            let canvasId = `canvas${i}`
            // console.log(i)
            const canvas = document.getElementById(canvasId) as HTMLDivElement;
            const svgData = new XMLSerializer().serializeToString(canvas);
            const blob = new Blob([svgData], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'canvas.svg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    }

    return (
        <div className='min-h-screen h-full'>
            <div className='grid grid-cols-5 max-w-6xl w-full gap-4 mx-auto p-4'>

                <div className='col-span-5'>
                    <h1 className='px-4 py-2 text-xl text-pink-600'>Thermometer</h1>
                </div>
                <div className='grid col-span-5 lg:col-span-3 p-4 bg-pink-50 gap-4 rounded-lg shadow-lg'>
                    <div className='max-h-80'>
                        <ThermoSVG temps={temps} shows={shows} />
                    </div>
                    {temps.temp1 !== undefined && (
                        <button onClick={() => setShows(!shows)} type='button'>
                            {shows ? "Hide Answer" : "Show Answer"}
                        </button>
                    )}
                </div>


                <div className='col-span-5 lg:col-span-2 p-4 grid gap-2 items-start bg-pink-50 rounded-lg'>
                    <h1 className='px-4 py-2 text-xl text-center text-pink-600'>Thermometer</h1>
                    <div className='flex gap-2 w-full p-4 bg-white rounded-md justify-between'>
                        <div className='w-full'>
                            <label htmlFor="celcius" className="flex pb-1 text-sm font-medium text-pink-600">Celcius</label>
                            <input type="number" id="celcius" className="bg-pink-50 border border-pink-300 placeholder:text-pink-300 text-pink-600 text-sm rounded-sm outline-none border-none ring-1 focus:ring-2 ring-pink-600 w-full px-4 py-2" placeholder="celcius" required />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="fahrenheit" className="flex pb-1 text-sm font-medium text-pink-600">Fahrenheit</label>
                            <input type="number" id="fahrenheit" className="bg-pink-50 border border-pink-300 placeholder:text-pink-300 text-pink-600 text-sm rounded-sm outline-none border-none ring-1 focus:ring-2 ring-pink-600 w-full px-4 py-2" placeholder="fahrenheit" required />
                        </div>
                    </div>
                    <div>
                        <button className='py-2 text-center text-white bg-pink-600 w-full rounded-md hover:bg-black' onClick={create} type='button'>Generate Sample</button>
                    </div>
                    <div className='flex gap-2 w-full p-4 bg-white rounded-md justify-between'>
                        <div className='w-full'>
                            <label htmlFor="downloads" className="flex pb-1 text-sm font-medium text-pink-600">Number of Boards</label>
                            <input type="number" value={limit || 1} onChange={(e) => setLimit(+e.target.value)} id="downloads" className="bg-pink-50 border border-pink-300 text-pink-600 placeholder:text-pink-300 text-sm rounded-sm outline-none border-none ring-1 focus:ring-2 ring-pink-600 w-full px-4 py-2" placeholder="boards" required />
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <button className='py-2 text-center text-white bg-pink-600 w-full rounded-md hover:bg-black' onClick={createMulti} type='button'>Generate Boards</button>

                        {boards.length >= 1 && (
                            <button className='py-2 text-center text-white bg-pink-600 w-full rounded-md hover:bg-black' onClick={handleDownload} type='button'>Download Boards</button>
                        )}
                    </div>
                </div>

                <div className='col-span-5 px-4 py-10 flex flex-wrap gap-4 justify-center bg-pink-50 rounded-lg w-full'>
                    {boards?.map((x: any, index: number) => (
                        <div id={`canvas${index + 1}`} key={index} className='max-h-[45vh] w-[45vh] rounded-md bg-pink-200 shadow-lg'>
                            <ThermoSVG temps={x} shows={shows} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}