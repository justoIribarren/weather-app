/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import { DetailsFrameRow } from './DetailsFrameRow'
import { useIcon } from '../../hooks/useIcon'
import { useDate } from '../../hooks/useDate'

const ForecastItem = ({ item, data, index }) => {
  const [accordion, setAccordion] = useState(null)
  const handleExpand = () => !accordion ? setAccordion(true) : setAccordion(null)
  const icon = useIcon(item, 1)
  const date = useDate(data, index)

  return (
    <div className='accordion'>
      <div className='accordion__header' onClick={handleExpand}>
        <div className='accordion__header--data'>
          <div className='icon'>
            {icon && (
              <span className='material-symbols-rounded'>
                <div className='bg' style={{ backgroundColor: `#${icon.bg}` }} />
                {`${icon.value}`}
              </span>)}
          </div>
          <div>
            <h2> {date && date.optional} </h2>
            <p> {(item.weather[0].description)[0].toUpperCase() + item.weather[0].description.substr(1)} </p>
          </div>
        </div>
        <div className='accordion__header--data'>
          <div>
            <h2 className='temp'> {`${Math.round(item.main.temp_max)}°`} </h2>
          </div>
          <span className={`material-symbols-rounded ${accordion ? 'rotate' : ''}`}>
            expand_more
          </span>
        </div>
      </div>
      {accordion
        ? <div className={`accordion__info ${accordion ? 'acc-active' : ''}`}>
          <DetailsFrameRow text='Sensación Térmica: ' prop={`${Math.round(item.main.feels_like)}°`} />
          <DetailsFrameRow text='Humedad: ' prop={`${item.main.humidity}%`} />
          <DetailsFrameRow text='Nubes: ' prop={`${item.clouds.all}%`} />
          <DetailsFrameRow text='Precipitaciones:' prop={`${Math.round(item.pop * 100)}% - ${item.rain ? Object.entries(item.rain)[0][1] : 0}  mm`} />
        </div>
        : null}
    </div>
  )
}

export default ForecastItem
