import React, { createContext, useEffect, useState } from "react";
import { Produto } from "../types";


type ProductContextType{
    product: Produto | undefined;
    saveProduct: (productData: Produto) => void;

}
export const ProductContext = createContext<ProductContextType>({
    product: undefined,
    saveProduct: () => {}
});

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState<Produto>();

    useEffect(() => {
    
    },[])

    const saveProduct = (productData: Produto) => {
        setProduct(productData)
    }

    return (
    <ProductContext.Provider value={{product, saveProduct}}>
        {children}
    </ProductContext.Provider>
    )
}