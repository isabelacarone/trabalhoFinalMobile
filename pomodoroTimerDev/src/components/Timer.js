import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação
import theme from '../styles/theme';

export default function Timer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutos em segundos
  const [isRunning, setIsRunning] = useState(false);
  const navigation = useNavigation(); // Hook de navegação

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <Button
        title={isRunning ? "Pausar" : "Iniciar"}
        color={theme.colors.primary}
        onPress={() => setIsRunning(!isRunning)}
      />
      <Button
        title="Reiniciar"
        color={theme.colors.accent}
        onPress={() => {
          setSeconds(1500);
          setIsRunning(false);
        }}
      />
      <View style={styles.footer}>
        <Button
          title="Configurações"
          color={theme.colors.primary}
          onPress={() => navigation.navigate('TimerSettings')}
        />
        <Button
          title="Histórico"
          color={theme.colors.primary}
          onPress={() => navigation.navigate('SessionsHistory')}
        />
        <Button
          title="Perfil"
          color={theme.colors.primary}
          onPress={() => navigation.navigate('UserProfile')}
        />
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
  },
  timer: {
    fontSize: 48,
    color: theme.colors.primary, // Cronômetro em vermelho
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
