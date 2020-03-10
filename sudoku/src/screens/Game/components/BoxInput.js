import React, { useContext } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Input } from 'native-base'
import { BoardContext } from '../../../context/BoardContext'
import { setFilledBoard } from '../../../actions'

function BoxInput (props) {
  const { board, dispatch } = useContext(BoardContext)

  const handleInput = (e) => {
    let editedBoard = JSON.parse(JSON.stringify(board))
    editedBoard[props.row][props.column] = +e
    dispatch(setFilledBoard(editedBoard))
  }

  return (
    <View style={{
      flexDirection: 'column',
      borderLeftWidth: 1
    }}>
      <TextInput
        style={props.value !== 0 ? styles.boxFilled : styles.box}
        onChangeText={handleInput}
        keyboardType="number-pad"
        maxLength={1}
        editable={props.value !== 0 ? false : true}
        defaultValue={props.value === 0 ? '' : props.value.toString()} />
    </View>
  )
}

const styles = StyleSheet.create({
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