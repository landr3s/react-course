import { useContext } from 'react'
import './Footer.css'
import { CartContext } from '../context/cart'

export function Footer() {
  const { cart } = useContext(CartContext)
  return <footer>{JSON.stringify(cart, null, 2)}</footer>
}
