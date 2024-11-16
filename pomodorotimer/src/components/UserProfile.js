import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

export default function UserProfile() {
  const navigation = useNavigation();

  // Dados fictícios para ilustrar o perfil
  const user = {
    name: "Random User",
    email: "email@email.com",
    profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
    studySessions: 45,
    totalStudyTime: 1230, // em minutos
    breakSessions: 15,
    totalBreakTime: 300, // em minutos
  };

  // Formatação do tempo (em minutos para exibição)
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />

      {/* Nome do usuário */}
      <Text style={styles.name}>{user.name}</Text>
      
      {/* Email do usuário */}
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.statsContainer}>
        {/* Sessões de estudo */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Sessões de Estudo</Text>
          <Text style={styles.statValue}>{user.studySessions}</Text>
        </View>

        {/* Tempo total de estudo */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Tempo Total de Estudo</Text>
          <Text style={styles.statValue}>{formatTime(user.totalStudyTime)}</Text>
        </View>

        {/* Sessões de pausa */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Sessões de Pausa</Text>
          <Text style={styles.statValue}>{user.breakSessions}</Text>
        </View>

        {/* Tempo total de pausa */}
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Tempo Total de Pausa</Text>
          <Text style={styles.statValue}>{formatTime(user.totalBreakTime)}</Text>
        </View>
      </View>

      {/* Botão para voltar */}
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
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 20,
  },
  statsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
