import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import { KEY } from './utilities'

export const getSearches = () => {
  const [cities, setCities] = useState(null)

  const fetching = (search) => {
    if (search === '' || !search) {
      setCities('')
      return
    }
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${KEY}`)
      .then(res => res.json())
      .then(data => {
        const cities = data?.map(city => ({
          lat: city.lat,
          lon: city.lon,
          name: city.name,
          country: city.country,
          state: city.state
        }))

        setCities(cities)
      })
  }

  const debouncedGetSearch = useCallback(debounce((search) => {
    fetching(search)
  }, 300), [])

  return { cities, debouncedGetSearch, setCities }
}
