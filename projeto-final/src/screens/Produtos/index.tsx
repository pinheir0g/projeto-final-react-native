import {View, Text, Button} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {styles} from './styles';
import {ProdutoProps } from "../../routes/stack";

const Produtos = ({navigation}: ProdutoProps) => {

    const handleNovoProduto = () => {
        navigation.navigate("CadastroProduto")
    } 

    return (
        <View style={styles.container} >
            <Text style={styles.texto}>Hello, World!</Text>
            <Button title="Novo Produto" onPress={handleNovoProduto}/>
        </View>
    );
};

export default Produtos;