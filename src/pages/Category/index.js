import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import styles from './styles';

export default function Category() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([])
    firebase.firestore()
      .collection('Category')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let response = documentSnapshot.data()
          setData(oldArray => [...oldArray, response])
        });

      });

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {
        data.map(v =>
          <TouchableOpacity style={styles.area} >
            <View style={styles.ar1}>
              {v.svg === 'tractor' ?
                <FontAwesome5 name="tractor" size={20} color="#424242" />
                :
                <Ionicons name={v.svg} size={25} color="#424242" />
              }

              <Text style={{ marginLeft: 4 }}>{v.name}</Text>
            </View>

            <View style={styles.ar2}>
              <Ionicons name="chevron-forward-sharp" size={25} color="#424242" />
            </View>

          </TouchableOpacity>
        )
      }
    </SafeAreaView>
  );
};

