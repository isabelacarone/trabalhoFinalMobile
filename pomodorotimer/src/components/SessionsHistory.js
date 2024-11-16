import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../styles/theme';

export default function SessionsHistory() {
  const navigation = useNavigation();
  const [sessions, setSessions] = useState([]);

  // Função para carregar o histórico de sessões do AsyncStorage
  useEffect(() => {
    const loadSessions = async () => {
      try {
        const storedSessions = await AsyncStorage.getItem('@sessions_history');
        if (storedSessions) {
          setSessions(JSON.parse(storedSessions));
        }
      } catch (error) {
        console.error('Erro ao carregar o histórico de sessões:', error);
      }
    };

    loadSessions();
  }, []);

  // Renderiza cada item da lista de sessões
  const renderSessionItem = ({ item, index }) => (
    <View style={styles.sessionItem}>
      <Text style={styles.sessionText}>Sessão {index + 1}:</Text>
      <Text style={styles.sessionText}>Duração: {item.duration} minutos</Text>
      <Text style={styles.sessionText}>Finalizada em: {item.completedAt}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Sessões</Text>

      {sessions.length > 0 ? (
        <FlatList
          data={sessions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderSessionItem}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.noSessionsText}>Nenhuma sessão registrada ainda.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Timer')}>
        <Text style={styles.buttonText}>Voltar para o Timer</Text>
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
  },
  title: {
    fontSize: 32,
    color: theme.colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  noSessionsText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  sessionItem: {
    backgroundColor: theme.colors.secondary,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  sessionText: {
    color: '#fff',
    fontSize: 14,
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
