import { useContext, useState } from 'react'
import { FiltersContext } from '../context/filters'

export function Filters() {
  const { filters, setFilters } = useContext(FiltersContext)
  const handleChangeMinPrice = e => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = e => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <>
      <label htmlFor='price'>
        Min Price:
        <input
          type='range'
          min={0}
          max={100}
          id='price'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>{filters.minPrice}</span>
      </label>

      <label htmlFor='category'>
        Category:
        <select
          id='category'
          onChange={handleChangeCategory}
        >
          <option value='All'>All</option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
        </select>
      </label>
    </>
  )
}
