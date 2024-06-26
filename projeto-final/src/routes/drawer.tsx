import {
  DrawerNavigationProp,
  DrawerScreenProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import { ProdutosStack } from "./stack";
import CustomDrawerContent from "../screens/CustomDrawer";
import { Sobre } from "../screens/Sobre";


type DrawerNavigation = {
    Inicio: { categoria: string };
    Equipe: undefined;
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>
export type HomeProps = DrawerScreenProps<DrawerNavigation, 'Inicio'>
export type EquipeProps = DrawerScreenProps<DrawerNavigation, 'Equipe'>

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigation>()

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
                name='Inicio'
                component={ProdutosStack}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name='Equipe'
                component={Sobre}
                options={{
                    title: "Equipe",
                    headerShown: false
                }}
            />
        </Navigator>
    );
};

export default DrawerComponent;
