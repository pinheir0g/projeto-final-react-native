import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/routes/stack';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import React from 'react';
import DetalheProduto from './src/screens/DetalhesProduto';

export default function App() {
  return (
     <NavigationContainer>
       <StackComponent/>
     </NavigationContainer> 
  );
}