import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ListNavigation from '../../components/ListNavigation';

export default function Account() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ListNavigation rota="Purchase" title="Minhas Compras" set="Visualizar" icon="md-cart" typeIcon="Ionicons" />
      <ListNavigation rota="MyStore" title="Meus Anúncios" set="Visualizar" icon="store" typeIcon="MaterialCommunityIcons" />
      <ListNavigation rota="Help" title="Central de ajuda" set={false} icon="md-help-circle-outline" typeIcon="Ionicons" />
      <ListNavigation rota="Settings" title="Configuração" set={false} icon="settings-outline" typeIcon="Ionicons" />
    </SafeAreaView>
  );
};
