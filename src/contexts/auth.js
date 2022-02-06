import React, { useState, createContext, useRef, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native'
export const AuthContext = createContext({});
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState([]);
    const [product, setProduct] = useState([]);
    const [myProduct, setMyProduct] = useState([]);
    const [category, setCategory] = useState();

    ///////////Announce////////////
    const [priceCond, setPriceCond] = useState(0);
    const [priceIPTU, setPriceIPTU] = useState(0);
    const [selectType, setSelectType] = useState(null);
    const [selectComod, setSelectComod] = useState(null);
    const [selectSex, setSelectSex] = useState(null);
    const [selectCondition, setSelectCondition] = useState(null);
    const [selectedJobs, setSelectedJobs] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    // End Values Announce

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    };

    const clearVelue = () => {
        setPriceCond('');
        setPriceIPTU('');
        setSelectType('');
        setSelectComod('');
        setSelectSex('');
        setSelectCondition('');
        setSelectedJobs('');
        setSelectedService('');
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

    useEffect(() => {
        async function runProduct() {
            await firebase
                .firestore()
                .collection('Product')
                .where('category', '==', category)
                // .where('title', '!=', category ) 
                .get()
                .then(querySnapshot => {
                    setProduct([]);
                    querySnapshot.forEach(documentSnapshot => {
                        const data = {
                            key: documentSnapshot.id,
                            advertiser: documentSnapshot.data().advertiser,
                            title: documentSnapshot.data().title,
                            price: documentSnapshot.data().price,
                            description: documentSnapshot.data().description,
                            category: documentSnapshot.data().category,
                            date: documentSnapshot.data().date,
                            hour: documentSnapshot.data().hour,
                            priceCond: documentSnapshot.data().priceCond,
                            priceIPTU: documentSnapshot.data().priceIPTU,
                            selectType: documentSnapshot.data().selectType,
                            selectComod: documentSnapshot.data().selectComod,
                            selectSex: documentSnapshot.data().selectSex,
                            selectCondition: documentSnapshot.data().selectCondition,
                            selectedJobs: documentSnapshot.data().selectedJobs,
                            selectedService: documentSnapshot.data().selectedService,
                            address: {
                                bairro: documentSnapshot.data().address.bairro,
                                cep: documentSnapshot.data().address.cep,
                                localidade: documentSnapshot.data().address.localidade,
                                logradouro: documentSnapshot.data().address.logradouro,
                                uf: documentSnapshot.data().address.uf,
                            },
                            imagens: {
                                uri: documentSnapshot.data().imagens.uri,
                                alt: documentSnapshot.data().imagens.alt
                            },
                            uid: documentSnapshot.data().uid,
                        }
                        setProduct(oldArray => [...oldArray, data])

                    });
                });
        }
        runProduct()
    }, [category]);

    useEffect(() => {
        async function MyProduct() {
            await firebase
                .firestore()
                .collection('Product')
                .where('uid', '==', user.uid)
                .get()
                .then(querySnapshot => {
                    setMyProduct([])
                    querySnapshot.forEach(documentSnapshot => {
                        const data = {
                            key: documentSnapshot.id,
                            advertiser: documentSnapshot.data().advertiser,
                            title: documentSnapshot.data().title,
                            price: documentSnapshot.data().price,
                            description: documentSnapshot.data().description,
                            category: documentSnapshot.data().category,
                            date: documentSnapshot.data().date,
                            hour: documentSnapshot.data().hour,
                            priceCond: documentSnapshot.data().priceCond,
                            priceIPTU: documentSnapshot.data().priceIPTU,
                            selectType: documentSnapshot.data().selectType,
                            selectComod: documentSnapshot.data().selectComod,
                            selectSex: documentSnapshot.data().selectSex,
                            selectCondition: documentSnapshot.data().selectCondition,
                            selectedJobs: documentSnapshot.data().selectedJobs,
                            selectedService: documentSnapshot.data().selectedService,
                            address: {
                                bairro: documentSnapshot.data().address.bairro,
                                cep: documentSnapshot.data().address.cep,
                                localidade: documentSnapshot.data().address.localidade,
                                logradouro: documentSnapshot.data().address.logradouro,
                                uf: documentSnapshot.data().address.uf,
                            },
                            imagens: {
                                uri: documentSnapshot.data().imagens.uri,
                                alt: documentSnapshot.data().imagens.alt
                            },
                            uid: documentSnapshot.data().uid,
                        }
                        setMyProduct(oldArray => [...oldArray, data])
                    });
                });
        }
        MyProduct()
    }, []);

    //Funcao para logar o usario
    async function signIn(email, password) {

        setLoading(true);
        Keyboard.dismiss();
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase
                    .firestore()
                    .collection('Auth')
                    .doc(uid)
                    .onSnapshot(querySnapshot => {
                        let data = {
                            uid: uid,
                            name: querySnapshot.data().name,
                            email: querySnapshot.data().email,
                        };
                        setUser(data);
                        storageUser(data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        alert(error.code);
                        setLoading(false);
                    });
            })
    };

    //Cadastrar usuario
    async function signUp(email, password, name) {
        setLoadingAuth(true);
        Keyboard.dismiss();
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase
                    .firestore()
                    .collection('Auth')
                    .doc(uid)
                    .set({
                        uid: uid,
                        name: name,
                        email: email,
                        password: password,
                    }).then(() => {
                        let data = {
                            uid: uid,
                            nome: email,
                            email: email,
                            password: password,
                        };
                        setUser(data);
                        storageUser(data);
                        setLoading(false);

                    })
                    .catch((err) => {
                        alert(err.code)
                        setLoading(false);
                    })
            })
    };
    async function sendMessages(messages) {

        await firebase
            .firestore()
            .collection('Chat')
            .doc()
            .set({
                _id: messages[0]._id,
                text: messages[0].text,
                createdAt: messages[0].createdAt.toString(),
                user: {
                    _id: messages[0].user._id,
                    avatar: messages[0].user.avatar,
                    name: messages[0].user.name
                }
            }).then((res) => {
                // alert(`Success`)
            })
    };


    useEffect(() => {
        async function get() {
            await firebase.firestore()
                .collection('Chat')
                .orderBy('createdAt', 'desc')
                .onSnapshot(querySnapshot => {
                    setChat([])
                    querySnapshot.forEach(documentSnapshot => {
                        // console.log(documentSnapshot.data())
                        let data = {
                            _id: documentSnapshot.data()._id,
                            text: documentSnapshot.data().text,
                            createdAt: documentSnapshot.data().createdAt,
                            user: {
                                _id: documentSnapshot.data().user._id,
                                avatar: documentSnapshot.data().user.avatar,
                                name: documentSnapshot.data().user.name
                            }
                        };
                        // console.log(data)
                        setChat(oldArray => [...oldArray, data])
                    })
                });
        };
        get();
    }, []);

    // function makeid(length) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = user.uid.length;
    //     for (var i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     return result;
    // }

    const addProduct = async (data) => {
        let uri = [];
        let alt = [];

        for (let i in data.imagens) {
            const response = await fetch(data.imagens[i]);
            const blob = await response.blob();

            firebase
                .storage()
                .ref(`Product/${user.uid}/`)
                .child(blob._data.blobId)
                .put(blob)
                .then(async () => {
                    await firebase
                        .storage()
                        .ref()
                        .child(`Product/${user.uid}/${blob._data.blobId}`)
                        .getDownloadURL().then(async (url) => {
                            uri.push(url);
                            alt.push(blob._data.blobId);
                            if (data.imagens.indexOf(null) === uri.length || uri.length >= 3) {
                                await firebase
                                    .firestore()
                                    .collection('Product')
                                    .doc()
                                    .set({
                                        uid: user.uid,
                                        advertiser: user.name,
                                        title: data.title,
                                        price: data.price,
                                        priceCond: priceCond,
                                        priceIPTU: priceIPTU,
                                        selectType: selectType,
                                        selectComod: selectComod,
                                        selectSex: selectSex,
                                        selectCondition: selectCondition,
                                        selectedJobs: selectedJobs,
                                        selectedService: selectedService,
                                        description: data.description,
                                        category: data.category,
                                        date: data.date,
                                        hour: data.hour,
                                        address: {
                                            bairro: data.address.bairro,
                                            cep: data.address.cep,
                                            localidade: data.address.localidade,
                                            logradouro: data.address.logradouro,
                                            uf: data.address.uf,
                                        },
                                        imagens: {
                                            uri,
                                            alt
                                        },

                                    }).then((res) => {
                                        alert("Publicado!");
                                    })
                            }

                        })
                })

        }


    };

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            });
    };
    // signOut()

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            chat,
            category,
            setCategory,
            product,
            myProduct,
            priceCond,
            setPriceCond,
            priceIPTU,
            setPriceIPTU,
            selectComod,
            setSelectComod,
            selectType,
            setSelectType,
            selectSex,
            setSelectSex,
            selectCondition,
            setSelectCondition,
            selectedJobs,
            setSelectedJobs,
            selectedService,
            setSelectedService,
            sendMessages,
            signUp,
            signIn,
            addProduct,
            clearVelue,

        }}>
            {children}
        </AuthContext.Provider>
    )
}