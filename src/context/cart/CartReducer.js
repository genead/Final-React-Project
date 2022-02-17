
import { ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART } from "../Types";

const CartReducer = (state, action) => {
    switch (action.type) {
             // add item functionality
        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }
            // remove item functionality
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }
        }

        default:
            return state
    }
}
export default CartReducer