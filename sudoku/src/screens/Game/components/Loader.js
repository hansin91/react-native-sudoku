import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Loader () {
  return (
    <View style={styles.loader}>
      <Text>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    zIndex: 2000,
    height: '100%',
    width: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
})

export default Loader