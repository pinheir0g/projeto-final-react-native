import { StyleSheet, View, Image, Text, TextInput, Button } from "react-native";
import React from "react";
import { styles } from './styles';

export function CadastroUsuario() {
    return (
        <View style={styles.container}>
            <Image
            style={styles.logo} resizeMode='stretch'
            source={require('../../../assets/LOGO.png')}
            />
            <View style={styles.form}>
                <Text style={styles.texto}>Username</Text>
                    <TextInput
                    style={styles.input}
                    />
                <Text style={styles.texto}>Email</Text>
                    <TextInput
                    style={styles.input}
                    />
                <Text style={styles.texto}>Senha</Text>
                    <TextInput
                    style={styles.input}
                    />
                <Text style={styles.texto}>Confirmar senha</Text>
                    <TextInput
                    style={styles.input}
                    />
            </View>
            <View style={styles.posicaoBotao}>
                <Button title="Cadastrar Usuario" ></Button>
                {/* <TouchableOpacity onPress={} ></TouchableOpacity> */}
            </View>
        </View>
    );
}

