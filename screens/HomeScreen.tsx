import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  Pressable
} from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './../config/themeContext';
import theme from '../config/theme';
import UITheme from '../interfaces';
import {
  RobotoMono_400Regular,
  useFonts
} from '@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation, ...props }: Props) => {
  const theme: any = useContext(themeContext);
  const [mode, setMode] = useState(false);
  // let [fontsLoaded] = useFonts({
  //   RobotoMono_400Regular
  // });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background }
      ]}
    >
      <Text style={[styles.textTitle, { color: theme.color }]}>
        Welcome to your Dashboard. Let's drum!
      </Text>
      <Switch
        value={mode}
        onValueChange={value => {
          setMode(value);
          EventRegister.emit('changeTheme', value);
        }}
      />
      <View style={styles.cardContainer}>
        <View style={[styles.RowOne]}>
          <View style={[styles.cardRowOne, styles.cardAchievements]}>
            <Text
              style={[styles.textCard, { color: theme.color }]}
              onPress={() => navigation.navigate('Achievements')}
            >
              Achievements
            </Text>
          </View>
          <View style={[styles.cardRowOne, styles.cardStreakTracker]}>
            <Text style={[styles.textCard, { color: theme.color }]}>
              Current Streak
            </Text>
          </View>
        </View>
        <View style={[styles.RowTwo]}>
          <View
            style={[styles.cardRowTwo, styles.cardActivityTracker]}
          >
            <Text style={[styles.textCard, { color: theme.color }]}>
              Recent Activity
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => navigation.navigate('Achievements')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#5DAAF1' : '#7DB7ED'
            },
            styles.startRoutineButton
          ]}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textCard: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    margin: 20
  },
  button: {
    paddingTop: 20
  },
  startRoutineButton: {
    borderRadius: 50,
    width: '95px',
    height: '95px'
  },
  startRoutineButtonPressed: {
    borderRadius: 50,
    width: '95px',
    height: '95px'
  },
  cardContainer: {
    display: 'flex',
    height: '40%',
    width: '90%',
    marginTop: 30,
    barginBottom: 30
  },
  cardRowOne: {
    border: '1px solid #CECECE',
    borderRadius: 3,
    width: '45%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RowOne: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cardAchievements: {},
  cardStreakTracker: {},
  RowTwo: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardRowTwo: {
    border: '1px solid #CECECE',
    borderRadius: 3,
    width: '95%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardActivityTracker: {}
});
