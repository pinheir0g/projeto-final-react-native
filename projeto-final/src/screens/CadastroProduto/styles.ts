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
        width: '100%',
        height: 250,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,

    },
    containerButton:{
        width:380,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:35,
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
    
    form: {
        flex: 0.9,
        width: '90%'
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});