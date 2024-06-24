import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import React from "react";

const Inicio = ({ navigation }: any) => {
  const handlePressLogin = () => {
    navigation.navigate("Login");
  };

  const handlePressSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.status} />
      <Image
        style={styles.header}
        source={require("../../image/image.png")}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={handlePressLogin}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSecond}
          onPress={handlePressSignup}
        >
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Inicio;