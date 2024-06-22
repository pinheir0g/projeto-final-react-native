import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Produtos from "../screens/Produtos";
import CadastroProduto from "../screens/CadastroProduto";

type StackNavigation = {
    Home: undefined;
    Login: undefined;
    Produtos: undefined;
    CadastroProduto: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export type ProdutoProps = NativeStackScreenProps<StackNavigation, 'Produtos'>
export type CadastroProdutoProps = NativeStackScreenProps<StackNavigation, 'CadastroProduto'>

const {Navigator, Screen} = createNativeStackNavigator<StackNavigation>()

const StackComponent = () => {
    return(
        <Navigator>
            {/* <Screen name='Home' component={Home} options={{title: "Inicio Page"}}/> */}
            {/* <Screen name='Login' component={Login} options={{title: "Login Page"}}/> */}
            <Screen name='Produtos' component={Produtos} options={{title: 'Produtos'}}/>
            <Screen name='CadastroProduto' component={CadastroProduto} options={{title: 'Cadastro Produto'}}/>
        </Navigator>
    );
};

export default StackComponent;