import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function detalhesProduto() {
  return (
    <View style={styles.container}>
      
      <View style={styles.container1}>
        <Image></Image>
      </View>
      
      <View style={styles.container2}>
        <Image></Image>
      </View>
      
      <View style={styles.container3}>
        <Text>KIT PC GAMER</Text>
      </View>
     
      <View style={styles.container4}>
        <Text>QUANTIDADE</Text>
        <Text> VALOR </Text>
      </View>
      
      <View style={styles.container5}>
        <Text>Descrição</Text>
        <Text>Texto</Text>
      </View>
      
      <View style={styles.container6}>
      <TouchableOpacity style={styles.button}>
        <Text>Deletar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text >Editar</Text>
      </TouchableOpacity>
      </View>
    
    </View>
  );
}
