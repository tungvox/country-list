import { useState, useEffect } from 'react'

const useFetch = () => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let unmounted = false
    const fetchData = async () => {
      const url = 'https://restcountries.eu/rest/v2/all'
      try {
        if (!unmounted) {
          const res = await fetch(url)
          const json = await res.json()
          setResponse(json)
        }
      } catch (error) {
        if (!unmounted) {
          setError(error)
        }
      }
    }
    fetchData()
    return () => {
      unmounted = true
    }
    // eslint-disable-next-line
  }, [])
  return [response, error]
}

export default useFetch
