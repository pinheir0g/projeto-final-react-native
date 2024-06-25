import { View, Image } from "react-native";
import { styles } from "./styles";
import React from "react";
import { ButtonPadrão } from "../../components/Button";

const Inicio = ({ navigation }: any) => {
  const handlePressLogin = () => {
    navigation.navigate("Login");
  };

  const handlePressSignup = () => {
    navigation.navigate("CadastroUsuario");
  };

  return (
    <View style={styles.container}>
      <View/>
      {/* Alinhar a logo */}
      <Image
        style={styles.header}
        source={require("../../../assets/LOGO.png")}
        resizeMode="contain"
      />
      <View style={styles.container2}>
        <ButtonPadrão title={"      Entrar      "} onPress={handlePressLogin} />
      </View>
      <View style={styles.container3}>
        <ButtonPadrão title={"   Cadastrar   "} onPress={handlePressSignup} />
      </View>
    </View>
  );
};

export default Inicio;
