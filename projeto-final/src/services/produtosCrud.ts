import { Toast } from 'toastify-react-native';
import api from './api';

export const getAllProducts = async () => {
    const { data } = await api.get('/produtos');
    return data
}

export const postProduct = async (newProduct: {}) => {
    try {
    const { data } = await api.post('/produtos', newProduct);
    Toast.success("Produto adicionado com sucesso!");
    return data;
} catch (error) {
    Toast.error("Erro ao adicionar o produto.", "center");
    throw error;
}
}

export const deleteProductById = async (productId: string) => {
    try{
    const { data } = await api.delete('/produtos/' + productId);
    Toast.success("Produto deletado com sucesso!", "center")
    return data;
    } catch (error) {
        Toast.error("Erro ao deletar o produto.", "center");
        throw error;
    }
}

export const updateProduct = async (id: string, product: {}) => {
    const {data} = await api.put("/produtos/" + id, product);
    return data;
}