import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.card, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,

  }
})
