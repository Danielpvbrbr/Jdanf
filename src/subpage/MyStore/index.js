import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, FlatList, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import moment from 'moment';

export default function MyStore({ navigation }) {
  const { myProduct } = useContext(AuthContext);

  const getDays = (date) => {
    const inicio = moment(date, "DD/MM/YYYY");
    const fim = moment(new Date(), "DD/MM/YYYY");
    const dias = fim.diff(inicio, 'days');

    return (dias);
  };


  const buttonAlert = (item) =>
    Alert.alert('Aténção',
      'Tem certeza que deseja deletar esse Anúncio', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => alert(item + 'Deletado') },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ marginTop: -26 }}>

        <FlatList
          data={myProduct}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.key}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ViewProduct', {
                  image: item.imagens.uri,
                  title: item.title,
                  price: item.price,
                  advertiser: item.advertiser,
                  description: item.description,
                  category: item.category,
                  priceCond: item.priceCond,
                  priceIPTU: item.priceIPTU,
                  selectType: item.selectType,
                  selectComod: item.selectComod,
                  selectSex: item.selectSex,
                  selectCondition: item.selectCondition,
                  selectedJobs: item.selectedJobs,
                  selectedService: item.selectedService,
                  bairro: item.address.bairro,
                  cep: item.address.cep,
                  localidade: item.address.localidade,
                  uf: item.address.uf,
                  date: item.date,
                })}>
                  <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={{
                      uri: item.imagens.uri[0]
                    }} />

                  <View style={styles.areaContain} >

                    <View style={styles.are1} >
                      <Text style={styles.title}>{item.title}</Text>
                    </View>

                    <View style={styles.are2}>
                      <Text style={styles.price}>R$: {item.price}</Text>
                      <View style={styles.areaIcons}>
                        <TouchableOpacity onPress={() => alert('Editar')}>
                          <FontAwesome name="edit" size={24} color="#18346D" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => buttonAlert(item.key)}>
                          <MaterialIcons name="delete" size={24} color="#FF8000" />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.are2}>
                      {getDays(item.date) == 0 ?
                        <Text style={styles.active}>Publicado hojé</Text>
                        :
                        <Text style={styles.active}>{getDays(item.date) <= 1 ? `${getDays(item.date)} dia ativo` : `${getDays(item.date)} dias ativo`}</Text>
                      }

                      <Text style={styles.viewQtd}>{item.price} Visualizações</Text>
                    </View>
                  </View>

                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

    </SafeAreaView>
  );
};

