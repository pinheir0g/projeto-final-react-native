import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Inicio";
import Login from "../screens/Login";

type StackNavigation = {
    Inicio: undefined;
    Login: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export type HomeProps = NativeStackScreenProps<StackNavigation, "Inicio">
export type LoginProps = NativeStackScreenProps<StackNavigation, 'Login'>


const {Navigator, Screen} = createNativeStackNavigator<StackNavigation>()

const StackComponent = () => {
    return(
        <Navigator>
            <Screen name='Inicio' component={Home} options={{title: "Inicio Page"}}/>
            <Screen name='Login' component={Login} options={{title: "Login Page"}}/>
        </Navigator>
    );
};

export default StackComponent;