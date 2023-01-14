import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AchievementScreen from '../screens/AchievementScreen';
import HomeScreen from '../screens/HomeScreen';

type Props = {};

const AppNavigator = (props: Props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Achievements"
        component={AchievementScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
