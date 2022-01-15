import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -22
    },
    buttonEntrar: {
        justifyContent: 'center',
        width: 80,
        height: 35,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 5
    },
    profile: {
        width: 45,
        height: 45,
        borderRadius: 400 / 2,
        marginRight: 10
    },
    name: {
        color: '#FFF',
    },
    cart: {
        marginLeft: 10,
        marginRight: 10
    },
    chat: {
        marginRight: 10
    }
});

export default styles