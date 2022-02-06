import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

export default function ParaSuaCasa() {
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [selected, setSelected] = useState();

  return (
    <View style={styles.areaText}>

      {/* <View style={styles.containCondIptu}>

        <View style={styles.areaCond}>
          <Text style={styles.textTitle}>Condomínio:</Text>
          <TextInput
            onChangeText={cep => setCEP(cep)}
            value={price}
            style={styles.inputCep}
            maxLength={8}
            placeholder='9,99'
            keyboardType="numeric"
          />
        </View>

        <View style={styles.areaCond}>
          <Text style={styles.textTitle}>IPTU </Text>
          <TextInput
            onChangeText={cep => setCEP(cep)}
            value={price}
            style={styles.inputCep}
            maxLength={8}
            placeholder='9,99'
            keyboardType="numeric"
          />
        </View>

      </View>

      <View style={styles.containCondIptu}>

        <View style={styles.areaCond}>
          <Text style={styles.textTitle}>Cômodos: * </Text>
          <View style={styles.pickerCond}>
            <Picker
              selectedValue={selected}
              mode='dialog'
              prompt="Selecione a condição do produto"
              onValueChange={(itemValue, itemIndex) =>
                setSelected(itemValue)
              }>
              <Picker.Item label="1 Cômodo" value={1} />
              <Picker.Item label="2 Cômodos" value={2} />
              <Picker.Item label="3 Cômodos" value={3} />
              <Picker.Item label="4 Cômodos" value={4} />
              <Picker.Item label="+ de 5 quartos" value="+5" />
            </Picker>
          </View>
        </View>

        <View style={styles.areaCond}>
          <Text style={styles.textTitle}>Tipo: * </Text>
          <View style={styles.pickerCond}>
            <Picker
              selectedValue={selected}
              mode='dialog'
              prompt="Selecione a condição do produto"
              onValueChange={(itemValue, itemIndex) =>
                setSelected(itemValue)
              }>
              <Picker.Item label="Vender" value="Vender" />
              <Picker.Item label="Alugar" value="Alugar" />
            </Picker>
          </View>
        </View>
      </View> */}
    </View>

  );
};

