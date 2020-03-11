import React, { useContext } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Container } from 'native-base'
import { BoardContext } from '../../context/BoardContext'
import Box from '../Game/components/Box'
import { resetScore, setPlayer } from '../../actions'

function Finish ({ navigation }) {
  const { playerName, score, solution, dispatch } = useContext(BoardContext)
  const restartGame = () => {
    navigation.popToTop()
    dispatch(resetScore(0))
    dispatch(setPlayer(''))
  }
  return (
    <Container>
      <View>
        <Text style={styles.resultUsername}>{playerName}</Text>
        <Text style={styles.scoreText}>SCORE :</Text>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.solutionText}>Here is the solution :</Text>
          <View style={{ borderRightWidth: 1, borderBottomWidth: 1 }}>
            {solution.map((b, index) => <Box key={index} row={index} numbers={b} />)}
          </View>
          <Text style={{
            textAlign: 'center',
            marginTop: 10,
            width: '50%',
            padding: 10,
            borderRadius: 20,
            alignSelf: 'center',
            color: '#fff',
            backgroundColor: '#007bff',
            borderColor: '#007bff'
          }} onPress={restartGame} >Restart Game</Text>
        </ScrollView>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  solutionText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#17a2b8'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultUsername: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 30
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 5,
    color: '#dc3545',
    fontWeight: 'bold'
  },
  score: {
    fontSize: 40,
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Finish