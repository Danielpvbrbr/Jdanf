import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Notifications from '../pages/Notifications';
import Account from '../pages/Account';

import HeaderPerson from '../components/HeaderPerson';
import HeaderSearch from '../components/HeaderSearch';
import HeaderProfile from '../components/HeaderProfile';
import HeaderSubPage from '../components/HeaderSubPage';

import ViewProduct from '../subpage/ViewProduct';
import Announce from '../subpage/Announce';
import Chat from '../subpage/Chat';
import AreaChat from '../subpage/AreaChat';


const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';

const icons = {
    Inicio: {
        name: 'home'
    },
    Favoritos: {
        name: 'heart'
    },
    Notificações: {
        name: 'notifications-outline'
    },
    Conta: {
        name: 'person-outline'
    }
}

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name]
                    return <Ionicons name={name} color={color} size={size} />
                },
                tabBarStyle: {
                    backgroundColor: '#FF8000'
                },
                tabBarActiveTintColor: '#18346D',
                tabBarInactiveTintColor: '#FFF',
                tabBarHideOnKeyboard: true

            })}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSearch />
                    ),
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={Favorites}
                options={{
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderPerson />
                    ),
                }}
            />
            <Tab.Screen
                name="Notificações"
                component={Notifications}
                options={{
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderPerson />
                    ),
                }}
            />

            <Tab.Screen
                name="Conta"
                component={Account}
                options={{
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderProfile />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Tabs"
                component={Tabs} options={{
                    headerShown: false,
                }} />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{

                    headerShown: true,
                    headerTitle: 'Cadastrar',
                }} />
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: true,
                    headerTitle: 'Entrar',
                }} />
            <AuthStack.Screen
                name="ViewProduct"
                component={ViewProduct}
                options={{
                    headerTitle: 'Anúncio',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),

                }} />

            <AuthStack.Screen
                name="Announce"
                component={Announce}
                options={{
                    headerTitle: 'Anúnciar produto',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',

                }} />

            <AuthStack.Screen
                name="Chat"
                component={Chat}
                options={{
                    headerTitle: 'Negociações',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',

                }} />

            <AuthStack.Screen
                name="AreaChat"
                component={AreaChat}
                options={{
                    headerTitle: 'Negociações',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',

                }} />
        </AuthStack.Navigator>
    );
};

