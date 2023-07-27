import { Thermometer } from '@puzzellia/games'
import React from 'react'

type Props = {}

const GamePage = (props: Props) => {

  function generate() {
    console.log('button clicked')
  }

  return (
    <>
      <Thermometer />
      
    </>
  )
}

export default GamePage