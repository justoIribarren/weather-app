import MainInfo from './MainInfo'
import MainHourly from './MainHourly'
import { useDate } from '../../hooks/useDate'

const MainFrame = ({ props, weather, hourly }) => {
  const date = useDate(weather.timezone, 0)
  return (
    <section className='main__frame'>
      <div className='main__header'>
        <h2> {`${props.name}, ${props.country}`} </h2>
        {date && (
          <div className='main__header'>
            <h3>{`${date.day}, ${date.month} ${date.number}`}</h3>
            <h2> {`${date.hour < 10 ? '0' + date.hour : date.hour}:${date.minutes < 10 ? '0' + date.minutes : date.minutes}`} </h2>
          </div>)}
      </div>
      <div className='div' />
      {weather && <MainInfo weather={weather} />}
      {hourly && <MainHourly hourly={hourly} currentTime={date.hour} />}
    </section>
  )
}

export default MainFrame
