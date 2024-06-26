import { ReactNode } from "react";

export type Produto = {
    id: string;
    nome: string;
    descricao: string;
    preco: string;
    quantidade: string;
    categoria: string;
    imagem: string;
}

export type PropsChildren = {
    children: ReactNode;
}

export type Usuario = {
    id: string;
    nome: string;
    email: string;
    senha: string;
}