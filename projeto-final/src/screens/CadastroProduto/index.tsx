import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Produto } from "../../types";
import { styles } from "./styles";
import { postProduct } from "../../services/produtosCrud";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Logo } from "../../components/Logo";
import MaskInput, { createNumberMask } from "react-native-mask-input";

const CadastroProduto = () => {
  const [produto, setProduto] = useState<Produto>({
    id: "",
    nome: "",
    descricao: "",
    preco: "",
    quantidade: "",
    imagem: "",
  });
  const [loading, setLoading] = useState(false);

  const realMask = createNumberMask({
    prefix: ["R", "$", ": "],
    delimiter: ".",
    separator: ",",
    precision: 2,
  });

  const handleChange = (name: keyof Produto, value: string) => {
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const saveProduto = async () => {
    const newProduct = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      quantidade: produto.quantidade,
      imagem: produto.imagem,
    };
    if (
      newProduct.nome === "" ||
      newProduct.descricao === "" ||
      newProduct.preco === "" ||
      newProduct.quantidade === "" ||
      newProduct.imagem === ""
    ) {
      Alert.alert("Alerta", "Nenhum campo pode estar vazio!");
      return;
    }
    setLoading(true);
    try {
      const product = await postProduct(newProduct);
      setProduto({
        id: "",
        nome: "",
        descricao: "",
        preco: "",
        quantidade: "",
        imagem: "",
      });
      Alert.alert("Sucesso", "Produto cadastrado com sucesso");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

      if (loading) {
        return <View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator size="large" color="#FF7B17" />
                </View>
      }

  const getImagemFromLibrary = async () => {
    // Pede permissão ao usuário para utilizar as imagens do celular
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Acesso negado!");
      return;
    }

    const image64 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      quality: 1,
    });

    if (!image64.canceled) {
      setProduto({ ...produto, imagem: image64.assets[0].uri });
      console.log(typeof image64.assets[0].uri);
      console.log(image64.assets[0].uri);
    }

  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} disabled={loading}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Logo />
          <View style={styles.form}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput
              style={styles.input}
              value={produto.nome}
              onChangeText={(value) => handleChange("nome", value)}
            />
            <Text style={styles.texto}>Descrição</Text>
            <TextInput
              style={styles.input}
              value={produto.descricao}
              onChangeText={(value) => handleChange("descricao", value)}
            />
            <Text style={styles.texto}>Preço</Text>
            <MaskInput
              value={produto.preco}
              style={styles.input}
              keyboardType="numeric"
              mask={realMask}
              onChangeText={(masked) => {
                handleChange("preco", masked);
              }}
            />
            <Text style={styles.texto}>Quantidade</Text>
            <TextInput
              style={styles.input}
              value={produto.quantidade}
              keyboardType="numeric"
              onChangeText={(value) => handleChange("quantidade", value)}
            />
            <View style={styles.containerFoto}>
              {produto.imagem && (
                <Image
                  source={{ uri: produto.imagem }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              {loading ? (
                <ActivityIndicator size="small" color="#FF6E00" />
              ) : (
                <TouchableOpacity onPress={getImagemFromLibrary}>
                  <Text style={styles.textoImg}>Selecionar imagem +</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={saveProduto}>
            <Text style={styles.textoImg}>Cadastrar Produto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CadastroProduto;
