import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import React = require('react');
import { CadastroUsuario } from './src/screens/CadastroUsuario';


export default function App() {

  return (
    <>
      {/* <NavigationContainer>
        <Routes/>
     </NavigationContainer> */}
     <CadastroUsuario/>
    </>
   
  );
}