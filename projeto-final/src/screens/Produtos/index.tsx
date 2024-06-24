import { View, Text, Button, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { getAllProducts } from "../../services/produtosCrud";
import { useEffect, useState } from "react";
import { Produto } from "../../types";
import React from "react";
import { Logo } from "../../components/Logo";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Produtos = ({ navigation }: any) => {

    const [products, setProducts] = useState<Produto[]>([]);

    const handleNovoProduto = () => {
        navigation.navigate("CadastroProduto")
    }

    const handleDetalhesProduto = () => {
        navigation.navigate("DetalhesProduto")
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
            <View style={styles.header}>
                <TouchableOpacity onPress={() => toggleDrawer()} style={styles.menuButton}>
                    <SimpleLineIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
            </View>
            <View style={styles.productsContainer}>
                <Text style={styles.categoria}>PC</Text>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity 
                        style={styles.product}
                        onPress={handleDetalhesProduto}
                        >
                            <View >
                                <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
                            </View>
                            <View style={styles.productInfo}>
                                <Text style={styles.title}>{item.nome}</Text>
                                <Text style={styles.quantidade}>{item.quantidade} unidades</Text>
                                <Text style={styles.title}>{item.preco}</Text>
                            </View>
                            <View style={styles.btn}>
                                <Ionicons name="trash-outline" size={28} color="black" />
                                <FontAwesome6 name="edit" size={27} color="black" />
                            </View>
                        </TouchableOpacity>} />
            </View>
            <Button title="Novo Produto" onPress={handleNovoProduto} />
        </View>
    );
};

export default Produtos;