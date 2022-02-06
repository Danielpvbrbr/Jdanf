import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

export default function ModaBeleza({ AuthContext }) {
  const {
    selectSex,
    setSelectSex,
    selectCondition,
    setSelectCondition
  } = useContext(AuthContext)

  return (
    <View style={styles.containCondIptu}>
      <View style={styles.areaCond}>

        <Text style={styles.textTitle}>Gênero:</Text>
        <View style={styles.pickerCond}>
          <Picker
            selectedValue={selectSex}
            mode='dialog'
            prompt="Selecione o Gênero do produto"
            onValueChange={(itemValue, itemIndex) =>
              setSelectSex(itemValue)
            }>
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Unissex" value="Unissex" />
          </Picker>
        </View>


      </View>
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

    </View>

  );
};

