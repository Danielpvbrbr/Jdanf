import React, { useState, useContext } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function HeaderProfile() {
    const navigation = useNavigation();
    const { signed, user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.profileArea}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('../../assets/perfil/perfil.png')}
                        style={styles.profile}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.name}>{user && user.name}</Text>
            </View>
            {
                signed ?
                    <>
                        <TouchableOpacity style={styles.cart} onPress={() => navigation.navigate('Cart')}>
                            <Ionicons name="cart-outline" size={24} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.chat} >
                            <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </>
                    :
                    <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: '#FF8000', fontWeight: 'bold' }}>Entrar</Text>
                    </TouchableOpacity>
            }

        </View>

    )
}