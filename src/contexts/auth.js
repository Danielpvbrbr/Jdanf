import React, { useState, createContext, useRef, useEffect } from 'react';
import { Keyboard } from 'react-native'
export const AuthContext = createContext({});
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthProvider({ children }) {
    const recaptchaVerifier = useRef(null);
    const [user, setUser] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();
    const [verificationId, setVerificationId] = useState();
    const [verificationCode, setVerificationCode] = useState();
    const [showCod, setShowCod] = useState(false)
    const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
    const [loading, setLoading] = useState(false)

    async function sendCode() {
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            setShowCod(true)
            // alert('Coodigo enviado')
        } catch (err) {
            alert('Autenticação mal sucedida! Tente novamente mais tarde', err);
        }
    };

    async function verifyCode() {
        setLoading(true)
        Keyboard.dismiss();
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
            );
            await firebase.auth().signInWithCredential(credential).then(async (res) => {
                function randomName(length) {
                    let result = '';
                    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let charactersLength = characters.length;
                    for (let i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                await firebase
                    .firestore()
                    .collection('Auth')
                    .doc(res.user.uid)
                    .set({
                        name: randomName(10),
                        email: null,
                        phone: phoneNumber,
                        password: null,
                        genre: null,
                        birth: null,
                        status: true,
                        access: 0
                    })
                    .then(() => {
                        let data = {
                            uid: res.user.uid,
                            name: randomName(10),
                            phone: phoneNumber,
                            access: 0
                        };
                        setUser(data);
                        storageUser(data)
                    });
            });
            setPhoneNumber('')
            setLoading(false)
            setShowCod(false)

        } catch (err) {
            alert('Autenticação mal sucedida! Tente novamente mais tarde');
            setLoading(false)
        }

    };

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    };

    useEffect(() => {
        async function loadingStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadingStorage()
    }, []);

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            });
    };
    // signOut()
    // async function signInWithPhoneNumber(phoneNumber) {
    //     const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
    //     alert(confirmation)
    //     // setConfirm(confirmation);
    // }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            phoneNumber,
            firebaseConfig,
            showCod,
            verificationId,
            recaptchaVerifier,
            loading,
            setVerificationCode,
            setPhoneNumber,
            setShowCod,
            sendCode,
            verifyCode
        }}>
            {children}
        </AuthContext.Provider>
    )
}