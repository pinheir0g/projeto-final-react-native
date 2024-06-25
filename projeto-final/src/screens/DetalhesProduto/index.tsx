import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ButtonPadrão } from "../../components/Button";

export default function DetalhesProduto() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.logo}
          source={require("../../../assets/LOGO.png")}
        ></Image>
      </View>

      <View style={styles.container2}>
        <Image></Image>
        <Text>Alo</Text>
      </View>

      <View style={styles.container3}>
        <Text style={styles.titulo}>KIT PC GAMER</Text>
      </View>

      <View style={styles.container4}>
        <Text style={styles.texto}>QUANTIDADE</Text>
        <Text style={styles.texto}> VALOR </Text>
      </View>

      <View style={styles.container5}>
        <Text style={styles.titulo2}>Descrição</Text>
        <Text style={styles.texto}>Texto</Text>
      </View>

      <View style={styles.container6}>
        <ButtonPadrão
          title={"Deletar"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonPadrão
          title={"Editar"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>
    </View>
  );
}
