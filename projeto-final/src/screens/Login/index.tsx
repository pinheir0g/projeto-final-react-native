import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
// import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForgotPassword = () => {
    Linking.openURL(
      "https://accounts.google.com/v3/signin/recoveryidentifier?flowName=GlifWebSignIn&dsh=S-468861486%3A1719091558731211&ddm=0"
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require("../../image/image.png")}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
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
          {/* <Icon
            name={passwordVisible ? "visibility-off" : "visibility"}
            size={24}
            color="gray"
          /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.password}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
