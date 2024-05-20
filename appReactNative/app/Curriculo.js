import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function Curriculo() {

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Minha formação</Text>
      <Text style={styles.texto}>Sou estudante de Análise e desenvolvimento de sistemas pelo
      programa Embarque Digital. Atualmente estou no terceiro período do faculdade.
      Abaixo deixarei o link para acesso do meu github, linkedin e currículo</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto: {
    width: 350,
    marginTop: 20,
    fontSize: 15,
  },
});
