import React, { useState, useContext, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';

import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';


export default function SignIn() {
  const {
    sendCode,
    verifyCode,
    setPhoneNumber,
    phoneNumber,
    firebaseConfig,
    showCod,
    setShowCod,
    verificationId,
    setVerificationCode,
    recaptchaVerifier,
    loading
  } = useContext(AuthContext);

  const attemptInvisibleVerification = false;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />

      <View style={styles.areaLogin}>
        {!showCod ?
          <>
            <Ionicons style={styles.IconPhone} name="call-outline" size={24} color="black" />
            <TextInput
              value={phoneNumber}
              style={styles.inputText}
              autoFocus
              autoCompleteType="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              placeholder="Digite seu numero, EX: +55 99999999999"
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
              maxLength={15}
            />

            <TouchableOpacity style={styles.buttonEntrar} onPress={() => sendCode()}>
              <Text style={styles.textButton}>Próximo</Text>
            </TouchableOpacity>
          </> : <View />

        }

        {showCod ?
          <>
            <Text style={{ fontSize: 11 }} >Digite o codigo recebido por sms no numero
              <Text
                onPress={() => setShowCod(false)}
                style={{ color: 'blue' }}
              >  {phoneNumber}</Text>
            </Text>

            <Ionicons style={styles.IconVerify} name="chatbox-ellipses-outline" size={24} color="black" />
            <TextInput
              style={styles.inputText}
              autoFocus
              textContentType="telephoneNumber"
              placeholder="123456"
              editable={!!verificationId}
              onChangeText={setVerificationCode}
              maxLength={6}
            />

            <TouchableOpacity disabled={!verificationId} style={styles.buttonEntrar} onPress={() => verifyCode()}>
              {loading ?
                <ActivityIndicator size="small" color="#FF0" />
                :
                <Text style={styles.textButton}>Verificar</Text>
              }

            </TouchableOpacity>

          </> : <View />

        }

        <Text style={{ marginTop: 20, color: '#848484' }}>________________________OU________________________</Text>

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
      <Text style={styles.termo}>Ao se inscrever, você concorda com os
        <Text onPress={() => alert('Termo')} style={{ color: 'blue' }}>Termos de serviço</Text> &
        <Text onPress={() => alert('Politica')} style={{ color: 'blue' }}>Política de privacidade</Text> da PvShopee</Text>
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
  IconVerify: {
    position: 'absolute',
    top: 47,
    left: 8
  },
  IconPhone: {
    position: 'absolute',
    top: 33,
    left: 8
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
  termo: {
    fontSize: 11,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 45,
    marginTop: 10
  }
});
