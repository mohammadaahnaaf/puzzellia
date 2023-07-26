import React from 'react'
import { GameCard } from './GameCard'
import { games } from '@puzzellia/root/data'

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className='max-w-6xl w-full grid mx-auto rounded-lg my-4'>
      {/* Top Headline  */}
      <div className='h-[40vh] grid items-center'>
        <div className='grid gap-4'>
          {/* <h1 className='text-6xl text-center kufi-font font-bold text-pink-500'>مرحـــبا بكم في پـــازلـــيا</h1> */}
          <h1 className='text-6xl text-center font-bold text-pink-500'>Welcome To Puzzellia</h1>
          <h2 className='text-center text-2xl font-semibold text-pink-600'>Fun Way To Learn About Math, Geomatry And Puzzle Games.</h2>
        </div>
      </div>

      {/* Games Selections  */}
      <div className='p-4 grid grid-cols-4 justify-center gap-4'>
        {games.map((g, index) => (
          <GameCard 
          key={index} 
          title={g.title} 
          subtitle={g.subtitle}
          link={g.link} />
        ))}
      </div>
    </div>
  )
}