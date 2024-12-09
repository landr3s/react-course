import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)
<<<<<<< HEAD
=======

>>>>>>> b227818318d567b3700fed9600b8427d819aadec
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }
<<<<<<< HEAD

=======
>>>>>>> b227818318d567b3700fed9600b8427d819aadec
    if (search === '') {
      setError('Invalid search')
      return
    }
<<<<<<< HEAD

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
=======
    if (search.length < 3) {
      setError('Search must be 3 characters or more')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
>>>>>>> b227818318d567b3700fed9600b8427d819aadec
}
