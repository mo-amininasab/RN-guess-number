import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      {/**Local Image */}
      {/* <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View> */}

      {/* Web Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_1280.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
