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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },
    categoria: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    productsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        top: 10,
        width: '95%',

    },
    categoriaPc: {
        backgroundColor: 'yellow'
    },
    categoriaMonitor:{
        backgroundColor: 'green'
    },
});