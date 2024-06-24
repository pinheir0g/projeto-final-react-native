import { StyleSheet, View, Image, Text, TextInput, Button } from "react-native";
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
        try{
            const user = await postUser(newUser);
            console.log(user)
        } catch (err) {
            console.log(err)
        };
    }

    return (
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
    );
}

