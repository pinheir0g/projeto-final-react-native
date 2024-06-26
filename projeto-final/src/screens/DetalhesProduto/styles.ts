import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        flex: 10,
        backgroundColor: "#0F0E0E",
    },

    container1: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container2: {
        flex: 4,
        backgroundColor: '#fff',
        width: '100%',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },

    container3: {
        flex: 1,
        alignItems: 'center',

    },

    container4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '5%',
        width: '90%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBlockColor: '#fff',
    },

    container5: {
        flex: 2.2,
        marginLeft: '5%',
        width: '90%',
    },

    container6: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        marginBottom: '3%',
    },
    imagemPrincipal:{
        flex:1,
        height:'50%',
        width:'70%',
    },
    button:{
        backgroundColor: '#FF6E00',
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 80,
        top: 10,
        paddingLeft: 40,
        paddingRight: 40,
    },

    titulo: {
        marginTop: 10,
        fontSize: 50,
        color: '#FF7B17',
    },
    titulo2: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: '3%',
    },
    texto: {
        color: '#fff',
        marginTop: '3%',
    },
    logo: {
        width: 80,
        height: 50,

    },

})