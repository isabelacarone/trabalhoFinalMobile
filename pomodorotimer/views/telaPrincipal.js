// screens/TelaPrincipal.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/styles'; // ajuste o caminho conforme necessário

export default function TelaPrincipal({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Login'); // Volta para a tela de login
  };

  return (
    <View style={styles.container}>
      <View style={styles.botaoVoltar}>
        <TouchableOpacity style={styles.botao} onPress={handleLogout}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Cronômetro pomodoro</Text>
      <Text style={styles.temporizador}>25:00</Text>
      
      <View style={styles.botoesContainer}>
        <View style={styles.botao}>
          <Text style={styles.botaoTexto}>Iniciar</Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.botaoTexto}>Pausar</Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.botaoTexto}>Redefinir</Text>
        </View>
      </View>
    </View>
  );
}
