import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './../config/themeContext';
import theme from '../config/theme';
import UITheme from '../interfaces';

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation, ...props }: Props) => {
  const theme: any = useContext(themeContext);
  const [mode, setMode] = useState(false);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background }
      ]}
    >
      <Text style={[styles.text, { color: theme.color }]}>
        Welcome to your Dashboard. Let's drum!
      </Text>
      <Switch
        value={mode}
        onValueChange={value => {
          setMode(value);
          EventRegister.emit('changeTheme', value);
        }}
      />
      <View style={styles.button}>
        <Button
          title="View Achievements"
          onPress={() => navigation.navigate('Achievements')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

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
  },
  button: {
    paddingTop: 20
  }
});
