import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: -20,
    },
    image: {
        width: '100%',
        height: 250,
        borderWidth: 1,
        flexDirection: 'row',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 2,
        borderColor: '#EFF5FB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    containFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containLeft: {
        width: '40%',
    },
    containRight: {
        flexDirection: 'column',
        width: '60%',
    },
    containVerif:{
        flexDirection: 'row',
    },
    areaTitle: {
        justifyContent: 'center',
        height: 60,
    },
    title: {
        marginTop:5,
        fontSize: 20
    },
    areaPrice: {
        justifyContent: 'center',
        height: 40,
    },
    price: {
        fontSize: 25,
        color:'#18346D',
        fontWeight:'bold'
    },
    areaDesc: {
        padding: 4,
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
    titleDesc: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 3,
        borderBottomWidth: 0.2
    },
    desc: {
        fontSize: 15
    },
    areaCaract: {
        padding: 4,
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

    caract: {
        fontSize: 14,
    },
    areaLocation: {
        padding: 4,
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
    titleLocation: {
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize: 15,
    },
    areaShop: {
        padding: 4,
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
    titleShop: {
        marginBottom: 2,
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 2
    },
    areaTitleTop: {
        width: '100%',
        borderBottomWidth: 0.2,
    },
    locat: {
        fontSize: 14
    },
    areaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: 60,
        bottom: 10
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF8000',
        width: 70,
        height: 50,
        borderRadius: 25,
    },
    textButton: {
        marginRight: 5,
        color: '#fff',
        fontWeight: 'bold'
    }

});

export default styles