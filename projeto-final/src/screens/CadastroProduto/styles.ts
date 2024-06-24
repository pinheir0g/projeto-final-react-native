import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0E0E",
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#0F0E0E",
    },
    texto: {
        color: 'white',
        fontSize: 25

    },
    containerFoto: {
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
        height: 250,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,

    },
    containerButton:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    textoImg: {
        color: 'black',
        fontSize: 25
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    button: {
        width:'60%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF7B17',
        borderRadius: 10,
    },
    form: {
        flex: 0.9,
        width: '90%'
    },
});