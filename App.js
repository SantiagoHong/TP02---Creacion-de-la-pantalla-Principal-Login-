import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

export default function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const asset = require('./assets/cocacola.png');
  function handlePress(){
    if(username != "Santiago" || password != "Hong1234"){
      setError(true)
    } else {
      setError(false)
    }
    return error
  }
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={[styles.container, {flexDirection: 'column'}  ]}>
        <View style={styles.header}>
          <Text style={{color: 'white', fontSize: 22, marginBottom: 10, fontWeight: '500'}}>Login App (Hong, Choe)</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', flexGrow: 1.5}}>
          <Image style={[styles.image, {resizeMode: 'cover'}]} source={asset} />
        </View>
        <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
          <View>
            {(error === true) ? (
              <Text style={styles.wrongText}>Usuario o contraseña incorrectos, vuelva a intentar</Text>
            ) : error === false ? (
              <Text style={styles.correctText}>Usuario loggeado</Text>
            ) : null}

          </View>

          <Text style={styles.linkText}>Olvidaste la clave?</Text>
          <Text style={styles.linkText}>Crear Cuenta</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F1F0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 350,
    borderColor: '#8E5DFB',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  image: {
    height: 180,
    width: 350,
    marginBottom: 30,
    marginTop: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8E5DFB',
    padding: 12,
    width: 350,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
  },
  linkText: {
    marginTop: 15,
    fontWeight: '500',
  },
  header: {
    flex: 1,
    backgroundColor: '#612FFC',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 0.5,
  },
  wrongText: {
    marginTop: 15,
    fontWeight: '500',
    color: 'red'
  },
  correctText: {
    marginTop: 15,
    fontWeight: '500',
    color: 'green'
  }
});
