import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ListNavigation({ rota, title, icon, typeIcon, set }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <TouchableOpacity style={styles.area} onPress={() => navigation.navigate(rota)}>
                <View style={styles.ar1}>
                    {typeIcon != 'MaterialCommunityIcons' ?
                        < Ionicons name={icon} size={25} color="#424242" />
                        :
                        <MaterialCommunityIcons name={icon} size={25} color="#424242" />
                    }
                    <Text style={{ marginLeft: 4 }}>{title}</Text>
                </View>
                <View style={styles.ar2}>
                    {
                        set &&
                        <Text style={{ marginBottom: 4 }}>Visualizar</Text>
                    }
                    <Ionicons name="chevron-forward-sharp" size={25} color="#424242" />
                </View>



            </TouchableOpacity>
        </SafeAreaView>
    );
};

