import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/routes/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackComponent/>
    </NavigationContainer>
   
  );
}