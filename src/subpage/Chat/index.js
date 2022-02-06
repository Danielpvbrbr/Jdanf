import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Chat({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.listChat} onPress={() => navigation.navigate('AreaChat',{
        title:'Vestido muito lindo',
        image:'https://cdn.shopify.com/s/files/1/0579/2494/4070/products/vestido_midi_retro_audrey-1.jpg?v=1626667167',
        advertiser:'Bruna',
        price:'50,99s'
      })}>
        <View style={styles.areaImg}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0579/2494/4070/products/vestido_midi_retro_audrey-1.jpg?v=1626667167' }}
          />
        </View>

        <View style={styles.areaTitle}>
          <Text style={{ fontWeight: 'bold' }}>Vestido muito lindo</Text>
          <View style={styles.areaCvs}>
            <Text style={{ fontWeight: 'bold' }}>Bruna: </Text>
            <Text style={{ color: 'green' }}>Tenho enteresse </Text>
          </View>
        </View>

        <View style={styles.areaHr}>
          <Text style={{ color: 'green' }}>Agora</Text>
        </View>

      </TouchableOpacity>
    </SafeAreaView>
  );
};

