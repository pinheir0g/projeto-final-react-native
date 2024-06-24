import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    View: {
        flex: 1,
        backgroundColor: '#000000',
    },
    texto: {
        color: 'white',
        fontSize: 18
    },

    input: {
        height: 33,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    form: {
        flex: 0.9,
        width: '80%',
        marginTop: "8%"
    },

    logo: {
        height: "23%",
        width: '63%',
        marginTop: "3%"
    },
    posicaoBotao: {
        bottom: "5%",
        backgroundColor: "white"
    }
});