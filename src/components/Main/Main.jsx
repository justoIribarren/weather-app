import { useEffect, useState } from "react"
import MainFrame from "./MainFrame"
import DetailsFrame from "./DetailsFrame"
import FiveForecastFrame from "./FiveForecastFrame"

const Main = ( { props } ) => {

  const [weather, setWeather] = useState(null)
  const [hourly, setHourly] = useState(null)
  const [dayState, setDayState] = useState(null)
  
  const KEY = '03274569d0683f10a05a188a0121cede'
  const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/'
  
  const currentWeather = async () => {
    if (!props) return
    const res = await fetch(`${WEATHER_URL}weather?lat=${props.lat}&lon=${props.lon}&lang=es&appid=${KEY}&units=metric`)
    const data = await res.json()
      
    let sunrise = new Date((data.sys.sunrise * 1000 + (data.timezone * 1000))).getUTCHours()
    let sunset = (new Date((data.sys.sunset * 1000 + (data.timezone * 1000))).getUTCHours()) + 1
    let date = new Date((new Date().getTime() + (data.timezone * 1000))).getUTCHours()
    date < sunset && date > sunrise  ? setDayState(1) : setDayState(0)
    
    setWeather(data)

    console.log('Current weather res: ',data)
  }
  
  const forecast5 = async () => {
    if (!props) return
    const res = await fetch(`${WEATHER_URL}forecast?lat=${props.lat}&lon=${props.lon}&lang=es&appid=${KEY}&units=metric`)
    const data = await res.json()

    setHourly(data)
    console.log('5Forecast res: ',data)
  }
  
  useEffect( () => {
    currentWeather()
    forecast5()
  }, [props] )

  return (
    <div className="main">
      
      { weather && <MainFrame props={props} weather={weather} hourly={hourly} dayState={dayState}/> }
      <DetailsFrame weather={weather} hourly={hourly}/> 

      <FiveForecastFrame hourly={hourly} />
    </div>
  )
}

export default Main