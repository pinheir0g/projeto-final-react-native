import React from "react";
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Produtos from "../screens/Produtos";
import CadastroProduto from "../screens/CadastroProduto";
import DetalhesProduto from "../screens/DetalhesProduto";
import { CadastroUsuario } from "../screens/CadastroUsuario";
import { Produto } from "../types";
import Splash from "../animacao/splash";

type StackNavigation = {
    Home: undefined;
    Login: undefined;
    Produtos: undefined;
    CadastroProduto: {produto: Produto};
    DetalhesProduto: {produto: Produto};
    CadastroUsuario: undefined;
    animacao: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export type ProdutoProps = NativeStackScreenProps<StackNavigation, 'Produtos'>
export type CadastroProdutoProps = NativeStackScreenProps<StackNavigation, 'CadastroProduto'>
export type DetalhesProdutoProps = NativeStackScreenProps<StackNavigation, 'DetalhesProduto'>

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>()

export const ProdutosStack = () => {
    return (
        <Navigator>
            <Screen name='Produtos' component={Produtos} options={{ title: 'Produtos', headerShown: false,}} />
            <Screen name='CadastroProduto' component={CadastroProduto} options={{ title: 'Cadastro Produto', }} />
            <Screen name='DetalhesProduto' component={DetalhesProduto} options={{ title: 'Detalhes Produto', }} />
        </Navigator>
    );
};

export const AuthStackNavigation = () => {
    return(
    <Navigator>
       <Screen name="animacao" component={Splash} />
        <Screen name="Home" component={Home} options={{ headerShown: false,}} />
        <Screen name="Login" component={Login} />
        <Screen name="CadastroUsuario" component={CadastroUsuario}/>
    </Navigator>
    );
;}