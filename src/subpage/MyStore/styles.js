import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        // backgroundColor: '#fff',
    },
    image: {
        width: Dimensions.get('window').width / 3,
        height: 100,
    },
    areaContain: {
        width: Dimensions.get('window').width / 1.6,
        height: 100,
    },
    are1: {
        padding: 2,
        width: Dimensions.get('window').width / 1.6,
        height: '40%',
    },
    title: {
        fontSize: 15
    },
    are2: {
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.6,
        height: '30%',
    },
    areaIcons: {
        paddingRight: 3,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    viewQtd: {
        fontSize: 11.5,
        marginRight: 2,
        fontWeight: 'bold',
        color:'#848484',
    },
    active: {
        fontSize: 11,
        color: '#A4A4A4',
        fontWeight: 'bold'
    },
    are3: {
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.6,
        borderWidth: 1,
        height: '20%',
    },

    item: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff",
        flexGrow: 1,
        margin: 2,
        padding: 5,
        flexBasis: 0,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 11,
        elevation: 5,

    },
});

export default styles;