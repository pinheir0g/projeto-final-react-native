import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        flex: 10,
        
        backgroundColor: '#0F0E0E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        paddingHorizontal: 10,
    },
    menuButton: {
        justifyContent: 'flex-start',
        left: 5,
        top: 11,
        backgroundColor: '#FF6E00',
        padding: 5,
        borderRadius: 10
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft:-25,
    },
    categoria: {
        color: 'white',
        fontSize: 24,
        margin: 5
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
    productsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        top: 10,
        width: '95%',

    },
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
});