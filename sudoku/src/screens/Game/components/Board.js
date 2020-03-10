import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
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

  useEffect(() => {
    dispatch(setLoading(true))
    api({
      method: 'GET',
      url: '/board?difficulty=' + props.level
    })
      .then(response => {
        dispatch(setBoard(response.data.board))
        api.post('/solve', encodeParams({ board: response.data.board }))
          .then(response => {
            dispatch(setSolutionBoard(response.data.solution))
          })
          .catch(err => {
            dispatch(setErrors(err.response))
          })
          .finally(() => {
            dispatch(setLoading(false))
          })
      })
      .catch(err => {
        dispatch(setErrors(err.response))
        dispatch(setLoading(false))
      })
  }, [])


  useEffect(() => {
    if (isReset) {
      dispatch(setResetBoard(false))
    }
  }, [isReset])

  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

  const encodeParams = (params) =>
    Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&')

  const validate = () => {
    api.post('/validate', encodeParams({ board: filledBoard }))
      .then(response => {
        const status = response.data.status
        dispatch(validateBoard(true))
        console.log(status)
      })
      .catch(err => {
        dispatch(setErrors(err.response))
      })
  }

  const clear = () => {
    dispatch(setResetBoard(true))
  }

  const solve = () => {
    api.post('/solve', encodeParams({ board }))
      .then(response => {
        dispatch(setBoard(response.data.solution))
        dispatch(setFilledBoard(response.data.solution))
      })
      .catch(err => {
        dispatch(setErrors(err.response))
      })
  }

  return (
    <ScrollView style={{ marginTop: 30 }}>
      <View style={{ borderRightWidth: 1, borderBottomWidth: 1 }}>
        {board.map((b, index) => <Box key={index} row={index} numbers={b} />)}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text onPress={solve} style={[styles.button, styles.buttonWarning]}>Give up</Text>
        <Text onPress={clear} style={[styles.button, styles.buttonPrimary]}>Clear</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 15,
    fontSize: 15
  },
  buttonSuccess: {
    backgroundColor: '#28a745',
    borderColor: '#28a745'
  },
  buttonPrimary: {
    borderColor: '#007bff',
    backgroundColor: '#007bff'
  },
  buttonWarning: {
    borderColor: '#ffc107',
    backgroundColor: '#ffc107'
  }
})

export default Board