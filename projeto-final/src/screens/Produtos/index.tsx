import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
  const cadeiras = products.filter(product => product.categoria === 'Cadeira');
  const perifericos = products.filter(product => product.categoria === 'Perifericos');

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderCategoria = (title: string, item: Produto[]) => {
    return (
      <View style={styles.categoriaContainer}>
        <Text style={styles.categoria}>{title}</Text>
        <View style={styles.productsContainer}>
          <FlatList
            data={item}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardProduto
                produto={item}
                onPress={() => handleDetalhesProduto(item)}
                onPressDel={() => deleteProduct(item.id)}
                onPressEdit={() => handleEditProduct(item)}
              />
            )}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 20}}/>}
            ListFooterComponent={() => <View style={{width: 20}}/>}
            ListHeaderComponent={() => <View style={{width: 20}}/>}
          />
        </View>
      </View>
    );
  };

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
      <ScrollView contentContainerStyle={styles.scrollView}>
        {pcs && renderCategoria('PC', pcs)}
        {monitores && renderCategoria('Monitor', monitores)}
        {perifericos && renderCategoria('Periféricos', perifericos)}
        {cadeiras && renderCategoria('Cadeiras', cadeiras)}
      </ScrollView>
    </View>
  );
};

export default Produtos;
