import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0F0E0E',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },

    header:{
        width: "100%",
        height: 200,
        marginVertical: 10
    },

    input:{
        width: "80%",
        height: 70,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 60,
        paddingHorizontal: 30,
        marginVertical: 10,
        fontWeight: "condensedBold",
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },

    inputPassword: {
        width: "100%",
        height: 70,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 60,
        paddingHorizontal: 30,
        marginVertical: 10,
        fontWeight: "condensedBold",
        paddingRight: 50,
    },

    iconButton: {
        position: "absolute",
        right: 20,
        top: 30
    },

    link: {
        width: "75%",
        textDecorationLine: 'underline',
        color: "white",
    },

    button:{
        width: "50%",
        height: 60,
        backgroundColor: "#FF7B17",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },

    text:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }

})