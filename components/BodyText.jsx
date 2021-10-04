import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = ({ children }) => {
  return <Text style={styles.body}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});
