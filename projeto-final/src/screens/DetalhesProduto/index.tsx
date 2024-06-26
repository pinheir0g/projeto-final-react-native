import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { ButtonPadrão } from "../../components/Button";
import { DetalhesProdutoProps } from "../../routes/stack";

export default function DetalhesProduto({route}:DetalhesProdutoProps) {
  
  const props = route.params.produto;
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.logo}
          source={require("../../../assets/LOGO.png")}
        ></Image>
      </View>

      <View style={styles.container2}>
        <Image style={styles.imagemPrincipal} source={{uri:props.imagem}}></Image>
      </View>

      <View style={styles.container3}>
        <Text style={styles.titulo}>{props.nome}</Text>
      </View>

      <View style={styles.container4}>
        <Text style={styles.texto}>QUANTIDADE:{props.quantidade}</Text>
        <Text style={styles.texto}> {props.preco} </Text>
      </View>

      <View style={styles.container5}>
        <Text style={styles.titulo2}>Descrição</Text>
        <Text style={styles.texto}>{props.descricao}</Text>
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
