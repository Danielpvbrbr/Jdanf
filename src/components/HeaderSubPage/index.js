import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HeaderSubPage({ title }) {
    const navigation = useNavigation();
    const [heart, setHeart] = useState(false);

    const sendRoute = () => {
        setHeart(!heart)
        alert(!heart)
    };

    return (
        <View style={styles.container}>
            <Text>{title}</Text>

            <TouchableOpacity style={styles.cart}>
                {heart ?
                    <Ionicons name="heart" size={24} color="#fff" onPress={sendRoute} />
                    :
                    <Ionicons name="ios-heart-outline" size={24} color="#fff" onPress={sendRoute} />
                }
            </TouchableOpacity>


            <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Chat')}>
                <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>

    )
}
