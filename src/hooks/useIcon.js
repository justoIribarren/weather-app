import { useState, useEffect } from 'react'
import { IconsList } from '../services/utilities'

export const useIcon = (data, dayState) => {
  const [icon, setIcon] = useState(null)
  const selectIcon = () => {
    Object.entries(IconsList[dayState])
      .forEach(i => {
        if (i[0] === data.weather[0].main) {
          if (i[0] === data.weather[0].main && Object.keys(i[1])[0] >= data.weather[0].id) setIcon(i[1][802])
          else if (i[0] === data.weather[0].main && Object.keys(i[1])[1] <= data.weather[0].id) setIcon(i[1][803])
          else setIcon(i[1])
        }
      })
  }

  useEffect(() => {
    selectIcon()
  }, [data])

  return icon
}
