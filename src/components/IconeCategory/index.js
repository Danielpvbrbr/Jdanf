import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import styles from './styles'

export default function IconeCategory() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.category}>
                    <Ionicons name="md-home" size={30} color="#18346D" />
                    <Text style={styles.title}>Imóveis</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <FontAwesome5 name="car" size={30} color="#18346D" />
                    <Text style={styles.title}>Autos e peças</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <Ionicons name="bed" size={30} color="#18346D" />
                    <Text style={styles.title}>Para sua casa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <Ionicons name="shirt" size={30} color="#18346D" />
                    <Text style={styles.title}>Moda e beleza</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <MaterialCommunityIcons name="cellphone" size={30} color="#18346D" />
                    <Text style={styles.title}>Eletrônicos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <FontAwesome name="suitcase" size={30} color="#18346D" />
                    <Text style={styles.title}>Vagas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <Entypo name="tools" size={30} color="#18346D" />
                    <Text style={styles.title}>Serviços</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.category}>
                    <FontAwesome5 name="guitar" size={30} color="#18346D" />
                    <Text style={styles.title}>Músicas</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}