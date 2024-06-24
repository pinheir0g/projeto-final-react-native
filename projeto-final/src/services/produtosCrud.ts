import api from './api';

export const getAllProducts = async () => {
    const { data } = await api.get('/produtos');
    return data
}

export const saveProduct = async (newProduct: {}) => {
    const { data } = await api.post('/produtos', newProduct);
    return data;
}

export const deleteProduct = async (productId: string) => {
    const { data } = await api.delete('/produtos/' + productId);
    return data
}