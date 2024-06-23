import { View, Text, Button, FlatList, Image, ActivityIndicator } from "react-native";
import { styles } from './styles';
import { getAllProducts } from "../../services/produtosCrud";
import { useEffect, useState } from "react";
import { Produto } from "../../types";
import React from "react";
import { Logo } from "../../components/Logo";

const Produtos = ({ navigation }: any) => {

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

      const toggleDrawer = () => {
        navigation.toggleDrawer();
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <View style={styles.container} >
            <Button title="Toggle Drawer" onPress={toggleDrawer} />
            <Logo/>

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