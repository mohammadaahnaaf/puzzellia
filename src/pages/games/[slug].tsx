// import { Thermometer } from '@puzzellia/games'
import { games } from '@puzzellia/root/data'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const GamePage = (props: Props) => {

  const router = useRouter()
  const sluq = router.query.slug

  return (
    <>
      {games?.map((x, index) => {
        return x.link === sluq ? (
          <div key={index}>
            {x.gameia}
          </div>
        ) : null
      })}
    </>
  )
}

export default GamePage