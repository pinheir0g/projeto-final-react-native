import { View, Text } from "react-native";
import { styles } from './styles';


const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Hello, World!</Text>
        </View>
    );
};

export default Home;