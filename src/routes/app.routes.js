import React from 'react';
import { TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Notifications from '../pages/Notifications';
import Account from '../pages/Account';

import HeaderPerson from '../components/HeaderPerson';
import HeaderSearch from '../components/HeaderSearch';
import HeaderProfile from '../components/HeaderProfile';
import HeaderSubPage from '../components/HeaderSubPage';
import ButtonNew from '../components/ButtonNew';

import Purchase from '../subpage/Purchase';
import MyStore from '../subpage/MyStore';
import Help from '../subpage/Help';
import Settings from '../subpage/Settings';
import Profile from '../subpage/Profile';

import ViewProduct from '../subpage/ViewProduct';
import Announce from '../subpage/Announce';
import AreaChat from '../subpage/AreaChat';
import Chat from '../subpage/Chat';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Tabs" component={Tabs} options={{
                headerShown: false,
            }} />
            <AuthStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: 'Perfil',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),
                }} />

            <AuthStack.Screen
                name="Purchase"
                component={Purchase}
                options={{
                    headerTitle: 'Minhas Compras',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),
                }} />

            <AuthStack.Screen
                name="MyStore"
                component={MyStore}
                options={{
                    headerTitle: 'Meus Anúncios',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),
                }} />

            <AuthStack.Screen name="Favorites" component={Favorites} options={{
                headerTitle: 'Favoritos',
                headerStyle: {
                    backgroundColor: '#FF8000',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                    <HeaderSubPage />
                ),
            }} />

            <AuthStack.Screen name="Help" component={Help} options={{
                headerTitle: 'Central de Ajuda',
                headerStyle: {
                    backgroundColor: '#FF8000',
                },
                headerTintColor: '#fff',
                headerRight: () => (
                    <HeaderSubPage />
                ),
            }} />

            <AuthStack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),
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

function Tabs() {
    return (

        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {
                    backgroundColor: '#FF8000',
                    paddingTop: 5,
                    paddingBottom: 5
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
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderPerson />
                    ),
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="heart" size={size} color={color} />
                    ),

                }}
            />
            <Tab.Screen
                name="Announce"
                component={Announce}
                options={{
                    tabBarLabel: '',
                    tabBarActiveTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderPerson />
                    ),
                    tabBarIcon: ({ size, color, focused }) => (
                        <ButtonNew size={size} color={color} focused={focused} />
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
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="notifications" size={size} color={color} />
                    ),
                    tabBarBadge: 3,
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
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )

}
