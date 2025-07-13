import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

export type MainNavigatorParamList = {
  Home: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
