import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import styles from './styles';

export default function Vagas({AuthContext}) {
  const {
    selectedJobs,
    setSelectedJobs
  } = useContext(AuthContext);

  return (
    <View style={styles.areaText}>
          <Text style={styles.textTitle}>Aŕea: * </Text>
          <View style={styles.pickerCond}>
            <Picker
              selectedValue={selectedJobs}
              mode='dialog'
              prompt="Selecione a Aréa"
              onValueChange={(itemValue, itemIndex) =>
                setSelectedJobs(itemValue)
              }>
              <Picker.Item label="Administrativo / Secretariado / Finanças" value="Administrativo / Secretariado / Finanças" />
              <Picker.Item label="Comercial / Vendas" value="Comercial / Vendas" />
              <Picker.Item label="Engenharia / Arquitetura / Design" value="Engenharia / Arquitetura / Design" />
              <Picker.Item label="Telecomunicações / Informática / Multimídia" value="Telecomunicações / Informática / Multimídia" />
              <Picker.Item label="Atendimento ao Cliente / Call Center" value="Atendimento ao Cliente / Call Center" />
              <Picker.Item label="Banco / Seguros / Consultoria / Jurídica" value="Banco / Seguros / Consultoria / Jurídica" />
              <Picker.Item label="Logística / Distribuição" value="Logística / Distribuição" />
              <Picker.Item label="Turismo / Hotelaria / Restaurante" value="Atendimento ao Cliente / Call Center" />
              <Picker.Item label="Educação / Formação" value="Educação / Formação" />
              <Picker.Item label="Marketing / Comunicação" value="Marketing / Comunicação" />
              <Picker.Item label="Serviços Domésticos / Limpezas" value="Serviços Domésticos / Limpezas" />
              <Picker.Item label="Construção / Industrial" value="Construção / Industrial" />
              <Picker.Item label="Saúde / Medicina / Enfermagem" value="Saúde / Medicina / Enfermagem" />
              <Picker.Item label="Agricultura / Pecuária / Veterinária" />
            </Picker>
          </View>
        </View>
  );
};

