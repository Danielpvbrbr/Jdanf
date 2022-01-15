import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AutProvider from './src/contexts/auth';
import Routes from './src/routes/index';
console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <AutProvider>
        <StatusBar style="auto" />
        <Routes />
      </AutProvider>
    </NavigationContainer>
  );
}
