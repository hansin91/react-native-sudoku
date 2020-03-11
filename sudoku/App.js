import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import Board from './src/screens/Game'
import { BoardProvider } from './src/context/BoardContext'
import Finish from './src/screens/Finish'

export default function App () {
  const Stack = createStackNavigator()
  return (
    <BoardProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={styles} component={Home} />
          <Stack.Screen name="Game" options={styles} component={Board} />
          <Stack.Screen name="Result" options={styles} component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>
    </BoardProvider>
  )
}

const styles = {
  headerStyle: {
    backgroundColor: '#444'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center'
}


