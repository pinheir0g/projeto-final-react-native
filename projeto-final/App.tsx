import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import UserProvider from './src/contexts/UserContext';
import ProductProvider from './src/contexts/produtoContext';
import { Sobre } from './src/screens/Sobre';

export default function App() {

  return (
    <>
     <Sobre />
    </>
  );
}