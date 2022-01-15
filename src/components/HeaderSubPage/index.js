import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HeaderSubPage({ title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
           
                <TouchableOpacity style={styles.cart}>
                    <Ionicons name="cart-outline" size={24} color="#fff" nPress={()=> navigation.navigate('Cart')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chat}>
                    <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
                </TouchableOpacity>
        </View>

    )
}
