import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/styles'; // 

const PomodoroView = () => {
  const [time, setTime] = useState(25 * 60); 
  const [isActive, setIsActive] = useState(false); 
  const [isBreak, setIsBreak] = useState(false); 

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        if (time === 0) {
          if (!isBreak) {
            setIsBreak(true);
            setTime(5 * 60);
          } else {
            setIsBreak(false);
            setTime(25 * 60); 
          }
        }
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const resetTimer = () => {
    setIsBreak(false);
    setTime(25 * 60); 
    setIsActive(false); 
  };

 return (
    <View style={styles.container}>
      <Text style={styles.textoConometro}>
        {isBreak ? 'Intervalo de Descanso' : 'Tempo de Foco'}
      </Text>
      <Text style={styles.textoConometro}>{formatTime(time)}</Text>
      <View style={styles.botoesConteiner}>
        <TouchableOpacity
          style={styles.botoesMenor}
          onPress={() => setIsActive(!isActive)}
        >
          <Text style={styles.botaoTexto}>
            {isActive ? 'Pausar' : 'Iniciar'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botoesMenor}
          onPress={resetTimer}
        >
          <Text style={styles.botaoTexto}>Resetar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PomodoroView;
