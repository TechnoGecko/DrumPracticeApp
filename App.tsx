import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Appearance } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import HomeScreen from './screens/HomeScreen';
import AchievementScreen from './screens/AchievementScreen';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/theme';
import { MyDarkNavTheme } from './interfaces';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
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

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

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

  //================== Zombie code which is supposed to handle displaying
  //a loading icon until the fonts load. Currently getting the following error
  // 'Cannot load null or undefined font source: "http://fonts.gstatic.com/s/robotomono/v13/blahblahblah": undefined }. '
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       //await Font.loadAsync(Entypo.font);
  //       await Font.loadAsync(RobotoMono_400Regular);
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(
  //   async () => {
  //     if (appIsReady) {
  //       // This tells the splash screen to hide immediately! If we call this after
  //       // `setAppIsReady`, then we may see a blank screen while the app is
  //       // loading its initial state and rendering its first pixels. So instead,
  //       // we hide the splash screen once we know the root view has already
  //       // performed layout.
  //       await SplashScreen.hideAsync();
  //     }
  //   },
  //   [appIsReady]
  // );

  // if (!appIsReady) {
  //   return null;
  // }

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
