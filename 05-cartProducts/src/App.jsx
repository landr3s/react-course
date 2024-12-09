import { useContext, useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { FiltersContext } from './context/filters'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (product.category === filters.category || filters.category === 'all')
      )
    })
  }

  return { filters, setFilters, filterProducts }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <div className='page'>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />

        <Footer />
      </CartProvider>
    </div>
  )
}

export default App
