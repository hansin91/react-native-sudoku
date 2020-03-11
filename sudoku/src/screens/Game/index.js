import React, { useContext } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Container } from 'native-base'
import Board from './components/Board'
import { BoardContext } from '../../context/BoardContext'
import Loader from './components/Loader'
import { setResetBoard, setBoard } from '../../actions'

function Game ({ route, navigation }) {
  const { level } = route.params
  const { isLoading, dispatch } = useContext(BoardContext)

  const clear = () => {
    dispatch(setResetBoard(true))
  }

  const solve = () => {
    navigation.navigate('Result')
    dispatch(setBoard([]))
  }

  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <Text />}
      <Container>
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
    justifyContent: 'center',
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