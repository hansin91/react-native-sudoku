import React from 'react'
import GameBoard from '../Game/components/GameBoard'

function Game ({ route }) {
  const { level } = route.params
  return (
    <GameBoard level={level} />
  )
}

export default Game