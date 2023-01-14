import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import themeContext from './../config/themeContext';

type Props = {};

const AchievementScreen = (props: Props) => {
  const theme: any = useContext(themeContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background }
      ]}
    >
      <Text style={[styles.text, { color: theme.color }]}>
        Welcome to your Achievements. Let's gloat!
      </Text>
    </View>
  );
};

export default AchievementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20
  }
});
