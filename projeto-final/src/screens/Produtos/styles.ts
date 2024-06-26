import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F0E0E',
        height: '100%'
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
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    productsContainer: {
        width: '100%',
        justifyContent: 'center'
    },
    scrollView: {
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 30
    },
    
    categoriaContainer: {
        marginVertical: 5,
    },
});