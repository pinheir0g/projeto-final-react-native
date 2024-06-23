import { DrawerNavigationProp, DrawerScreenProps, createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ProdutosStack } from "./stack";

type DrawerNavigation = {
    Inicio: undefined;
}

const {Navigator, Screen} = createDrawerNavigator<DrawerNavigation>()

const DrawerComponent = () => {
    return (
        <Navigator>
            <Screen name='Inicio' component={ProdutosStack} options={{title: "Inicio", headerShown: false}} />
        </Navigator>
    );
}

export default DrawerComponent