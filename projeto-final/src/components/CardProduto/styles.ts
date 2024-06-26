import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    product: {
        width: 400,
        padding: 15,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent:'space-around',
        borderRadius: 20,
        gap: 10,
    },

    imagemProduto: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    productInfo: {
        width: '50%',
    },
    btn: {
        width: 30,
        justifyContent: 'space-between'
    },
    title: {
        color: 'black',
        fontSize: 24,
        margin: 5
    },
    quantidade: {
        color: 'black',
        fontSize: 12,
        margin: 5
    },
})