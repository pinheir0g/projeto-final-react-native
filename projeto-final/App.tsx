import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import React from 'react';
import UserProvider from './src/contexts/UserContext';

export default function App() {

  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UserProvider>
    </>
  );
}