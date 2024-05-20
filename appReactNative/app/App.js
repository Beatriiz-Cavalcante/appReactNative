import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Curriculo from './Curriculo';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Olá, sou Beatriz Cavalcante</Text>
      <Image source={require('./assets/selfie.png')} style={styles.image} />
      <Text style={styles.texto}>Esse é o meu primeiro projeto com React Native. É aquela coisa sofrendo e aprendendo hihi.</Text>
      <Text style={styles.texto2}>Me acompanhe nessa jornada!</Text>
      <Button title="Sobre mim" onPress={() => navigation.navigate('Curriculo')} style={styles.btn} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Curriculo" component={Curriculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  nome: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  texto: {
    width: 350,
    marginTop: 20,
    fontSize: 15,
  },
  texto2: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20,
  },
});
