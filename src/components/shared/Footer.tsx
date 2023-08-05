import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
    let year = new Date().getFullYear()
    return (
        <footer className='bg-white py-4'>
            <div className="grid grid-cols-4 max-w-6xl w-full mx-auto">
                <div className='col-span-1'>
                    <p className='text-gray-400 font-semibold'>
                        © {year}{' '}
                        <span className="text-sm text-red-400 hover:text-[red] cursor-pointer text-center font-bold">
                            <Link href="https://red-rich.vercel.app">
                                Puzzellia™{' '}
                            </Link>
                        </span>
                    </p>
                </div>
                <div className='col-span-3 grid md:flex gap-4 justify-between p-4 items-center'>
                    <p>About</p>
                    <p>Conditions</p>
                    <p>Location</p>
                </div>
               
            </div>
        </footer>
    )
}