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
      setError('Search must be 3 characters or more')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
