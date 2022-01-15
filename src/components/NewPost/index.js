import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

export default function NewPost() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cart}>
                <Ionicons name="cart-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chat}>
                <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>

    )
}
