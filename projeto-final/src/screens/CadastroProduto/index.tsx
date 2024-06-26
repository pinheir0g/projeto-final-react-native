import { useContext, useEffect, useState } from "react";
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
import { Toast } from "toastify-react-native";
import { Produto } from "../../types";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Logo } from "../../components/Logo";
import MaskInput, { createNumberMask } from "react-native-mask-input";
import { ButtonPadrão } from "../../components/Button";
import { CadastroProdutoProps } from "../../routes/stack";
import { ProductContext } from "../../contexts/produtoContext";

const CadastroProduto = ({ navigation, route }: CadastroProdutoProps) => {

  const { saveProduct, editProduct } = useContext(ProductContext);

  const [produto, setProduto] = useState<Produto>({
    id: '',
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    categoria: '',
    imagem: '',
  });
  const props = route.params;
  const [loading, setLoading] = useState(false);

  const realMask = createNumberMask({
    prefix: ["R", "$", ": "],
    delimiter: ".",
    separator: ",",
    precision: 2,
  });


    const showToasts = () => {
      Toast.info('Promised is resolved','center')
    }


  const handleChange = (name: keyof Produto, value: string) => {
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const saveProduto = async () => {
    const newProduct = {
      ...produto
    }
    if (newProduct.nome === '' || newProduct.descricao === '' || newProduct.categoria === '' || newProduct.quantidade === '' || newProduct.preco === '' || newProduct.imagem === '') {
      Alert.alert('Alerta', "Nenhum campo pode estar vazio!");
      return;
    }

    setLoading(true);
    try {
      if (produto.id) {
        editProduct(newProduct);
        Alert.alert('Sucesso', 'Produto Editado com sucesso');
        navigation.navigate('Produtos')
      } else {
        saveProduct(newProduct);
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso');
      }
      setProduto({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
        quantidade: '',
        categoria: '',
        imagem: ''

      });
    } catch (err) {
      console.log(err)
    };
    setLoading(false)
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
      Alert.alert('Login Invalido', "Acesso negado!");
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
    }
  };

  useEffect(() => {
    if (props?.produto) {
      setProduto(props.produto)
    }
  }, [props])

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
            <Text style={styles.texto}>Categoria</Text>
            <TextInput
              style={styles.input}
              value={produto.categoria}
              onChangeText={(value) => handleChange("categoria", value)}
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
        <View style={styles.containerButton}>
          {produto.id ?
            <ButtonPadrão title={"Salvar"} onPress={saveProduto} /> : (
              <ButtonPadrão title={"Cadastrar Produto"} onPress={saveProduto} />
            )}
        </View>
      </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CadastroProduto;
