import { useIcon } from '../../hooks/useIcon'
import { useDayState } from '../../hooks/useDayState'

const MainInfo = ({ weather }) => {
  const date = new Date((new Date().getTime() + (weather.timezone * 1000))).getUTCHours()
  const dayState = useDayState(date, weather.sys, weather)
  const icon = useIcon(weather, dayState)
  return (
    <div className='main__info'>
      <div className='main__info--temp'>
        <div className='icon'>
          {icon && (
            <span className='material-symbols-rounded'>
              <div className='bg' style={{ backgroundColor: `#${icon.bg}` }} />
              {icon.value}
            </span>)}
        </div>
        <p className='temp'>{`${Math.round(weather.main.temp)}°`}</p>
      </div>
      <div className='main__info--details'>
        <h2> {(weather.weather[0].description)[0].toUpperCase() + weather.weather[0].description.substr(1)} </h2>
        <div className='main__info--detail'>
          <h3> Humedad: </h3>
          <h3> {`${weather.main.humidity}%`} </h3>
        </div>
        <div className='main__info--detail'>
          <h3> Nubes: </h3>
          <h3> {`${weather.clouds.all}%`} </h3>
        </div>
      </div>
    </div>
  )
}
export default MainInfo
