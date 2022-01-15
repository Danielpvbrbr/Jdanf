import React, { useState } from 'react';
import {
    Image,
    View,
    ScrollView,
    Dimensions,
    StyleSheet,
    Text
} from 'react-native';
const { width } = Dimensions.get("window");
const height = width * 0.4; 


export default function Slider({images}) {
    const [active, setActive] = useState(0);

    function change({ nativeEvent }) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != active) {
            setActive(slide);
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView
                paginaEnabled
                horizontal
                onScroll={text => change(text)}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            >

                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            style={styles.image}
                            source={{ uri: image }} />
                    ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((i, k) => (
                        <Text key={k} style={k === active ? styles.pagingActiveText : styles.pagingText}>&#9864;</Text>
                    ))
                }

            </View>
        </View >

    );

}

const styles = StyleSheet.create({
    constainer: {
        width,
        height
    },
    scroll: {
        width,
        height
    },
    image: {
        width,
        height,
        resizeMode: 'cover'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0
    },
    pagingText: {
        color: '#888',
        margin: 3,
        fontSize: (width / 30)
    },
    pagingActiveText: {
        color: '#fff',
        margin: 3,
        fontSize: (width / 30)
    },


})