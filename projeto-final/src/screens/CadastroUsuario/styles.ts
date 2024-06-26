import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0E0E',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Scrolada: {
        flex: 1,
        backgroundColor: "#0F0E0E"
    },

    View: {
        flex: 1,
        backgroundColor: '#0F0E0E',
    },
    texto: {
        color: 'white',
        fontSize: 15,
        marginBottom:5,
    },

    input: {
        height: 30,
        paddingLeft:15,
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    form: {
        flex: 0.9,
        width: '80%',
        marginTop: "1%"
    },

    logo: {
        alignItems:'flex-start',
        justifyContent:'flex-start',
        height: 170 ,
        width: 235,
        marginTop: "2%",
        position:'static',
    },

    posicaoBotao: {
        height: "10%" ,
        width: "100%",
        bottom: "3%",
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});