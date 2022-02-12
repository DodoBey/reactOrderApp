import { useReducer } from "react"
import CartContext from "./cartContext"

//Initial Cart State if there is no data, return this
const defaultCartState = {
    items: [],
    totalAmount: 0
}

//CartReducer function, function call based on action type to add or delete items to cart
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'DELETE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

        const existingItem = state.items[existingCartItemIndex]

        const updatedTotalAmount = state.totalAmount - existingItem.price

        let updatedItems

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'CLEAR_ITEM') {
        return defaultCartState
    }
    return defaultCartState
}


//main CartProvider function to create context,
const CartProvider = props => {

    //Cart reducer, first argument is state and second argument is a function to create function that we need
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //Functions to add or remove items from cart
    const addItemToCart = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item })
    }

    const deleteItemFromCart = id => {
        dispatchCartAction({ type: 'DELETE_ITEM', id: id })
    }

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR_ITEM' })
    }

    //Our cartcontext value including states and functions
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        deleteItem: deleteItemFromCart,
        clearCart: clearCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider