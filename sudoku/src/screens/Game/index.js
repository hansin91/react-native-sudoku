import React, { useContext } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Container } from 'native-base'
import Board from './components/Board'
import { BoardContext } from '../../context/BoardContext'
import Loader from './components/Loader'
import { setResetBoard, setBoard, resetScore } from '../../actions'

function Game ({ route, navigation }) {
  const { level } = route.params
  const { isLoading, dispatch, score } = useContext(BoardContext)

  const clear = () => {
    dispatch(setResetBoard(true))
    dispatch(resetScore(0))
  }

  const solve = () => {
    navigation.navigate('Result')
    dispatch(setBoard([]))
  }

  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <Text />}
      <Container>
        <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'flex-end' }}>
          <Text style={{
            fontWeight: '100',
            fontSize: 16
          }}>Score :</Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 16,
            paddingLeft: 5
          }}>{score}</Text>
        </View>
        <ScrollView>
          <Board level={level} />
          <View style={{ marginTop: 20 }}>
            <Text onPress={solve} style={[styles.button, styles.buttonWarning]}>Give up</Text>
            <Text onPress={clear} style={[styles.button, styles.buttonPrimary]}>Clear</Text>
          </View>
        </ScrollView>
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
export default Game