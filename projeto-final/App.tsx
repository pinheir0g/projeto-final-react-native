import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import UserProvider from './src/contexts/UserContext';
import ProductProvider from './src/contexts/produtoContext';
import ToastManager from 'toastify-react-native';

export default function App() {

  return (
    <>
      <UserProvider>
        <ProductProvider>
        <NavigationContainer>
          <ToastManager />
          <Routes />
        </NavigationContainer>
        </ProductProvider>
      </UserProvider>
    </>
  );
}