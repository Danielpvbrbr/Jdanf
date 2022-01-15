import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text>cart</Text>

    </SafeAreaView>
  );
};

