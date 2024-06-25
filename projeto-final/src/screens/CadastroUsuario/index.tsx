import { View, Image, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { styles } from './styles';
import { Usuario } from "../../types";
import { UserContext } from "../../contexts/UserContext";
import { CadastroProdutoProps } from "../../routes/stack";

export function CadastroUsuario({navigation}: CadastroProdutoProps) {

    const { saveUsuario } = useContext(UserContext);

    const [usuario, setUsuario] = useState<Usuario >({
            id: "",
            nome: "",
            email: "",
            senha: ""
})
    const handleChange = (name: keyof Usuario, value: string) => {
        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    const saveUser = async () => {
        const newUser = {
            ...usuario
        }
        try{
            const savedUser = await saveUsuario(newUser);
            console.log(savedUser);
            navigation.navigate('Login');
            Alert.alert('Sucesso', 'Usuario cadastrado com sucesso.')
            setUsuario({ 
                id: "",
                nome: "",
                email: "",
                senha: ""
            });

        }catch(err){
            console.log(err)
        };
    };


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Image
                style={styles.logo} resizeMode='stretch'
                source={require('../../../assets/LOGO.png')}
            />
            <View style={styles.form}>
                <Text style={styles.texto}>Nome</Text>
                    <TextInput
                    value={usuario.nome}
                    style={styles.input}
                    onChangeText={(value) => handleChange("nome", value)}
                    />
                <Text style={styles.texto}>Email</Text>
                    <TextInput
                    value={usuario.email}
                    style={styles.input}
                    onChangeText={(value) => handleChange("email", value)}
                    />
                <Text style={styles.texto}>Senha</Text>
                    <TextInput
                    value={usuario.senha}
                    style={styles.input}
                    onChangeText={(value) => handleChange("senha", value)}
                    />
                {/* Adicionar validação de confirmar senha */}
                <Text style={styles.texto}>Confirmar senha</Text>
                    <TextInput
                    style={styles.input}
                    />
            </View>
            <View style={styles.posicaoBotao}>
                <Button onPress={saveUser} title="Cadastrar Usuario"></Button>
                {/* <TouchableOpacity onPress={} ></TouchableOpacity> */}
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

