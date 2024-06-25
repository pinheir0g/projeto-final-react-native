import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import React from 'react';
import UserProvider from './src/contexts/UserContext';
import ProductProvider from './src/contexts/produtoContext';

export default function App() {

  return (
    <>
      <UserProvider>
        <ProductProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        </ProductProvider>
      </UserProvider>
    </>
  );
}