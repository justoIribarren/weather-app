export const useDayState = (date, a, b) => {
  const sunrise = new Date((a.sunrise * 1000 + (b.timezone * 1000))).getUTCHours()
  const sunset = (new Date((a.sunset * 1000 + (b.timezone * 1000))).getUTCHours()) + 1
  if (date < sunset && date > sunrise) return 1
  return 0
}
