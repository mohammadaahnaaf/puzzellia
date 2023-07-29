import React from 'react'
import { cats, games } from '@puzzellia/root/data'
import { GameCard, TopHeader } from './index'

type Props = {}

export const Home = (props: Props) => {

  const [category, setCategory] = React.useState('all')
  // const [filteredItems, setFilteredItems] = React.useState<any>([])

  // Function to filter items based on the selected category
    
    let filteredItems =  category === 'all'
        ? games
        : games?.filter(item => item.cats.includes(category));


  return (
    <div className='max-w-6xl w-full grid mx-auto rounded-lg gap-8 my-4'>

      {/* Top Headline  */}
      <TopHeader />

      {/* Categoris  */}
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-center gap-2 md:gap-4 p-4 w-full'>
        {cats.map((c, index) => (
          <div key={index}>
            <button
              className='p-2 lg:p-4 w-full bg-pink-50 shadow-lg text-sm sm:text-md lg:text-xl text-pink-600 font-semibold hover:bg-pink-100 hover:ring-2 ring-pink-400 rounded-sm'
              onClick={() => setCategory(c.value)}>
              {c.title}
            </button>
          </div>
        ))}

      </div>

      {/* Games Selections  */}
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-center gap-4'>
        {filteredItems?.map((g: any, index: number) => {
          return (
            <GameCard
              key={index}
              icon={g.icon}
              title={g.title}
              subtitle={g.subtitle}
              link={g.link} />
          )
        })}
      </div>


    </div>
  )
}