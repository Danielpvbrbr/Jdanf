import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Purchases() {
  const [selected, setSelected] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Picker
        selectedValue={selected}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
      >
        <Picker.Item label="Pagamentos Pendentes" value="Pagamentos Pendentes" />
        <Picker.Item label="Em Preparação" value="Em Preparação" />
        <Picker.Item label="A Caminho" value="A Caminho" />
        <Picker.Item label="Finalizado" value="Finalizado" />
        <Picker.Item label="Cancelado" value="Cancelado" />
      </Picker>

    </SafeAreaView>
  );
};

