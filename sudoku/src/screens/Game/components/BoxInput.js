import React, { useContext, useState, useEffect } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { BoardContext } from '../../../context/BoardContext'
import { setFilledBoard } from '../../../actions'

function BoxInput (props) {
  const { board, dispatch, isReset, solution } = useContext(BoardContext)
  const [input, setInput] = useState(props.value)
  const [isValid, setIsValid] = useState(null)
  useEffect(() => {
    setInput(props.value == 0 ? '' : props.value)
  }, [])

  const handleInput = (e) => {
    let editedBoard = JSON.parse(JSON.stringify(board))
    editedBoard[props.row][props.column] = +e
    setInput(+e)
    dispatch(setFilledBoard(editedBoard))
  }

  useEffect(() => {
    if (isReset) {
      setInput(props.value === 0 ? '' : props.value)
    }
  }, [isReset])

  useEffect(() => {
    if (solution.length) {
      if ((solution[props.row][props.column]) !== input) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }
  }, [input, solution])

  return (
    <View style={{
      flexDirection: 'column',
      borderLeftWidth: 1
    }}>
      {props.value === 0 ?
        <TextInput
          style={[styles.box,
          !isValid ? styles.invalid : '']}
          onChangeText={handleInput}
          keyboardType="number-pad"
          maxLength={1}
          editable={true}
          defaultValue={input === 0 ? '' : input.toString()} />
        : <TextInput
          style={[styles.boxFilled]}
          editable={false}
          value={props.value.toString()} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  invalid: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  box: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  boxFilled: {
    padding: 10,
    fontSize: 20,
    backgroundColor: '#ccc',
    textAlign: 'center'
  }
})

export default BoxInput