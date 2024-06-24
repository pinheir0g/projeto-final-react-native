import api from "./api";

export const postUser = async ( newUser: {}) => {
    const { data } = await api.post('/usuario', newUser);
    return data
}