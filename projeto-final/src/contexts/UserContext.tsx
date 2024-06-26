import { createContext, useState } from "react";
import { PropsChildren, Usuario } from "../types";
import { getUsers, postUser } from "../services/usuariosCrud";


type UserCtxData = {
  user: null | Usuario;
  login(email: string, senha: string): Promise<boolean>;
  logout(): void;
  signed: boolean;
  saveUsuario(usuario: Usuario): Promise<void>;
};

export const UserContext = createContext<UserCtxData>({} as UserCtxData);

const UserProvider = ({ children }: PropsChildren) => {
  const [user, setUser] = useState<null | Usuario>(null);

  const login = async (email: string, senha: string) => {
    try {
      const dados = await getUsers();

      const authUser = dados.find(
        (element: { email: string; senha: string }) => {
          return element.email === email && element.senha === senha;
        }
      );

      if (authUser) {
        setUser(authUser);
        return authUser;
      } else {
        return authUser;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const saveUsuario = async (usuario: Usuario) => {
    try {
      const newUsuario = await postUser(usuario);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        saveUsuario,
        signed: !!user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
