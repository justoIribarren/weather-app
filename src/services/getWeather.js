import { useState, useEffect } from 'react'
import { KEY } from './utilities'

export const getWeather = url => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${url}=${KEY}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [url])
  return data
}
