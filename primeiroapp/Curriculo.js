import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Curriculo() {
  const openLinkedin = () => {
    Linking.openURL("https://www.linkedin.com/in/beatriz-cavalcante-554542271/");
  };
  const openGithub = () => {
    Linking.openURL("https://github.com/Beatriiz-Cavalcante");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Minha formação</Text>
      <Text style={styles.texto}>Sou estudante de Análise e desenvolvimento de sistemas pelo
      programa Embarque Digital. Atualmente estou no terceiro período do faculdade.
      Abaixo deixarei o link para acesso do meu github, linkedin e currículo</Text>
      <View style={styles.btns}>
      <TouchableOpacity onPress={openLinkedin} style={styles.btn}><Text style={styles.textbtn}>Meu linkedin</Text></TouchableOpacity>
      <TouchableOpacity onPress={openGithub} style={styles.btn}><Text style={styles.textbtn}>Meu Github</Text></TouchableOpacity>
      </View>
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
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#2196F2',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textbtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  btns: {
    flexDirection: 'row',
    marginTop: 20,
  }
});
