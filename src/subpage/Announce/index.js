import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';

import Imoveis from '../../components/AreaAnnounce_/Imoveis';
import AutosPecas from '../../components/AreaAnnounce_/AutosPecas';
import ModaBeleza from '../../components/AreaAnnounce_/ModaBeleza';
import ParaSuaCasa from '../../components/AreaAnnounce_/ParaSuaCasa';
import Eletronicos from '../../components/AreaAnnounce_/Eletronicos';
import Servicos from '../../components/AreaAnnounce_/Servicos';
import Esportes from '../../components/AreaAnnounce_/Esportes';
import Vagas from '../../components/AreaAnnounce_/Vagas';
import Musica from '../../components/AreaAnnounce_/Musica';
import Infatis from '../../components/AreaAnnounce_/Infatis';
import Animais from '../../components/AreaAnnounce_/Animais';

export default function Announce() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [component, setComponent] = useState();
  const [CEP, setCEP] = useState([]);
  const [price, setPrice] = useState();
  const [CEP_DATA, setCEP_DATA] = useState([]);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const { addProduct, clearVelue } = useContext(AuthContext);


  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage1(result.uri);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };

  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage3(result.uri);
    }
  };


  const handleSubmit = (imageArray) => {
    addProduct()
    addProduct({
      title,
      price,
      description,
      category,
      date: format(new Date(), 'dd/MM/yyyy'),
      hour: format(new Date(), 'HH:mm'),
      address: {
        bairro: CEP_DATA.bairro,
        cep: CEP_DATA.cep,
        localidade: CEP_DATA.localidade,
        logradouro: CEP_DATA.logradouro,
        uf: CEP_DATA.uf,
      },
      imagens: [
        image1,
        image2,
        image3
      ]
    });
  };

  useEffect(() => {
    const getCEP = async () => {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
        setCEP_DATA(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCEP()

  }, [CEP]);


  function getCategory(item) {
    clearVelue();
    setCategory(item);
    if (item) {
      switch (item) {
        case 'Imóveis':
          return setComponent(<Imoveis AuthContext={AuthContext} />)
        case 'Autos e peças':
          return setComponent(<AutosPecas />)
        case 'Moda e beleza':
          return setComponent(<ModaBeleza AuthContext={AuthContext} />)
        case 'Para sua casa':
          return setComponent(<ParaSuaCasa />)
        case 'Eletrônicos':
          return setComponent(<Eletronicos AuthContext={AuthContext} />)
        case 'Vagas':
          return setComponent(<Vagas AuthContext={AuthContext} />)
        case 'Serviços':
          return setComponent(<Servicos AuthContext={AuthContext} />)
        case 'Música':
          return setComponent(<Musica />)
        case 'Esportes':
          return setComponent(<Esportes />)
        case 'Animais':
          return setComponent(<Animais />)
        case 'Infatis':
          return setComponent(<Infatis AuthContext={AuthContext} />)
        default:
          <Text />
      };
    };

  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.containImage}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.areaImage} onPress={pickImage1} onLongPress={() => setImage1(null)}>
              {
                image1 ?
                  <Image source={{ uri: image1 }} style={styles.image} resizeMode="contain" />
                  :
                  <>
                    <Ionicons name="camera" size={30} color="#18346D" />
                    <Text>Adicionar foto</Text>
                  </>
              }
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaImage} onPress={pickImage2} onLongPress={() => setImage2(null)}>
              {
                image2 ?
                  <Image source={{ uri: image2 }} style={styles.image} resizeMode="contain" />
                  :
                  <>
                    <Ionicons name="camera" size={30} color="#18346D" />
                    <Text>Adicionar foto</Text>
                  </>
              }
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaImage} onPress={pickImage3} onLongPress={() => setImage3(null)}>
              {
                image3 ?
                  <Image source={{ uri: image3 }} style={styles.image} resizeMode="contain" />
                  :
                  <>
                    <Ionicons name="camera" size={30} color="#18346D" />
                    <Text>Adicionar foto</Text>
                  </>
              }
            </TouchableOpacity>

          </ScrollView>
        </View>

        <View style={styles.areaText}>
          <Text style={styles.textTitle}>Título do anúncio: *</Text>
          <TextInput
            onChangeText={title => setTitle(title)}
            value={title}
            style={styles.inputTitle}
            maxLength={70}
            placeholder='Ex: Monitor semi novo'
          />

          <Text style={styles.textTitle}>Descrição: </Text>
          <TextInput
            onChangeText={desc => setDescription(desc)}
            value={description}
            multiline={true}
            numberOfLines={4}
            // maxLength={1000}
            style={styles.inputDesc}
            placeholder='Ex: Monitor acer modelo V22HQL semi novo.
          monitor pouco usado e funcionando 100%.
          Tem os cabos, saida VGA e DVI'
          />

          <Text style={styles.textTitle}>Categoria: *</Text>

          <View style={styles.picker}>
            <Picker
              selectedValue={category}
              mode='dialog'
              prompt="Selecione a categoria do produto"
              onValueChange={(itemValue, itemIndex) => {
                getCategory(itemValue)
              }
              }>
              <Picker.Item label="Para sua casa" value="Para sua casa" />
              <Picker.Item label="Imóveis" value="Imóveis" />
              <Picker.Item label="Autos e peças" value="Autos e peças" />
              <Picker.Item label="Moda e beleza" value="Moda e beleza" />
              <Picker.Item label="Eletrônicos" value="Eletrônicos" />
              <Picker.Item label="Vagas" value="Vagas" />
              <Picker.Item label="Serviços" value="Serviços" />
              <Picker.Item label="Música" value="Música" />
              <Picker.Item label="Esportes" value="Esportes" />
              <Picker.Item label="Animais" value="Animais" />
              <Picker.Item label="Infatis" value="Infatis" />
            </Picker>
          </View>

          <View style={styles.containCepCod}>

            <View style={styles.areaCond}>
              <Text style={styles.textTitle}>CEP: *</Text>
              <TextInput
                onChangeText={cep => setCEP(cep)}
                value={CEP}
                style={styles.inputCep}
                maxLength={8}
                placeholder='CEP'
                keyboardType="numeric"
              />
            </View>

            <View style={styles.areaCond}>
              <Text style={styles.textTitle}>{category === 'Vagas' ? 'Salário' : 'Price'} </Text>
              <TextInput
                onChangeText={cep => setPrice(cep)}
                value={price}
                style={styles.inputCep}
                maxLength={8}
                placeholder='99,99'
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={styles.textResCep}>{CEP_DATA.localidade} - {CEP_DATA.uf} </Text>
          {component}

          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <MaterialIcons name="publish" size={18} color="#FFF" />
            <Text style={styles.textSubmit}>Publicar Anúncio</Text>
            <MaterialIcons name="publish" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

