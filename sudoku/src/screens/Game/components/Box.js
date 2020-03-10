import React from 'react'
import { View } from 'react-native'
import BoxInput from './BoxInput'

function Box (props) {
  return (
    <View style={{
      flexDirection: 'row',
      borderTopWidth: 1
    }}>
      {props.numbers.map((n, index) => <BoxInput key={index} row={props.row} column={index} value={n} />)}
    </View>
  )
}

export default Box