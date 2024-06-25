import {
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  ActivityIndicator,

} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Usuario } from "../../types";
import { postUser } from "../../services/usuariosCrud";
import { ButtonPadrão } from "../../components/Button";

export function CadastroUsuario() {

  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const [usuario, setUsuario] = useState<Usuario>({
    id: "",
    nome: "",
    email: "",
    senha: "",
  });
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
      senha: usuario.senha,
    };

    //Add validação dos inputs
    setLoading(true)
    try {
      const user = await postUser(newUser);
      setUsuario({
        id: "",
        nome: "",
        email: "",
        senha: "",
      });
      Alert.alert("Sucesso", "Usuario Criado.");
      //Colocar msg personalizada de cadastro com sucesso ou erro
    } catch (err) {
      Alert.alert("Erro", "Não foi possivel.");
      console.log(err);
    }
    setLoading(false);
  };

  const limparInputs = () => {};

  if (loading) {
    return <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#FF7B17" />
            </View>
  }
    
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} disabled={loading}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="stretch"
          source={require("../../../assets/LOGO.png")}
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
          <TextInput style={styles.input} />
        </View>
        <View style={styles.posicaoBotao}>
          <ButtonPadrão
            title={"Cadastrar Usuario"}
            onPress={() => {
              saveUsuario();
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
