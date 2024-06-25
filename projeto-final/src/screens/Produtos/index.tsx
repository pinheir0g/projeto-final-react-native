import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useContext, useEffect} from "react";
import { Produto } from "../../types";
import React from "react";
import { Logo } from "../../components/Logo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Plus from "@expo/vector-icons/Fontisto";
import { ProductContext } from "../../contexts/produtoContext";

const Produtos = ({ navigation }: any) => {

  const { products, getProducts, deleteProduct } = useContext(ProductContext);


  const handleNovoProduto = () => {
    navigation.navigate("CadastroProduto");
  };

  const handleDetalhesProduto = (item:Produto) => {
    navigation.navigate("DetalhesProduto",{produto:item});
  };

  const handleEditProduct = async (product: Produto) => {
    navigation.navigate('CadastroProduto', { produto: product });

  }

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(() => {
    getProducts();

  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => toggleDrawer()}
            style={styles.menuButton}
          >
            <SimpleLineIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Logo />
          <TouchableOpacity
            onPress={handleNovoProduto}
            style={styles.menuButton}
          >
            <Plus name="plus-a" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productsContainer}>
        <Text style={styles.categoria}>PC</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.product}
              onPress={() => handleDetalhesProduto(item)}
            >
              <View>
                <Image
                  source={{ uri: item.imagem }}
                  style={styles.imagemProduto}
                />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.quantidade}>
                  {item.quantidade} unidades
                </Text>
                <Text style={styles.title}>{item.preco}</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity onPress={() => handleEditProduct(item)}>
                  <FontAwesome6 name="edit" size={27} color="black" />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteProduct(item.id)}>
                  <Ionicons name="trash-outline" size={28} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Produtos;
