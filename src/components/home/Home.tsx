import React from 'react'
import { cats, games } from '@puzzellia/root/data'
import { GameCard, TopHeader } from './index'

type Props = {}

export const Home = (props: Props) => {

  const [category, setCategory] = React.useState('all')

  // Function to filter items based on the selected category
  const filteredItems = category === 'all'
    ? games
    : games.filter(item => item.cats.includes(category));

  return (
    <div className='max-w-6xl w-full grid mx-auto rounded-lg gap-8 my-4'>

      {/* Top Headline  */}
      <TopHeader />

      {/* Categoris  */}
      <div className='grid grid-cols-4 justify-center gap-4 p-4 w-full'>
        {cats.map((c, index) => (
          <div key={index} className=''>
            <button
              className='p-4 w-full ring-2 shadow-lg ring-red-400 text-xl text-pink-600 font-semibold hover:bg-red-400 hover:text-white rounded-md'
              onClick={() => setCategory(c.value)}>
              {c.title}
            </button>
          </div>
        ))}

      </div>

      {/* Games Selections  */}
      <div className='p-4 grid grid-cols-4 w-full justify-end gap-4'>
        {filteredItems.map((g, index) => {
          return (
            <GameCard
              key={index}
              title={g.title}
              subtitle={g.subtitle}
              link={g.link} />
          )
        })}
      </div>


    </div>
  )
}