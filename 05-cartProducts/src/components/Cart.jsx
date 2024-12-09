import { useContext, useId } from 'react'
import './Cart.css'
import { CartIcon } from './Icons'
import { CartContext, CartProvider } from '../context/cart'

export function CartItem({ image, price, title, quantity, addToCart }) {
  return (
    <li className='product'>
      <img
        src={image}
        alt='T-shirt'
        style={{ width: 'auto', height: '100px' }}
      />
      <p>
        <strong>{title}</strong>-<span>{price}</span>
      </p>
      <div>
        <span>Qt: {quantity}</span>
        <button onClick={addToCart}>+</button>
      </div>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useContext(CartContext)
  return (
    <>
      <label
        htmlFor={cartCheckboxId}
        className='cart-button'
      >
        <CartIcon />
      </label>
      <input
        type='checkbox'
        id={cartCheckboxId}
        hidden
      />
      <aside className='cart'>
        <ul className='cart-products'>
          {cart.map(product => (
            <CartItem
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>Clear Cart</button>
      </aside>
    </>
  )
}
