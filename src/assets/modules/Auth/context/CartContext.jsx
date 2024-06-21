import {createContext, useState}  from 'react';

const CartContext = createContext(null);

export function cartProvider ({children}){
    const [addCart, setAddCart] = useState([]);
    return(
        <CartContext.Provider value={{addCart, setAddCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContext;

