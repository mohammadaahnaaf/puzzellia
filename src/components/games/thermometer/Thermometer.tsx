import React from 'react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Thermoc } from './boardData'
import { ThermoBoards, ThermoSVG } from './index'

type Props = {}

export const Thermometer = (props: Props) => {

    const [temps, setTemps] = React.useState<any>({})
    const [boards, setBoards] = React.useState<any>([])
    const [shows, setShows] = React.useState<boolean>(false)
    const [limit, setLimit] = React.useState<number>(1)
    const [name, setName] = React.useState<string>("Thermometer")

    let [isShowing, setIsShowing] = React.useState<boolean>(false)
    let [isViewing, setIsViewing] = React.useState<boolean>(false)

    let mojud = temps?.temp1 !== undefined

    // create sample 
    async function create() {
        let result = new Thermoc()
        let data = result.makeData()
        setTemps(data)
        setIsShowing(true)
    }

    // create board 
    async function createMulti() {
        let result = new Thermoc()
        let multidata = result.makeMultiData(limit)
        setBoards(multidata)
        setIsViewing(true)
    }

    // download 
    async function handleDownload() {

        for (let i = 1; i <= limit; i++) {

            let canvasId = `canvas${i}`

            const canvas = document.getElementById(canvasId) as HTMLDivElement;
            const svgData = new XMLSerializer().serializeToString(canvas);
            const blob = new Blob([svgData], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `${name}-${i}.svg`;
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
                    <h1 className='px-4 py-2 text-2xl font-bold text-[#EE2345]'>Thermometer</h1>
                </div>
                <div className='grid col-span-5 w-full lg:col-span-3 p-4 justify-center bg-pink-50 gap-4 rounded-lg shadow-lg'>

                    <Transition
                        as={Fragment}
                        show={isShowing}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className='grid w-full items-center'>
                            <div className='h-[40vh] w-[50vh]'>
                                <ThermoSVG temps={temps} shows={shows} />
                            </div>

                            <button onClick={() => setShows(!shows)} type='button' className='px-2 py-1 shadow-lg hover:bg-pink-600 hover:text-white bg-pink-200 justify-self-center items-center rounded-md h-10 w-24 text-center flex justify-center text-pink-600'>
                                {shows ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                    </svg>

                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </Transition>

                    {!mojud && (
                        <div className='flex items-center'>
                            <div className='relative h-40 w-40 mx-auto'>
                                <Image fill src='/icons/thermometer.svg' className='object-center h-full w-full' alt='games-icon' />
                            </div>
                        </div>
                    )}
                </div>


                <div className='col-span-5 lg:col-span-2 p-4 grid gap-2 items-start bg-pink-50 shadow-lg rounded-lg'>
                    {/* <h1 className='px-4 py-2 text-xl text-center text-pink-600'>Thermometer</h1> */}

                    <div className='w-full p-4 bg-white rounded-md'>
                        <label htmlFor="name" className="flex pb-1 text-sm font-medium text-pink-600">Board Name</label>
                        <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} id="name" className="bg-pink-50 border border-pink-300 text-pink-600 placeholder:text-pink-300 text-sm rounded-sm outline-none border-none ring-1 focus:ring-2 ring-pink-600 w-full px-4 py-2" placeholder="enter a file name" required />
                    </div>

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

                <Transition
                    as={Fragment}
                    show={isViewing}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='w-full col-span-5'>
                        <ThermoBoards boards={boards} shows={shows} />
                    </div>
                </Transition>

            </div>
        </div>
    )
}