import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontWeight:'bold',
        marginBottom:5,
    },

    input: {
        height: 40,
        paddingLeft:15,
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
        alignItems:'flex-start',
        justifyContent:'flex-start',
        height: 200 ,
        width: 300,
        marginTop: "3%",
        position:'static',
    },

    posicaoBotao: {
        bottom: "5%",
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
});