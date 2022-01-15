import React, { useState, useContext } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function HeaderSearch() {
    const navigation = useNavigation();
    const { signed, user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.search}>
                <Ionicons name="search-outline" size={20} color="black" />
            </TouchableOpacity>
            <TextInput
                style={styles.inputSearch}
                onChangeText={text => onChangeText(text)}
                value={''}
                placeholder="O que está procurando?"

            />
            <TouchableOpacity style={styles.cart}>
                <Ionicons name="cart-outline" size={24} color="#fff" onPress={() => navigation.navigate('Cart')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat}>
                <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
            </TouchableOpacity>

        </View>

    )
}