import api from './api';

export const getAllProducts = async () => {
    const { data } = await api.get('/produtos');
    return data
}

export const postProduct = async (newProduct: {}) => {
    const { data } = await api.post('/produtos', newProduct);
    return data;
}

export const deleteProductById = async (productId: string) => {
    const { data } = await api.delete('/produtos/' + productId);
    return data
}

export const updateProduct = async (id: string, product: {}) => {
    const {data} = await api.put("/produtos/" + id, product);
    return data;
} 