import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { getSearches } from '../services/getSearches'
// import { useState } from 'react'

export const useCities = ({ search }) => {
  const [cities, setCities] = useState({})

  const debouncedGetSearch = useCallback(debounce(() => {
    const cities = getSearches(search)
    setCities(cities)
  }, 3000), [])

  // const getSearch = async () => {
  //   const cities = await getSearches(search)
  //   setCities(cities)
  //   console.log(cities)
  // }
  // const debouncedGetSearches = useCallback(debounce(search => {
  // return cities
  // }, 2000), [])
  return { cities, debouncedGetSearch }
}

// import { useState } from 'react'
// import { useCities } from '../../hooks/useCities'

// const Header = ({ onSearchChange }) => {
//   const [search, setSearch] = useState('')
//   const { cities, getSearch } = useCities(search)

//   const handleOption = (as) => {
//     const { lat, lon, name, country } = as.target.dataset
//     const city = { lat, lon, name, country }
//     onSearchChange(city)
//     setSearch('')
//   }
//   const handleSearch = (e) => {
//     setSearch(e.target.value)
//     console.log(cities)
//     getSearch()
//   }
