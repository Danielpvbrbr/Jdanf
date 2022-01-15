import React, { useState, useRef, useEffect } from 'react';
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
// import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
// import firebase from '../../services/firebaseConnection';
// import MyCarousel from '../../components/MyCarousel'
import IconeCategory from '../../components/IconeCategory'
const slides = [
  {
    key: 1,
    title: 'Vestido Manga Princesa Bufante Curto Balada ',
    price: '29,99',
    image: {
      uri:
        'https://http2.mlstatic.com/D_NQ_NP_745309-MLB47544536031_092021-O.webp',
    },
    freight: 'Frete grátis',
  },
  {
    key: 2,
    title: 'Conjunto Calça Lurex E Body Tule Manga',
    price: '29,99',
    image: {
      uri:
        'https://http2.mlstatic.com/D_NQ_NP_907062-MLB32887362840_112019-O.webp',
    },
    freight: 'Frete grátis',
  },
  {
    key: 3,
    title: 'Great Offers',
    price: '29,99',
    image: {
      uri:
        'https://http2.mlstatic.com/D_Q_NP_709907-MLB45464243251_042021-P.webp',
    },
    freight: 'Frete grátis',
  },
  {
    key: 4,
    title: 'Great Offers',
    price: '29,99',
    image: {
      uri:
        'https://http2.mlstatic.com/D_NQ_NP_773377-MLB45479977411_042021-O.webp',
    },
    freight: 'Frete grátis',
  },
  {
    key: 5,
    title: 'Offers Great',
    price: '290,99',
    image: {
      uri:
        'https://http2.mlstatic.com/D_Q_NP_674506-MLB41153595322_032020-P.webp',
    },
    freight: 'Frete grátis',
  },
  {
    key: 6,
    title: 'Offesrs Great',
    price: '150,99',
    image: {
      uri:
        'https://http2.mlstatic.com/D_NQ_NP_852085-MLB47033937431_082021-O.webp',
    },
    freight: 'Frete grátis',
  },
];

export default function App({ navigation }) {
  const [showRealApp, setShowRealApp] = useState(false);
  const columns = 2;


  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
    while (lastRowElements !== columns) {
      data.push({
        key: `empty-${lastRowElements}`,
        title: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
    return data;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.areaPromotion}>
          {/* <View style={styles.info}>
            <MyCarousel />
          </View> */}

          <IconeCategory />
        </View>

        <View style={styles.areaProduct}>
          <FlatList
            data={createRows(slides, columns)}
            keyExtractor={item => item.key}
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} />;
              }
              return (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ViewProduct')}>
                  <Image resizeMode="contain" style={{ width: 120, height: 120 }} source={item.image} />

                  <View style={styles.areaText}>
                    <View style={styles.areaTitle}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>

                    <Text style={styles.price}>{"R$: " + item.price}</Text>
                    <Text style={styles.freight}>{item.freight}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}