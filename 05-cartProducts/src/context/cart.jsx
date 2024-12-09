import { createContext, useReducer } from 'react'

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload
      const productId = state.findIndex(item => item.id === id)
      if (productId >= 0) {
        const newState = structuredClone(state)
        newState[productId].quantity += 1
        return newState
      }
      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = payload
      return state.filter(item => item.id !== id)
    }
    case 'CLEAR_CART': {
      return initialState
    }
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = product =>
    dispatch({ type: 'ADD_TO_CART', payload: product })
  const removeFromCart = product =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
