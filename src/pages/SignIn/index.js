import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import styles from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={require('../../assets/logo/logopvshoppe.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.areaLogin}>
        <Ionicons style={styles.IconUser} name="person-outline" size={24} color="black" />
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputText}
          placeholder="E-mail/Telefone"
        />


        <Ionicons style={styles.IconPass} name="md-lock-closed-outline" size={24} color="black" />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputText}
          secureTextEntry={!showPass}
          placeholder="Senha"
        />
        {showPass ?
          <Ionicons onPress={() => setShowPass(!showPass)} style={styles.showPass} name="eye-outline" size={24} color="black" />
          :
          <Ionicons onPress={() => setShowPass(!showPass)} style={styles.showPass} name="eye-off-outline" size={24} color="black" />
        }

        <TouchableOpacity style={styles.buttonEntrar} onPressIn={() => signIn(email, password)}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.areaReg}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Esqueceu senha?</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 10, color: '#848484' }}>________________________OU________________________</Text>

        <TouchableOpacity style={styles.buttonEntrar}>
          <Image
            source={require('../../assets/logo/google/google.png')}
            resizeMode="contain"
            style={styles.logoGoogle}
          />
          <Text style={styles.textButton}>Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEntrar}>
          <Image
            source={require('../../assets/logo/facebook/facebook.png')}
            resizeMode="contain"
            style={styles.logoFacebook}
          />
          <Text style={styles.textButton}>Continuar com Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

