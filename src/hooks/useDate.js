import { useState, useEffect } from 'react'

export const useDate = (data, i) => {
  const [date, setDate] = useState(null)
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const months = ['en', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ag', 'sep', 'oct', 'nov', 'dic']
  const now = new Date((new Date().getTime() + (data * 1000) + 10800000))
  const currentDate = () => {
    let j = now.getDay() + i + 1
    if (j > 6) j -= 7

    setDate({
      month: months[now.getMonth()],
      day: days[now.getDay()],
      number: now.getDate(),
      hour: now.getHours(),
      minutes: now.getMinutes(),
      optional: days[j]
    })
  }

  useEffect(() => {
    currentDate()
  }, [data])

  return date
}
