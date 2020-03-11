import React, { useState, useContext, useEffect } from 'react'
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { BoardContext } from '../../context/BoardContext'
import { setPlayer } from '../../actions'

function Home ({ navigation }) {
  const { dispatch, playerName } = useContext(BoardContext)

  const goToGame = () => {
    navigation.navigate('Game', {
      level
    })
    dispatch(setPlayer(username))
    setUsername('')
    setLevel('')
  }
  const [username, setUsername] = useState('')
  const [level, setLevel] = useState('')
  const handleInputUsername = (e) => {
    setUsername(e)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Welcome to Sudoku Puzzle</Text>
      <View style={{ width: '50%', marginTop: 10, marginBottom: 10 }}>
        <TextInput
          onChangeText={handleInputUsername}
          placeholderTextColor="#444"
          autoFocus={true}
          defaultValue={playerName}
          placeholder="Please input your name"
          style={styles.input} />
      </View>
      <View style={{ marginBottom: 50, marginTop: 10 }}>
        <TouchableOpacity onPress={() => setLevel('easy')} disabled={username ? false : true}>
          <Text style={[styles.gameLevel, styles.gameLevelEasy, username ? '' : styles.disabled]}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLevel('medium')} disabled={username ? false : true}>
          <Text style={[styles.gameLevel, styles.gameLevelMedium, username ? '' : styles.disabled]}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLevel('hard')} disabled={username ? false : true}>
          <Text style={[styles.gameLevel, styles.gameLevelHard, username ? '' : styles.disabled]}>Hard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={username && level ? false : true}
        onPress={() => goToGame()}
        style={{ width: '50%' }}>
        <Text style={username && level ? styles.btnPlay : styles.btnPlayDisabled}>
          Let's Play
        </Text>
      </TouchableOpacity>
      <Image
        blurRadius={1.3}
        source={require('../../../assets/background.jpg')}
        style={styles.backgroundImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  gameLevel: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 10,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff'
  },
  gameLevelEasy: {
    backgroundColor: '#28a745',
    borderColor: '#28a745'
  },
  gameLevelMedium: {
    backgroundColor: '#ffc107',
    borderColor: '#ffc107'
  },
  gameLevelHard: {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545'
  },
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    position: 'relative'
  },
  main: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#363636',
    marginTop: 50
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
    top: 0,
    left: 0,
    zIndex: -90,
  },
  btnPlay: {
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#007bff'
  },
  btnPlayDisabled: {
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#007bff',
    opacity: 0.65
  },
  input: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    color: '#444',
    width: '100%',
    backgroundColor: '#e0e0e0'
  }
})


export default Home