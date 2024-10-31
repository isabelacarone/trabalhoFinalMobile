import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './views/login';  // Tela de Login
import PomodoroView from './views/pomodoroView';  // Tela de Pomodoro

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="PomodoroView" component={PomodoroView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
