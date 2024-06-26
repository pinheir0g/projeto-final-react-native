import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#0F0E0E',
        justifyContent: 'center',
        alignItems: 'center',
    },

    View: {
        flex: 1,
        backgroundColor: '#0F0E0E',
    },
    texto: {
        color: 'white',
        fontSize: 25,
        marginBottom: 5,
    },

    input: {
        height: 40,
        paddingLeft: 15,
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20
    },
    form: {
        flex: 0.9,
        width: '80%',
        marginTop: "1%"
    },

    logo: {
        height: 170,
        width: 235,
        marginTop: "2%",
        position: 'static',
    },

    posicaoBotao: {
        marginBottom: 15,
        backgroundColor: '#0F0E0E'

    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});