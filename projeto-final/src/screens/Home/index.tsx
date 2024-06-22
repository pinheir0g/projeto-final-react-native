import { View, Text, Button } from "react-native";
import { styles } from './styles';


const Home = ({navigation}: any) => {

    const handlePressLogin = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <Button title='Entrar' onPress={() => handlePressLogin()}/>
        </View>
    );
};

export default Home;