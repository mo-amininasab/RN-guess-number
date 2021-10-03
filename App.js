import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// cms
import Header from './components/Header';

// screen
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [usrNumber, setUsrNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUsrNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (usrNumber) {
    content = <GameScreen userChoice={usrNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
