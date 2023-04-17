import MainFrame from './MainFrame'
import DetailsFrame from './DetailsFrame'
import FiveForecastFrame from './FiveForecastFrame'
import { getWeather } from '../../services/getWeather'

const Main = ({ props }) => {
  const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/'
  const hourly = getWeather(`${WEATHER_URL}forecast?lat=${props.lat}&lon=${props.lon}&lang=es&units=metric&appid`)
  const weather = getWeather(`${WEATHER_URL}weather?lat=${props.lat}&lon=${props.lon}&lang=es&units=metric&appid`)

  return (
    <div className='main'>
      {weather && <MainFrame props={props} weather={weather} hourly={hourly} />}
      <DetailsFrame weather={weather} hourly={hourly} />
      {hourly && <FiveForecastFrame hourly={hourly} />}
    </div>
  )
}

export default Main
