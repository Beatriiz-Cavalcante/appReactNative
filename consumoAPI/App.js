// useState: é um hook utilizado para gerenciar o estado em componentes funcionais
// do React.Ele permite que você adicione estado local a um componente, permitindo
// que o componente mantenha e atualize dinamicamente dados ao longo do tempo.

// useEffect: é um hook que permite realizar efeitos colaterais em componentes
// funcionais.Efeitos colaterais podem incluir, por exemplo, buscar dados de uma API,
// atualizar o DOM, ou inscrever / desinscrever eventos.

import React, { useState, useEffect } from 'react';
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const App = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de localização não concedida', 'Por favor, conceda permissão de localização para obter a localização.');
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    })();
  }, []);

  const handleSearch = async () => {
    if (cep.length !== 8) {
      Alert.alert('Erro', 'Digite um CEP válido com 8 dígitos.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
      } else {
        setAddress(response.data);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível buscar o CEP. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={(text) => setCep(text)}
      />
       <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar CEP</Text>
      </TouchableOpacity>

      {address && (
        <View style={styles.result}>
          <Text>CEP: {address.cep}</Text>
          <Text>Logradouro: {address.logradouro}</Text>
          <Text>Bairro: {address.bairro}</Text>
          <Text>Cidade: {address.localidade}</Text>
          <Text>Estado: {address.uf}</Text>
        </View>
      )}

      {location && (
        <View style={styles.locationContainer}>
          <Text style={styles.title}>Sua Localização</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Sua Localização"
            />
          </MapView>
          <View style={styles.locationCoords}> 
          <Text style={styles.locationCoord}>Latitude: {location.coords.latitude}</Text>
          <Text style={styles.locationCoord}>Longitude: {location.coords.longitude}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#6880A3',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#1F2D4D',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#1F2D4D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  locationContainer: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: 300,
  },
  result: {
    marginVertical: 20,
    alignItems: 'center',
  },
  locationCoords:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  locationCoord: {
    color:'white',
    fontSize: 16,
    marginTop: 10,
  }
})
