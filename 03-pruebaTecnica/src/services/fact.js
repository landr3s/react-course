const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_FACT_ENDPOINT)
  const json = await res.json()
  const { fact } = json
  return fact
}
