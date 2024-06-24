import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#000000',
    },
    texto: {
        color: 'white',
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
        width: '80%'
    },
});