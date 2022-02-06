import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: -20,
    },
    image: {
        width: 95,
        height: 95,
        borderRadius: 5
    },
    listChat: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#EFF5FB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,

    },
    areaImg: {
        width: '27%',
    },
    areaTitle: {
        padding: 5,
        width: '60%',
    },
    areaCvs: {
        flexDirection: 'row'
    },
    areaHr: {
        width: '12%',
    },



});

export default styles