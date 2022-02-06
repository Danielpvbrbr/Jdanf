import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: -15,
        marginBottom: 10
    },
    IconUser: {
        position: 'absolute',
        top: 30,
        left: 8
    },
    IconPass: {
        position: 'absolute',
        top: 102,
        left: 8
    },
    showPass: {
        position: 'absolute',
        left: 265,
        top: 103
    },
    inputText: {
        width: 300,
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 40
    },
    buttonEntrar: {
        width: 300,
        height: 50,
        backgroundColor: '#18346D',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5
    },
    areaReg: {
        marginTop: 6,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff',
    },
    logoGoogle: {
        position: 'absolute',
        right: 265,
        width: 24,
        height: 24,
    },
    logoFacebook: {
        position: 'absolute',
        right: 265,
        width: 26,
        height: 26,
    },
});

export default styles