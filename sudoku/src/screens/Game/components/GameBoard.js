import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'
import Board from './Board'
import { BoardContext } from '../../../context/BoardContext'
import Loader from './Loader'

function GameBoard (props) {
  const { isLoading } = useContext(BoardContext)
  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <Text />}
      <Container>
        <Board level={props.level} />
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default GameBoard