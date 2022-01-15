import React from 'react';
import { TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Promotions from '../pages/Promotions';
import Notifications from '../pages/Notifications';
import Account from '../pages/Account';

import HeaderPerson from '../components/HeaderPerson';
import HeaderSearch from '../components/HeaderSearch';
import HeaderProfile from '../components/HeaderProfile';
import HeaderSubPage from '../components/HeaderSubPage';

import Purchase from '../subpage/Purchase';
import About from '../subpage/About';
import Evaluation from '../subpage/Evaluation';
import Favorites from '../subpage/Favorites';
import Help from '../subpage/Help';
import Indications from '../subpage/Indications';
import Settings from '../subpage/Settings';
import Cart from '../subpage/Cart';
import Profile from '../subpage/Profile';
import ViewProduct from '../subpage/ViewProduct';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

const icons = {
    Inicio: {
        name: 'home'
    },
    stack: {
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
};

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
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: 'Carinho de Compras',
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
                name="About"
                component={About}
                options={{
                    headerTitle: 'Sobre',
                    headerStyle: {
                        backgroundColor: '#FF8000',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderSubPage />
                    ),
                }} />
            <AuthStack.Screen
                name="Evaluation"
                component={Evaluation}
                options={{
                    headerTitle: 'Minhas Avaliação',
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
            <AuthStack.Screen name="Indications" component={Indications} options={{
                headerTitle: 'Indicar um Amigo',
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
                tabBarActiveTintColor: '#fff'
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
                    tabBarBadge: 3
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
