import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

export default function Animais() {
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [selected, setSelected] = useState();

  return (
    <View style={styles.areaCond}>
      {/* <Text style={styles.textTitle}>Condição: * </Text>
      <View style={styles.pickerCond}>
        <Picker
          selectedValue={selected}
          mode='dialog'
          prompt="Selecione a condição do produto"
          onValueChange={(itemValue, itemIndex) =>
            setSelected(itemValue)
          }>
          <Picker.Item label="Novo" value="Novo" />
          <Picker.Item label="Usado" value="Usado" />
        </Picker>
      </View> */}
    </View>
  );
}

