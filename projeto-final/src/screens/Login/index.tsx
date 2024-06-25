import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {login} = useContext(UserContext);

  const logar = async () => {
    try{
      await login(email, password)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      {/* Alinhar a logo */}
        <Image
          style={styles.header}
          source={require("../../../assets/LOGO.png")}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordContainer}>
          {/* Input subir ao abrir teclado */}
          <TextInput
            style={styles.inputPassword}
            placeholder="Senha"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}

          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconButton}
          >
            <Icon
            name={passwordVisible ? "visibility-off" : "visibility"}
            size={24}
            color="gray"
          />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={logar}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
