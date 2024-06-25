import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import {styles} from './styles'

type buttonProps = {
    title: string;
    onPress: ()=> void;
}

export const ButtonPadrão = ({title, onPress}: buttonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.texto}>{title}</Text>
        </TouchableOpacity>
    );
}