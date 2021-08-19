import React,{useReducer, useEffect, useContext} from 'react'
import { ADD_TO_CART, UPDATE_CONTACT, DELETE_CART_ITEM, SUBMIT_ITEMS, ADD_TO_CART_TB } from '../Action'
import reducer from '../Reducer/CartReducer'

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []
    }
}

const initialState = {
    cart : getLocalStorage(),
    totalItems : 0,
    contactNumber : null,
    finalCart : []
}

const CartContext = React.createContext()

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id,itemName,quantity,powerRating) => {
        dispatch({type : ADD_TO_CART, payload : {id,itemName,quantity,powerRating}})
    }

    const addToCartTB = (id,description,quantity,series,numOfWays,partNumber) => {
        dispatch({type : ADD_TO_CART_TB, payload : {id,description,quantity,series,numOfWays,partNumber}})
    }

    const updateContact = (number) => {
        dispatch({type : UPDATE_CONTACT, payload : number})
    }

    const deleteCartItem = (id) => {
        dispatch({type : DELETE_CART_ITEM, payload : id})
    }

    const submitOrder = () => {
        dispatch({type : SUBMIT_ITEMS})
    }

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider
            value={{
                ...state,
                addToCart,
                addToCartTB,
                updateContact,
                deleteCartItem,
                submitOrder
            }}
    >{children}</CartContext.Provider>

}

export const useCartContext = () => {
    return useContext(CartContext)
}