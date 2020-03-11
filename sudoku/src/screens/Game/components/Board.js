import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { BoardContext } from '../../../context/BoardContext'
import {
  setBoard,
  setResetBoard,
  setErrors,
  setLoading,
  setFilledBoard,
  validateBoard,
  setSolutionBoard
} from '../../../actions'
import api from '../../../api'
import Box from './Box'

function Board (props) {
  const { board, isReset, filledBoard, dispatch } = useContext(BoardContext)

  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

  const encodeParams = (params) =>
    Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&')

  useEffect(() => {
    dispatch(setLoading(true))
    console.log(props.level)
    api.get('/board?difficulty=' + props.level)
      .then(response => {
        const gameBoard = response.data.board
        dispatch(setBoard(gameBoard))
        return api.post('/solve', encodeParams({ board: gameBoard }))
      })
      .then(response => {
        console.log(JSON.stringify(response.data.solution))
        dispatch(setSolutionBoard(response.data.solution))
      })
      .catch(err => {
        console.log(err.response)
        dispatch(setErrors(err.response))
      })
      .finally(() => dispatch(setLoading(false)))
  }, [])

  useEffect(() => {
    if (isReset) {
      dispatch(setResetBoard(false))
    }
  }, [isReset])

  // const validate = () => {
  //   api.post('/validate', encodeParams({ board: filledBoard }))
  //     .then(response => {
  //       const status = response.data.status
  //       dispatch(validateBoard(true))
  //       console.log(status)
  //     })
  //     .catch(err => {
  //       dispatch(setErrors(err.response))
  //     })
  // }

  return (
    <View style={{ borderRightWidth: 1, borderBottomWidth: 1 }}>
      {board.map((b, index) => <Box key={index} row={index} numbers={b} />)}
    </View>
  )
}

export default Board