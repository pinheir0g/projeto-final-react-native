import { StyleSheet, View, Image, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import { styles } from './styles';
import { Usuario } from "../../types";
import { postUser } from "../../services/usuariosCrud";

export function CadastroUsuario() {

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
    const saveUsuario = async () => {
        const newUser = {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha
        }
        //Add validação dos inputs
        try{
            const user = await postUser(newUser);
            //Colocar msg personalizada de cadastro com sucesso ou erro
        } catch (err) {
            console.log(err)
        };
    }

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
                <Button onPress={saveUsuario} title="Cadastrar Usuario"></Button>
                {/* <TouchableOpacity onPress={} ></TouchableOpacity> */}
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

