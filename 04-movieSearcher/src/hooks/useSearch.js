import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Invalid search')
      return
    }

    if (search.length < 3) {
      setError('Search must have 3 characters or more...')
      return
    }

    setError(null)
  }, [search])

  const updateSearch = e => {
    setSearch(e.target.value)
  }
  return { search, error, updateSearch }
}
