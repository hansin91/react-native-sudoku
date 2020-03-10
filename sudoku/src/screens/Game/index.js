import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Container } from 'native-base'
import { BoardProvider, BoardContext } from '../../context/BoardContext'
import Board from '../Game/components/Board'
import Loader from './components/Loader'

function Game ({ route }) {

  const { isLoading } = useContext(BoardContext)
  const { level } = route.params
  console.log(isLoading)
  return (
    <View style={styles.container}>
      <BoardProvider>
        {isLoading ? <Loader /> : <Text />}
        <Container>
          <Board level={level} />
        </Container>
      </BoardProvider>
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

export default Game