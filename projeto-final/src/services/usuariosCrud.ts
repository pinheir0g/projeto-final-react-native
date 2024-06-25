import api from "./api";

export const postUser = async (newUser: {}) => {
    const { data } = await api.post('/usuario', newUser);
    return data;
}

export const getUsers = async () => {
    const { data } = await api.get('/usuario');
    return data;
}
