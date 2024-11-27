import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../styles/theme';

export default function Timer({ route }) {
  const { studyTime = 1500, breakTime = 300 } = route.params || {}; // Padrão para 25 min e 5 min
  const [studySeconds, setStudySeconds] = useState(studyTime); // Tempo de estudo
  const [breakSeconds, setBreakSeconds] = useState(breakTime); // Tempo de pausa
  const [isStudyRunning, setIsStudyRunning] = useState(false); // Controle do cronômetro de estudo
  const [isBreakRunning, setIsBreakRunning] = useState(false); // Controle do cronômetro de pausa
  const navigation = useNavigation();

  useEffect(() => {
    let interval = null;

    // Inicia o cronômetro
    if (isStudyRunning || isBreakRunning) {
      interval = setInterval(() => {
        if (isStudyRunning && studySeconds > 0) {
          setStudySeconds(prevSeconds => prevSeconds - 1);
        }
        if (isBreakRunning && breakSeconds > 0) {
          setBreakSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval); // Limpa o intervalo se não houver nenhum cronômetro em execução
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [isStudyRunning, isBreakRunning, studySeconds, breakSeconds]);

  // Função para salvar a sessão no AsyncStorage
  const saveSession = async (type, duration) => {
    try {
      const newSession = {
        type, // Tipo de sessão (Estudo ou Pausa)
        duration, // Duração inicial em minutos
        completedAt: new Date().toLocaleString(), // Data/hora da ativação
      };

      const storedSessions = await AsyncStorage.getItem('@sessions_history');
      const sessions = storedSessions ? JSON.parse(storedSessions) : [];
      sessions.push(newSession);

      await AsyncStorage.setItem('@sessions_history', JSON.stringify(sessions));
    } catch (error) {
      console.error('Erro ao salvar a sessão:', error);
    }
  };

  // Formatação do tempo
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  // Iniciar/pausar o cronômetro de estudo
  const toggleStudyTimer = () => {
    if (studySeconds > 0 && !isStudyRunning) {
      saveSession('Estudo', studyTime / 60); // Salva a sessão no início
    }
    setIsStudyRunning(!isStudyRunning);
  };

  // Iniciar/pausar o cronômetro de pausa
  const toggleBreakTimer = () => {
    if (breakSeconds > 0 && !isBreakRunning) {
      saveSession('Pausa', breakTime / 60); // Salva a sessão no início
    }
    setIsBreakRunning(!isBreakRunning);
  };

  // Reiniciar os cronômetros
  const resetTimers = () => {
    setStudySeconds(studyTime);
    setBreakSeconds(breakTime);
    setIsStudyRunning(false);
    setIsBreakRunning(false);
  };

  return (
    <View style={styles.container}>
      {/* Cronômetro de Estudo */}
      <Text style={styles.timer}>{formatTime(studySeconds)}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleStudyTimer}>
        <Text style={styles.buttonText}>{isStudyRunning ? "Pausar Estudo" : "Iniciar Estudo"}</Text>
      </TouchableOpacity>

      {/* Cronômetro de Pausa */}
      <Text style={styles.timer}>{formatTime(breakSeconds)}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleBreakTimer}>
        <Text style={styles.buttonText}>{isBreakRunning ? "Pausar Pausa" : "Iniciar Pausa"}</Text>
      </TouchableOpacity>

      {/* Botão Reiniciar */}
      <TouchableOpacity style={styles.button} onPress={resetTimers}>
        <Text style={styles.buttonText}>Reiniciar Cronômetros</Text>
      </TouchableOpacity>

      {/* Botões no Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('TimerSettings', { studyTime, breakTime })}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('SessionsHistory')}
        >
          <Text style={styles.buttonText}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('UserProfile')}
        >
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
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
    color: theme.colors.primary,
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 12,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
