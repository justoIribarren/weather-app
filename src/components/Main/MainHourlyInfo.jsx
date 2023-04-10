import { useIcon } from "../hooks/useIcon"

const MainHourlyInfo = ({ hourly, currentTime, hours }) => {

  currentTime >= 24 ? currentTime -= 24 : currentTime
  
  let dayState = null
  let sunrise = new Date((hours.city.sunrise * 1000 + (hours.city.timezone * 1000))).getUTCHours()
  let sunset = new Date((hours.city.sunset * 1000 + (hours.city.timezone * 1000))).getUTCHours()

  currentTime < sunset && currentTime > sunrise ? dayState = 1 : dayState = 0

  let icon = useIcon(hourly, dayState)

  return (
    <div className="main__hourly--info">

      <h3> { `${currentTime < 10 ? "0" + `${currentTime}` : currentTime}:00` } </h3>

      <div className="icon">
        { icon && <span className="material-symbols-rounded">
          <div className="bg" style={{ backgroundColor: `#${icon.bg}` }}></div>
          { `${icon.value}`}
        </span> }
      </div>

      <h2 className='temp'> { `${Math.round(hourly.main.temp)}°` } </h2>

    </div>
  )
}

export default MainHourlyInfo