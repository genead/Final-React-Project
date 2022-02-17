import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import {ADD_TO_CART,  REMOVE_ITEM} from '../Types'


const CartState = ({ children }) => {
    
    const initalState = {
        showCart: false,
        cartItem: []
    };

    const [state, dispatch] = useReducer(CartReducer, initalState);

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    } 

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id });
    }
    return (
        <CartContext.Provider value={{
            cartItems: state.cartItem,
            addToCart,
            removeItem,
        }}>{children}</CartContext.Provider>
    )
}

export default CartState;