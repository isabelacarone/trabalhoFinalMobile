import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../styles/theme';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Pomodoro</Text>
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Timer')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 32,
    color: theme.colors.primary,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginBottom: 12,
    width: '80%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    width: '80%', // Garantindo que o botão tenha uma largura adequada
    alignItems: 'center', // Centraliza o texto no botão
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
  },
});
