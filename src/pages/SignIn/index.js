import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [showPass, setShowPass] = useState(false);

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
          value={user}
          onChange={text => setUser(text)}
          style={styles.inputText}
          placeholder="E-mail/Telefone"
        />


        <Ionicons style={styles.IconPass} name="md-lock-closed-outline" size={24} color="black" />
        <TextInput
          value={pass}
          onChange={text => setPass(text)}
          style={styles.inputText}
          secureTextEntry={!showPass}
          placeholder="Senha"
        />
        {showPass ?
          <Ionicons onPress={()=>setShowPass(!showPass)} style={styles.showPass} name="eye-outline" size={24} color="black" />
          :
          <Ionicons onPress={()=>setShowPass(!showPass)} style={styles.showPass} name="eye-off-outline" size={24} color="black" />
        }

        <TouchableOpacity style={styles.buttonEntrar}>
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

        <Text style={{marginTop: 10, color:'#848484'}}>________________________OU________________________</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 115,
    height: 115,
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
    paddingLeft: 40
  },
  buttonEntrar: {
    width: 300,
    height: 50,
    backgroundColor: '#18346D',
    marginTop: 20,
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
