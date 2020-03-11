import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { BoardContext } from '../../context/BoardContext'

function Finish ({ navigation }) {
  const { username, score } = useContext(BoardContext)
  return (
    <View>
      <Text>Finish {username} {score}</Text>
      <Button title="Restart game" onPress={() => navigation.popToTop()} />
    </View>
  )
}

export default Finish