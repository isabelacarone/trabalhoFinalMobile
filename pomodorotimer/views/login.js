import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles'; 

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await AsyncStorage.getItem('users');
        if (users === null) {
          const defaultUsers = JSON.stringify([{ username: 'admin', password: 'senha' }]);
          await AsyncStorage.setItem('users', defaultUsers);
        }
      } catch (error) {
        console.error('Falha para carregar os usuários', error);
      }
    };

    loadUsers();
  }, []);

  const handleLogin = async () => {
    try {
      const users = JSON.parse(await AsyncStorage.getItem('users'));
      const user = users.find(user => user.username === usuario && user.password === senha);
      if (user) {
        setMensagem('Autenticação bem-sucedida. Redirecionando...');
        navigation.navigate('PomodoroView'); // Redireciona para a tela Pomodoro
      } else {
        setMensagem('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Falha de login', error);
    }
  };

  const handleAddUser = async () => {
    try {
      const users = JSON.parse(await AsyncStorage.getItem('users'));
      users.push({ username: usuario, password: senha });
      await AsyncStorage.setItem('users', JSON.stringify(users));
      setMensagem('Usuário adicionado com sucesso');
      setUsuario('');
      setSenha('');
    } catch (error) {
      console.error('Falha para adicionar usuário', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.botaoLoginAdicionar} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoLoginAdicionar} onPress={handleAddUser}>
          <Text style={styles.botaoTexto}>Adicionar Usuário</Text>
        </TouchableOpacity>
      </View>
      <View>
        {mensagem !== '' ? (<Text>{mensagem}</Text>) : (<Text></Text>)}
      </View>
    </View>
  );
}
