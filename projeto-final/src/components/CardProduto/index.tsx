import React, { useState } from 'react'
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import { Produto } from '../../types';
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


type cardProps = { 
    onPress: ()=> void;
    onPressDel: (item: Produto)=> void;
    onPressEdit: (item: Produto)=> void;
    produto: Produto;
}

export const CardProduto = ({onPress, onPressDel, onPressEdit,  produto}: cardProps) => {
    return (
        <TouchableOpacity
              style={styles.product}
              onPress={onPress}
            >
              <View>
                <Image
                  source={{ uri: produto.imagem }}
                  style={styles.imagemProduto}
                />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.title}>{produto.nome}</Text>
                <Text style={styles.quantidade}>
                  {produto.quantidade} unidades
                </Text>
                <Text style={styles.title}>{produto.preco}</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity onPress={() => onPressEdit(produto)}>
                  <FontAwesome6 name="edit" size={27} color="black" />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressDel(produto)}>
                  <Ionicons name="trash-outline" size={28} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
    );
};