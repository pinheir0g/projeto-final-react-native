import { createContext, useState } from "react";
import { PropsChildren, Usuario } from "../types";
import { getUsers } from "../services/usuariosCrud";
import { Alert } from "react-native";


type UserCtxData = {
    user: null | Usuario,
    login(email: string, senha: string): Promise<void>,
    logout(): void
    signed: boolean,
}

export const UserContext = createContext<UserCtxData>({} as UserCtxData);

const UserProvider = ({ children }: PropsChildren) => {

    const [user, setUser] = useState<null | Usuario>(null);

    const login = async (email: string, senha: string) => {

        try {
            const dados = await getUsers()

            const authUser = dados.find((element: { email: string; senha: string; }) => {
                return element.email === email && element.senha === senha;
            });

            if (authUser) {
                setUser(authUser);
                Alert.alert('Sucesso', 'Logado com sucesso!');
            } else {
                Alert.alert('Erro', 'Dados inválidos');
            }
        } catch (err) {
            console.log(err)
        }

    }

    const logout = () => {
        setUser(null);
    }


    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                signed: !!user
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider