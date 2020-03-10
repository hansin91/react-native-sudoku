import React from 'react'
import { View, Text } from 'react-native'

function Alert (props) {
  return (
    <View style={{
      padding: 5,
      marginBottom: 5,
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb'
    }}>
      <Text>{props.message}</Text>
    </View>
  )
}

export default Alert