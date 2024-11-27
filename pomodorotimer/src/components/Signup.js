import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      // Verificando se o usuário já existe
      setErrorMessage('Iniciando');
      const response = await fetch(`https://6732862d2a1b1a4ae1102d5f.mockapi.io/users?username=${username}`);  
      const users = await response.json();

      if (response.ok) {
        Alert.alert('Erro', 'Usuário já cadastrado!');
      } else {
        // Criando o novo usuário na API
        await fetch('https://6732862d2a1b1a4ae1102d5f.mockapi.io/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com a API.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Usuário" 
        value={username} 
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Já tem conta?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
          Faça login
        </Text>
      </Text>
      <Text>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  linkText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
