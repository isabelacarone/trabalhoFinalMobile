import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

export default function TimerSettings({ route, navigation }) {
  const { setStudyTime, setBreakTime } = route.params || {};  // Funções para atualizar o estado

  const [studyInput, setStudyInput] = useState(25);  // Padrão de 25 minutos para estudo
  const [breakInput, setBreakInput] = useState(5);   // Padrão de 5 minutos para pausa

  const handleSave = () => {
    setStudyTime(studyInput * 60); // Converte para segundos
    setBreakTime(breakInput * 60); // Converte para segundos
    navigation.goBack();  // Volta para a tela do Timer
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Configurações do Timer</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tempo de Estudo (em minutos):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={studyInput.toString()}
          onChangeText={text => setStudyInput(parseInt(text) || 0)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tempo de Pausa (em minutos):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={breakInput.toString()}
          onChangeText={text => setBreakInput(parseInt(text) || 0)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    color: theme.colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: theme.colors.primary,
    marginBottom: 5,
  },
  input: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
