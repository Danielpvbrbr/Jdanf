import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

export default function Servicos({AuthContext}) {
  const {
    selectedService,
    setSelectedService
  } = useContext(AuthContext);

  return (
    <View style={styles.areaText}>
          <Text style={styles.textTitle}>Tipo: * </Text>
          <View style={styles.pickerCond}>
            <Picker
              selectedValue={selectedService}
              mode='dialog'
              prompt="Selecione o tipo de serviço"
              onValueChange={(itemValue, itemIndex) =>
                setSelectedService(itemValue)
              }>
              <Picker.Item label="Serviços domésticos" value="Serviços domésticos" />
              <Picker.Item label="Babá" value="Babá" />
              <Picker.Item label="Eventos / Festas" value="Eventos / Festas" />
              <Picker.Item label="Reparação / Conserto / Reforma" value="Reparação / Conserto / Reforma" />
              <Picker.Item label="Saúde / Beleza" value="Saúde / Beleza" />
              <Picker.Item label="Informática" value="Informática" />
              <Picker.Item label="Tradução" value="Tradução" />
              <Picker.Item label="Transporte / Mudanças" value="Transporte / Mudanças" />
              <Picker.Item label="Profissionais liberais" value="Profissionais liberais" />
              <Picker.Item label="Turismo" value="Turismo" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>
          </View>
        </View>
  );
};

