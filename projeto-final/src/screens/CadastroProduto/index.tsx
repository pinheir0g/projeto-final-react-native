import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Produto } from '../../types';
import { styles } from './styles';
import { saveProduct } from '../../services/produtosCrud';
import * as ImagePicker from 'expo-image-picker'


const CadastroProduto = () => {

    const [produto, setProduto] = useState<Produto>({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
        quantidade: '',
        imagem: ''
    })
    
    // const [image, setImage] = useState('');

    const handleChange = (name: keyof Produto, value: string) => {
        setProduto({
            ...produto,
            [name]: value
        });
    };

    const saveProduto = async () => {
        const newProduct = {
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
            quantidade: produto.quantidade,
            imagem: produto.imagem
        }
        try {
            console.log("URI IMG ANTES DE SALVAR: " + newProduct.imagem)
            const product = await saveProduct(newProduct);
            console.log("URI IMG DEPOIS DE SALVAR: " + product.imagem)

            setProduto({
                id: '',
                nome: '',
                descricao: '',
                preco: '',
                quantidade: '',
                imagem: ''

            });
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso');
        } catch (err) {
            console.log(err)
        }
    }
    

    const getImagemFromLibrary = async () => {
        // Ask the user for the permission to access the library
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
            setProduto({...produto, imagem: image64.assets[0].uri})
            console.log(typeof(image64.assets[0].uri))
            console.log((image64.assets[0].uri))
            //   UsuarioService.atualizarFoto(user, image64.assets[0].uri).then((resp) => {
            //     if (typeof resp == "object") {
            //       user.avatar_url = resp[0].avatar_url;
            //       signIn(user);
            //       setImage(user.avatar_url);
            //     }
            //   });
            //   setImage(image64.assets[0].uri);
            //   setVisibleModalFoto(false);
        }
    };

    return (
        <View>
             <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
                <Text>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={produto.nome}
                    onChangeText={(value) => handleChange('nome', value)}
                />
                <Text>Descrição</Text>
                <TextInput
                    style={styles.input}
                    value={produto.descricao}
                    onChangeText={(value) => handleChange('descricao', value)}
                />
                <Text>Preço</Text>
                <TextInput
                    style={styles.input}
                    value={produto.preco}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange('preco', value)}
                />
                <Text>Quantidade</Text>
                <TextInput
                    style={styles.input}
                    value={produto.quantidade}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange('quantidade', value)}
                />
                {produto.imagem && <Image source={{ uri: produto.imagem }} style={{ width: 200, height: 200 }} />}

                <Button title="Adicionar imagem" onPress={getImagemFromLibrary} />
                <Button title="Cadastrar Produto" onPress={saveProduto} />
            </View>
        </TouchableWithoutFeedback>
        </View>
    );
};

export default CadastroProduto;

// const anexarImagem = async () => {
//     // Ask the user for the permission to access the camera
//     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("Acesso negado!");
//       return;
//     }

//     const image64 = await ImagePicker.launchCameraAsync();

//     if (!image64.canceled) {
//       UsuarioService.atualizarFoto(user, image64.assets[0].uri).then((resp) => {
//         if (typeof resp == "object") {
//           user.avatar_url = resp[0].avatar_url;
//           signIn(user);
//           setImage(user.avatar_url);
//         }
//       });
//       setImage(image64.assets[0].uri);
//       setVisibleModalFoto(false);
//     }
//   };

//   const getImagemFromLibrary = async () => {
//     // Ask the user for the permission to access the library
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("Acesso negado!");
//       return;
//     }

//     const image64 = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       aspect: [4, 4],
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!image64.canceled) {
//       UsuarioService.atualizarFoto(user, image64.assets[0].uri).then((resp) => {
//         if (typeof resp == "object") {
//           user.avatar_url = resp[0].avatar_url;
//           signIn(user);
//           setImage(user.avatar_url);
//         }
//       });
//       setImage(image64.assets[0].uri);
//       setVisibleModalFoto(false);
//     }
//   };