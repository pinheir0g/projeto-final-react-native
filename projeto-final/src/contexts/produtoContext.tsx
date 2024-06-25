import React, { createContext,  useState } from "react";
import { Produto, PropsChildren } from "../types";
import { deleteProductById, getAllProducts, postProduct, updateProduct } from "../services/produtosCrud";
import { Alert } from "react-native";


type ProductContextType = {
    products: Produto[];
    getProducts: () => Promise<void>;
    saveProduct: (produto: Produto) => void;
    editProduct: (produto: Produto) => void;
    deleteProduct: (id: string) => void;
}
export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider = ({children}: PropsChildren) => {
    const [products, setProducts] = useState<Produto[]>([]);


    const getProducts = async () => {
        try {
          const produtos = await getAllProducts();
          setProducts(produtos);
        } catch (err) {
          console.log(err);
        }
      };

    const saveProduct = async (newProduct: Produto) => {
        try{
            const produto = await postProduct(newProduct)
            setProducts([...products, newProduct]);
        }catch(err){
            console.log(err)
        }
    };

    const editProduct = async (editedProduct: Produto) => {
        setProducts(products.map(produto => (produto.id === editedProduct.id ? editedProduct: produto)))
        try{
            const updatedProduct = await updateProduct(editedProduct.id, editedProduct);
        }catch(err){
            console.log(err)
        }
    };

    const deleteProduct = async (id: string) => {
        try {
          const deletedProduct = await deleteProductById(id)
          setProducts(products.filter(item => item.id !== deletedProduct.id))
          Alert.alert('Sucesso', 'Produto deletado com sucesso!')
        } catch (err) {
          console.log(err)
        }
      };

    return (
    <ProductContext.Provider value={{
        products, 
        getProducts,
        saveProduct,
        editProduct,
        deleteProduct,
        }}>
        {children}
    </ProductContext.Provider>
    )
};

export default ProductProvider;