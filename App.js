
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';

import foto from './assets/foto.png';

import Ionicons from '@expo/vector-icons/Ionicons';

import Card from './components/Card';

export default function App() {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {

      case "linkedin":
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/luana94')
        break
      case "github":
        Alert.alert('Meu Github', 'https://github.com/luanasqz')
        break
      case "facebook":
        Alert.alert('Meu Facebook', 'https://web.facebook.com/luanasqueiroz')
        break

    }
  }
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>Luana Sodário Queiroz</Text>
          <Text style={styles.funcao}>Dev Mobile</Text>
          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Ionicons name="logo-github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Ionicons name="logo-facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Ionicons name="logo-linkedin" size={30} />
            </TouchableOpacity>

          </View>
        </View>

        <Card titulo= "Formação Acadêmica">
                    <Text style={styles.card_content_text}>Ciencia da computação</Text>
                    <Text style={styles.card_content_text}>Logica de Programação</Text>
                    <Text style={styles.card_content_text}>Video aulas</Text>
        </Card>

        <Card titulo= "Experiência Profissional">
                    <Text style={styles.card_content_text}>Programação</Text>
                    <Text style={styles.card_content_text}>Lógica</Text>
                    <Text style={styles.card_content_text}>Aluna na Dio</Text>
        </Card>
      
      


      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center'
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50

  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 125

  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10

  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  },



});
