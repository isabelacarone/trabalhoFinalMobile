import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard } from 'react-native';
import theme from '../styles/theme';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setErrorMessage('');
    try {
      const response = await fetch(`https://6732862d2a1b1a4ae1102d5f.mockapi.io/users?username=${username}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];
        if (user.password === password) {
          Keyboard.dismiss(); // Fecha o teclado
          navigation.navigate('Timer');
        } else {
          setErrorMessage('Senha incorreta, tente novamente.');
        }
      } else {
        setErrorMessage('Esse usuário ainda não está cadastrado.');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar com a API.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Pomodoro</Text>
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        value={username} 
        onChangeText={setUsername} 
        returnKeyType="next" 
        onSubmitEditing={() => Keyboard.dismiss()} // Avança para o próximo campo
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
        returnKeyType="done" 
        onSubmitEditing={handleLogin} // Chama o login ao pressionar Enter
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
  errorText: {
    color: theme.colors.primary,
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    width: '80%', 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
  },
});
