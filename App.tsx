import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RoutesMapping from './src/Navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/Hooks/useAuth';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <RoutesMapping />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
