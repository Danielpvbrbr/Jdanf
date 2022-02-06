import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    category: {
        alignItems: "center",
        backgroundColor: "#fff",
        flexGrow: 1,
        margin: 2,
        width: 66,
        height: 55,
        padding: 2,
        flexBasis: 0,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.28,
        shadowRadius: 11,
        elevation: 8,
    },
    title: {
        fontSize: 8
    },
});

export default styles