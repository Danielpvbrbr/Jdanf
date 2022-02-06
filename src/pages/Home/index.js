import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView
} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import IconeCategory from '../../components/IconeCategory'
import { AuthContext } from '../../contexts/auth';
import moment from 'moment';

export default function App({ navigation }) {
  const { product } = useContext(AuthContext);
  let columns = 2;


  // function createRows(data, columns) {
  //   const rows = Math.floor(data.length / columns);
  //   let lastRowElements = data.length - rows * columns;
  //   if (lastRowElements) {
  //     for (var i = lastRowElements; i < columns; i++) {
  //       data.push({
  //         key: `empty-${lastRowElements}`,
  //         name: `empty-${lastRowElements}`,
  //         empty: true
  //       });
  //     }
  //   }
  //   return data;
  // };


  const getDays = (date) => {
    return moment(date).format('LL');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.areaPromotion}>
          <IconeCategory AuthContext={AuthContext} />
        </View>

        <View style={styles.areaProduct}>
          <FlatList
            data={product}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.key}
            numColumns={columns}
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
                  })}>
                    <Image
                      resizeMode="cover"
                      style={styles.image}
                      source={{
                        uri: item.imagens.uri[0]
                      }} />



                    <View style={styles.areaText}>
                      <View style={styles.areaTitle}>
                        <Text style={styles.title}>{item.title}</Text>
                      </View>

                      <Text style={styles.price}>{"R$: " + item.price}</Text>
                      <Text style={styles.date}>{`${getDays(item.date)} - ${item.address.localidade} - ${item.address.uf}`}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.areaButton}>
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Announce')}>
          <Text style={styles.textButton}>Anunciar</Text>
          <Ionicons name="camera" size={24} color="#fff" />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}