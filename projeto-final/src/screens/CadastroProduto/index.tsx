import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { Produto } from '../../types';
import { styles } from './styles';
import { saveProduct } from '../../services/produtosCrud';
import * as ImagePicker from 'expo-image-picker'
import React from 'react';
import { Logo } from '../../components/Logo';


const CadastroProduto = () => {

    const [produto, setProduto] = useState<Produto>({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
        quantidade: '',
        imagem: ''
    })

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
            const product = await saveProduct(newProduct);
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
            setProduto({ ...produto, imagem: image64.assets[0].uri })
            console.log(typeof (image64.assets[0].uri))
            console.log((image64.assets[0].uri))
        }
    };


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Logo />
                    <View style={styles.form}>
                        <Text style={styles.texto}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            value={produto.nome}
                            onChangeText={(value) => handleChange('nome', value)}
                        />
                        <Text style={styles.texto}>Descrição</Text>
                        <TextInput
                            style={styles.input}
                            value={produto.descricao}
                            onChangeText={(value) => handleChange('descricao', value)}
                        />
                        <Text style={styles.texto}>Preço</Text>
                        <TextInput
                            style={styles.input}
                            value={produto.preco}
                            keyboardType="numeric"
                            onChangeText={(value) => handleChange('preco', value)}
                        />
                        <Text style={styles.texto}>Quantidade</Text>
                        <TextInput
                            style={styles.input}
                            value={produto.quantidade}
                            keyboardType="numeric"
                            onChangeText={(value) => handleChange('quantidade', value)}
                        />
                        {produto.imagem && <Image source={{ uri: produto.imagem }} style={{ width: 200, height: 200 }} />}
                        <TouchableOpacity onPress={getImagemFromLibrary}>
                            <Text style={styles.texto}>Adicionar imagem</Text>
                        </TouchableOpacity>

                        <Button title="Cadastrar Produto" onPress={saveProduto} />
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

export default CadastroProduto;
