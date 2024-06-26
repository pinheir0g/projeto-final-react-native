import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { ButtonPadrão } from "../../components/Button";
import { DetalhesProdutoProps } from "../../routes/stack";
import { ProductContext } from "../../contexts/produtoContext";
import { Produto } from "../../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function DetalhesProduto({
  route,
  navigation,
}: DetalhesProdutoProps) {
  const { deleteProduct } = useContext(ProductContext);

  const handleEditProduct = (product: Produto) => {
    navigation.navigate("CadastroProduto", { produto: product });
  };
  const props = route.params.produto;

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.logo}
          source={require("../../../assets/LOGO.png")}
        ></Image>
      </View>

      <View style={styles.container2}>
        <Image
          style={styles.imagemPrincipal}
          source={{ uri: props.imagem }}
        ></Image>
      </View>

      <View style={styles.container3}>
        <Text style={styles.titulo}>{props.nome}</Text>
      </View>

      <View style={styles.container4}>
        <Text style={styles.texto}>QUANTIDADE:{props.quantidade}</Text>
        <Text style={styles.texto}> {props.preco} </Text>
      </View>

      <View style={styles.container5}>
        <Text style={styles.titulo2}>Descrição</Text>
        <Text style={styles.texto}>{props.descricao}</Text>
      </View>

      <View style={styles.container6}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEditProduct(props)}
        >
          <FontAwesome6 name="edit" size={27} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            deleteProduct(props.id);
            navigation.navigate("Produtos");
          }}
        >
          <Ionicons name="trash-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
