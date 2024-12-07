import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useContext(CartContext)
  const checkProductInCart = product =>
    cart.some(item => item.id === product.id)
  return (
    <main>
      {products.map(product => {
        const isProductInCart = checkProductInCart(product)
        return (
          <li
            key={product.id}
            className='product'
          >
            <div style={{ margin: '4px' }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: 'auto', height: '8rem' }}
              />
              <p>
                <strong>{product.title}</strong> - {product.price}
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  isProductInCart ? removeFromCart(product) : addToCart(product)
                }}
              >
                {isProductInCart ? 'Remove' : 'Add'}
              </button>
            </div>
          </li>
        )
      })}
    </main>
  )
}
