import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function HeaderPerson() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cart}>
                <Ionicons name="cart-outline" size={24} color="#fff" onPress={()=> navigation.navigate('Cart')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat} onPress={()=> navigation.navigate('Cart')}>
                <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>

    )
}
