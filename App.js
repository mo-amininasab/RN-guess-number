import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// cms
import Header from './components/Header';

// screen
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [usrNumber, setUsrNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUsrNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUsrNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRound) => {
    setGuessRounds(numOfRound);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (usrNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={usrNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={usrNumber}
        onRestart={configureNewGameHandler}
      />
    );
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
