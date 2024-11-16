import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Timer from './src/components/Timer';
import Break from './src/components/Break';
import SessionsHistory from './src/components/SessionsHistory';
import TimerSettings from './src/components/TimerSettings';
import UserProfile from './src/components/UserProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="Break" component={Break} />
        <Stack.Screen name="SessionsHistory" component={SessionsHistory} />
        <Stack.Screen name="TimerSettings" component={TimerSettings} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
