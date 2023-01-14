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
import {} from '@expo-google-fonts/jura';

import {
  useFonts,
  Jura_400Regular,
  Jura_500Medium,
  Jura_600SemiBold,
  Jura_700Bold,
  RobotoMono_300Light,
  RobotoMono_400Regular,
  RobotoMono_600SemiBold,
  RobotoMono_700Bold,
  RobotoMono_400Regular_Italic,
  RobotoMono_500Medium_Italic,
  RobotoMono_600SemiBold_Italic,
  RobotoMono_700Bold_Italic
} from '@expo-google-fonts/dev';

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
