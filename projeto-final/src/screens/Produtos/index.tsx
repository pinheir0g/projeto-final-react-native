import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect } from "react";
import { Produto } from "../../types";
import React from "react";
import { Logo } from "../../components/Logo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Plus from "@expo/vector-icons/Fontisto";
import { ProductContext } from "../../contexts/produtoContext";
import { CardProduto } from "../../components/CardProduto";

const Produtos = ({ navigation }: any) => {
  const { products, getProducts, deleteProduct } = useContext(ProductContext);

  const handleNovoProduto = () => {
    navigation.navigate("CadastroProduto");
  };

  const handleDetalhesProduto = (item: Produto) => {
    navigation.navigate("DetalhesProduto", { produto: item });
  };

  const handleEditProduct = async (product: Produto) => {
    navigation.navigate('CadastroProduto', { produto: product });

  }

  const pcs = products.filter(product => product.categoria === 'PC');
  const monitores = products.filter(product => product.categoria === 'Monitor');
  const cadeiras = products.filter(product => product.categoria === 'Monitor');
  const perifericos = products.filter(product => product.categoria === 'Monitor');

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
        <View style={styles.categoriaPc}>
          <Text style={styles.categoria}>PC</Text>
          <FlatList
            data={pcs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardProduto
                produto={item}
                onPress={() => handleDetalhesProduto(item)}
                onPressDel={() => deleteProduct(item.id)}
                onPressEdit={() => handleEditProduct(item)}
              />
            )}
          />
        </View>
        <View style={styles.categoriaMonitor}>
          <Text style={styles.categoria}>Monitor</Text>
          <FlatList
            data={monitores}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardProduto
                produto={item}
                onPress={() => handleDetalhesProduto(item)}
                onPressDel={() => deleteProduct(item.id)}
                onPressEdit={() => handleEditProduct(item)}
              />
            )}
          />
        </View>
        <Text style={styles.categoria}>PC</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <CardProduto
          produto={item}
          onPress={() => handleDetalhesProduto(item)}
            onPressDel={() => deleteProduct(item.id)}
            onPressEdit={() => handleEditProduct(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Produtos;
