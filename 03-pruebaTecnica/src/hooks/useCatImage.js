import { useEffect, useState } from 'react'
const CAT_IMAGE_PREFIX = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1).join(' ')
    fetch(
      `${CAT_IMAGE_PREFIX}/cat/says/${firstWord}?fontSize=50&fontColor=white&json=true`
    )
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${firstWord}`
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_IMAGE_PREFIX}${imageUrl}` }
}
