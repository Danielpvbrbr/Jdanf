import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Promotions from '../pages/Promotions';

import Account from '../pages/Account';

import HeaderPerson from '../components/HeaderPerson';
import HeaderSearch from '../components/HeaderSearch';
import HeaderProfile from '../components/HeaderProfile';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';

const icons = {
    Inicio: {
        name: 'home'
    },
    Categoria: {
        name: 'grid-outline'
    },
    Promoções: {
        name: 'flame-outline'
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
                tabBarActiveTintColor: '#FFF'
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
                name="Categoria"
                component={Category}
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
                name="Promoções"
                component={Promotions}
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
            <AuthStack.Screen name="Tabs" component={Tabs} options={{
                headerShown: false,
            }} />
            <AuthStack.Screen name="SignUp" component={SignUp} options={{

                headerShown: true,
                headerTitle: 'Cadastrar',
            }} />
            <AuthStack.Screen name="SignIn" component={SignIn} options={{
                headerShown: true,
                headerTitle: 'Entrar',
            }} />
             <AuthStack.Screen
                name="ViewProduct"
                component={ViewProduct}
                options={{
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),

                }} />
        </AuthStack.Navigator>
    );
};

