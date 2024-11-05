import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import theme from '../styles/theme';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 

  const handleSignup = () => {
    // Implementar lógica de cadastro
    console.log('Cadastro:', username, password);
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
    width: '80%', // Alinhamento com o campo de entrada
    alignItems: 'center', // Centraliza o texto no botão
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
