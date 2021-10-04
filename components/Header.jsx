import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { colors } from '../constants/colors';

import TitleText from './TitleText';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  title: {
    color: Platform.OS === 'ios' ? colors.primary : 'white',
  },
});
