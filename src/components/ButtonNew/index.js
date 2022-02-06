import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'


export default function ButtonNew({ size, color, focused }) {

    return (
        <View style={[styles.container, { 
            backgroundColor: focused ? '#18346D' : '#FF8000',borderColor: focused ? '#FF8000' :'#18346D' }]}>
            <Ionicons name="camera" size={size} color={color} />
        </View>

    )
}
