import { useDayState } from '../../hooks/useDayState'
import { useIcon } from '../../hooks/useIcon'

const MainHourlyInfo = ({ hourly, currentTime, hours }) => {
  if (currentTime >= 24) currentTime -= 24
  const dayState = useDayState(currentTime, hours.city, hours.city)
  const icon = useIcon(hourly, dayState)

  return (
    <div className='main__hourly--info'>
      <h3> {`${currentTime < 10 ? '0' + `${currentTime}` : currentTime}:00`} </h3>
      <div className='icon'>
        {icon && (
          <span className='material-symbols-rounded'>
            <div className='bg' style={{ backgroundColor: `#${icon.bg}` }} />
            {`${icon.value}`}
          </span>)}
      </div>
      <h2 className='temp'>{`${Math.round(hourly.main.temp)}°`}</h2>
    </div>
  )
}

export default MainHourlyInfo
