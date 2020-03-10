import React from 'react'
import { BoardProvider } from '../../context/BoardContext'
import GameBoard from '../Game/components/GameBoard'

function Game ({ route }) {
  const { level } = route.params
  return (
    <BoardProvider>
      <GameBoard level={level} />
    </BoardProvider>
  )
}

export default Game