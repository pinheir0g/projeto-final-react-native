import { View, Text, Button, FlatList, Image } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { styles } from './styles';
import { ProdutoProps } from "../../routes/stack";
import { getAllProducts } from "../../services/produtosCrud";
import { useEffect, useState } from "react";
import { Produto } from "../../types";

const Produtos = ({ navigation }: ProdutoProps) => {

    const [products, setProducts] = useState<Produto[]>([]);

    const handleNovoProduto = () => {
        navigation.navigate("CadastroProduto")
    }

    const getProducts = async () => {
        try {
            const products = await getAllProducts()
            setProducts(products)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.texto}>Hello, World!</Text>

            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View>
                        <Text style={styles.texto}>Produto: {item.nome}</Text>
                        <Text style={styles.texto}>Descrição: {item.descricao}</Text>
                        <Text style={styles.texto}>Preço: {item.preco}</Text>
                        <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
                        <Text style={styles.texto}>Imagem URI: {item.imagem}</Text>
                        <Image source={{uri: item.imagem}} style={{ width: 200, height: 200 }} />
                    </View>} />
            <Button title="Novo Produto" onPress={handleNovoProduto} />
        </View>
    );
};

export default Produtos;