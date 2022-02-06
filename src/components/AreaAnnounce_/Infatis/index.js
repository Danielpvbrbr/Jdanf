import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

export default function Infatis({ AuthContext }) {
  const {
    selectCondition,
    setSelectCondition
  } = useContext(AuthContext);

  return (
    <View style={styles.areaCond}>
      <Text style={styles.textTitle}>Condição: * </Text>
      <View style={styles.pickerCond}>
        <Picker
          selectedValue={selectCondition}
          mode='dialog'
          prompt="Selecione a condição do produto"
          onValueChange={(itemValue, itemIndex) =>
            setSelectCondition(itemValue)
          }>
          <Picker.Item label="Novo" value="Novo" />
          <Picker.Item label="Usado" value="Usado" />
        </Picker>
      </View>
    </View>
  );
}

