import Image from 'next/image'
import React from 'react'
import { GameCard } from './GameCard'

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className='bg-pink-50 max-w-6xl w-full grid mx-auto rounded-lg my-4'>
      {/* Top Headline  */}
      <div className='h-[40vh] grid items-center'>
        <div className='grid gap-4'>
          <h1 className='text-6xl text-center font-bold text-pink-500'>Welcome To Puzzellia</h1>
          <h2 className='text-center text-2xl font-semibold text-pink-600'>Especially Built For Math, Geomatry And Puzzles Games.</h2>
        </div>
      </div>

      {/* Games Selections  */}
      <div className='p-4 grid grid-cols-4 justify-center gap-4'>
        <GameCard title="Maze" />
        <GameCard title="Sudoku" />
        <GameCard title="Thermometer" />
        <GameCard title="Protractor" />
        <GameCard title="Number" />
        <GameCard title="Math" />
        <GameCard title="Geomatry" />
        <GameCard title="Trigonomatry" />
      </div>
    </div>
  )
}