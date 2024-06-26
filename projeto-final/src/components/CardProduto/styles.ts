import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    imagemProduto:{
        width: 100, 
        height: 100, 
        borderRadius: 15 
    },
    product: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 15,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        borderRadius: 20,
        gap: 10,
        marginBottom: "5%"

    },
    productInfo: {
        flex: 1,
    },
    btn: {
        flex: 0.23,
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