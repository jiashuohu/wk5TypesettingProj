import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/HomeScreen";
import DrawerScreen from "./components/DrawerScreen";
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function App() {
  return (
    // <HomeScreen />
    <DrawerScreen />
  );
}

export default App;