import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import theme from '../styles/theme';

export default function SessionsHistory() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Sessões</Text>
      <Button 
        title="Voltar para o Timer" 
        color={theme.colors.primary} 
        onPress={() => navigation.navigate('Timer')} 
      />
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
  },
});
