import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Produtos } from '../../types';
import { styles } from './styles';
import { saveProduct } from '../../services/produtosCrud';

const CadastroProduto = () => {

    const [produto, setProduto] = useState<Produtos>({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
        quantidade: '',
        imagem: ''
    })

    const handleChange = (name: keyof Produtos, value: string) => {
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
            console.log(product)
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
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
                <Button title="Cadastrar Produto" onPress={saveProduto} />
            </View>
        </View>
    );
};

export default CadastroProduto;