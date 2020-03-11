import React, { useContext, useState, useEffect } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { BoardContext } from '../../../context/BoardContext'
import { setFilledBoard, setScore } from '../../../actions'

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
    if ((solution[props.row][props.column]) !== +e) {
      setIsValid(false)
    } else {
      setIsValid(true)
      dispatch(setScore(1))
    }
  }

  useEffect(() => {
    if (isReset) {
      setInput(props.value === 0 ? '' : props.value)
      setIsValid(false)
    }
  }, [isReset])

  return (
    <View style={{
      flexDirection: 'column',
      borderLeftWidth: 1
    }}>
      {props.value === 0 ?
        <TextInput
          style={[styles.box,
          !isValid ? styles.invalid : styles.valid]}
          onChangeText={handleInput}
          keyboardType="number-pad"
          maxLength={1}
          editable={isValid ? false : true}
          defaultValue={input === 0 ? '' : input.toString()} />
        : <TextInput
          style={[styles.box, styles.boxFilled]}
          editable={false}
          value={props.value.toString()} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  invalid: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb'
  },
  valid: {
    backgroundColor: '#28a745',
    borderColor: '#28a745'
  },
  box: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  boxFilled: {
    backgroundColor: '#ccc',
  }
})

export default BoxInput