import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: -20,
    },
    area: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: '#EFF5FB',
        borderRadius: 2,
        borderColor: '#EFF5FB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,

    },
    ar1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:3
    },
    ar2: {
        flexDirection: 'row',
        alignItems: 'center'
    },


});

export default styles