import React, { useRef, useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialIcons, Foundation } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import { SliderBox } from "react-native-image-slider-box";

export default function ViewProduct({ route, navigation }) {
  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.image}>
          <SliderBox
            images={route.params?.image}
            sliderBoxHeight={'100%'}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
            dotColor="#FFF"
            inactiveDotColor="#90A4AE"
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            ImageComponentStyle={{ width: '94%' }}
            imageLoadingColor="#2196F3"
            resizeMethod={'resize'}
            resizeMode={'cover'}
          />
        </View>

        <View style={styles.areaTitle}>
          <Text style={styles.title}>{route.params?.title}</Text>
        </View>

        <View style={styles.areaPrice}>
          <Text style={styles.price}>R$ {route.params?.price}</Text>
        </View>

        <View style={styles.areaDesc}>
          <Text style={styles.titleDesc}>Descrição</Text>
          <Text style={styles.desc}>{route.params?.description}</Text>
        </View>

        <View style={styles.areaCaract}>
          <View style={styles.areaTitleTop}>
            <Text style={styles.titleLocation}>Características</Text>
          </View>
          <View style={styles.containFlex}>
            <View style={styles.containLeft}>
              {
                route.params?.priceIPTU ? <Text style={styles.caract}>Tipo:</Text> : <View />
              }

              {
                route.params?.selectCondition ? <Text style={styles.caract}>Condição:</Text> : <View />
              }

              {
                route.params?.category ? <Text style={styles.caract}>Categoria:</Text> : <View />
              }

              {
                route.params?.selectSex ? <Text style={styles.caract}>Gênero:</Text> : <View />
              }

              {
                route.params?.priceIPTU ? <Text style={styles.caract}>IPTU:</Text> : <View />
              }

              {
                route.params?.priceCond ? <Text style={styles.caract}>Condomínio:</Text> : <View />
              }

              {
                route.params?.selectComod ? <Text style={styles.caract}>Cômodos:</Text> : <View />
              }

              {
                route.params?.selectedJobs ? <Text style={styles.caract}>Vaga para:</Text> : <View />
              }

              {
                route.params?.selectedService ? <Text style={styles.caract}>Serviço de:</Text> : <View />
              }
            </View>

            <View style={styles.containRight}>

              {
                route.params?.selectType ? <Text style={styles.caract}>{route.params?.selectType}</Text> : <View />
              }

              {
                route.params?.selectCondition ? <Text style={[styles.caract, { color: route.params?.selectCondition === 'Novo' ? '#088A08':'#DF3A01', fontWeight: 'bold' }]}>{route.params?.selectCondition}</Text>
                  : <View />
              }

              {
                route.params?.category ? <Text style={styles.caract}>{route.params?.category}</Text> : <View />
              }

              {
                route.params?.selectSex ? <Text style={styles.caract}>{route.params?.selectSex}</Text> : <View />
              }

              {
                route.params?.priceIPTU ? <Text style={styles.caract}>R$ {route.params?.priceIPTU}</Text> : <View />
              }

              {
                route.params?.priceCond ? <Text style={styles.caract}>R$ {route.params?.priceCond}</Text> : <View />
              }

              {
                route.params?.selectComod ? <Text style={styles.caract}>{route.params?.selectComod}</Text> : <View />
              }

              {
                route.params?.selectedJobs ? <Text style={styles.caract}>{route.params?.selectedJobs}</Text> : <View />
              }

              {
                route.params?.selectedService ? <Text style={styles.caract}>{route.params?.selectedService}</Text> : <View />
              }
            </View>
          </View>

        </View>

        <View style={styles.areaLocation}>
          <View style={styles.areaTitleTop}>
            <Text style={styles.titleLocation}>Localização</Text>
          </View>

          <View style={styles.containFlex}>

            <View style={styles.containLeft}>
              <Text style={styles.locat}>CEP:</Text>
              <Text style={styles.locat}>Município:</Text>
              <Text style={styles.locat}>Bairro:</Text>
            </View>

            <View style={styles.containRight}>
              <Text style={styles.caract}>{route.params?.cep}</Text>
              <Text style={styles.caract}>{route.params?.localidade} - {route.params?.uf}</Text>
              <Text style={styles.caract}>{route.params?.bairro}</Text>
            </View>
          </View>

        </View>

        <View style={styles.areaShop}>
          <View style={styles.areaTitleTop}>
            <Text style={styles.titleShop}>Minha loja</Text>
          </View>

          <View style={styles.containFlex}>
            <View style={styles.containLeft}>
              <Text style={styles.locat}>Anunciante:</Text>
              <Text style={styles.locat}>Ativo:</Text>
            </View>

            <View style={styles.containRight}>
              <View style={styles.containVerif}>
                <Text style={styles.caract}>{route.params?.advertiser}</Text>
                <MaterialIcons name="verified" size={18} color="#18346D" />
              </View>
              <Text style={styles.caract}>Esta conosco desde 2023</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
          {/* <Text style={styles.textButton}>Nogociar</Text> */}
          <Ionicons name="chatbubbles-sharp" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

