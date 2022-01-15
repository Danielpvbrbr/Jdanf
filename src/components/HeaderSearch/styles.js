import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        position: "relative",
        left: 25,
        zIndex: 99
    },
    inputSearch: {
        width: 300,
        height: 35,
        backgroundColor: '#fff',
        paddingLeft:30,
        borderRadius: 11,
    },
    cart: {
        marginLeft: 12,
        marginRight: 10
    },
    chat: {
        marginRight: 10
    }
});

export default styles