import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

export default function SessionsHistory() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Histórico de Sessões</Text>

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
