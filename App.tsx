import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Appearance } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import HomeScreen from './screens/HomeScreen';
import AchievementScreen from './screens/AchievementScreen';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/theme';
import { MyDarkNavTheme } from './interfaces';

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeTheme',
      data => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener('eventListener');
    };
  });

  return (
    <themeContext.Provider
      value={mode === true ? theme.dark : theme.light}
    >
      <NavigationContainer
        theme={mode === true ? MyDarkNavTheme : DefaultTheme}
      >
        <AppNavigator />
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({});
