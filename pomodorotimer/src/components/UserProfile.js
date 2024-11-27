import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

export default function UserProfile() {
  const navigation = useNavigation();

  const user = {
    name: "Random User",
    email: "email@email.com",
    profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
    studySessions: 45,
    totalStudyTime: 1230,
    breakSessions: 15,
    totalBreakTime: 300,
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Timer')}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Sessões de Estudo</Text>
          <Text style={styles.statValue}>{user.studySessions}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Tempo Total de Estudo</Text>
          <Text style={styles.statValue}>{formatTime(user.totalStudyTime)}</Text>
        </View>
      </View>
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
    width: 80,
    height: 80,
    borderRadius: 40,
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
    alignItems: 'center',
  },
  statBox: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    width: '90%',
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
});
