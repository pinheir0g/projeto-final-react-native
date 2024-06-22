import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './src/routes/stack';
import Produtos from './src/screens/Produtos';

export default function App() {
  return (

    // <Produtos/>
    <NavigationContainer>
      <StackComponent/>
    </NavigationContainer>
   
  );
}