import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: -20,
    },
    textTitle: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight:'bold'
    },
    selectCategory: {
        width: '100%',
        height: 40,
        padding: 10,
        borderWidth: 0.2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderColor: '#EFF5FB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,
    },
    pickerCond: {
        width: '100%',
        height: 40,
        padding: 10,
        borderWidth: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderColor: '#EFF5FB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,
    },

});

export default styles