import { DrawerNavigationProp, DrawerScreenProps, createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { AuthStackNavigation, ProdutosStack } from "./stack";
import CustomDrawerContent from "../screens/CustomDrawer";


type DrawerNavigation = {
    Nome: undefined;
    Produtos: undefined;
    Pc: undefined;
    Monitor: undefined;
    Perifericos: undefined;
    Cadeira: undefined;
    Equipe: undefined;
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>
export type HomeProps = DrawerScreenProps<DrawerNavigation, 'Produtos'>
export type PcProps = DrawerScreenProps<DrawerNavigation, 'Pc'>
export type MonitorProps = DrawerScreenProps<DrawerNavigation, 'Monitor'>
export type PerifericosProps = DrawerScreenProps<DrawerNavigation, 'Perifericos'>
export type CadeiraProps = DrawerScreenProps<DrawerNavigation, 'Cadeira'>
export type EquipeProps = DrawerScreenProps<DrawerNavigation, 'Equipe'>

const {Navigator, Screen} = createDrawerNavigator<DrawerNavigation>()

const DrawerComponent = () => {
    return (
        <Navigator drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
            drawerActiveTintColor: '#FF7B17',
            drawerInactiveTintColor: 'white',
            drawerLabelStyle: {
                fontFamily: 'System',
            },
        }}
        >
        <Screen
                name='Produtos'
                component={ProdutosStack}
                options={{title: "• Produtos",
                headerShown: false}}
                />
            <Screen
                name='Monitor'
                component={ProdutosStack}
                options={{title: "• Monitor",
                headerShown: false}}
                />
            <Screen
                name='Perifericos'
                component={ProdutosStack}
                options={{title: "• Perifericos",
                headerShown: false}}
                />
            <Screen
                name='Cadeira'
                component={ProdutosStack}
                options={{title: "• Cadeira",
                headerShown: false}}
                />
            <Screen
                name='Equipe'
                component={AuthStackNavigation}
                options={{title: "Equipe",
                headerShown: false}}
                />
        </Navigator>
    );
};

export default DrawerComponent