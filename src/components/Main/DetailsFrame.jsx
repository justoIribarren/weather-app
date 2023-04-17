import { DetailsFrameRow } from './DetailsFrameRow'

const DetailsFrame = ({ weather, hourly }) => {
  return (
    <section className='main__details'>
      <h2> Detalles:  </h2>
      {weather && (
        <div className='main__details--grid'>
          <div className='grid--column'>
            <DetailsFrameRow text='Sensación:' prop={`${Math.round(weather.main.feels_like)}°`} />
            <DetailsFrameRow text='Max/min:' prop={`${Math.round(weather.main.temp_max)}°/${Math.round(weather.main.temp_min)}°`} />
            <DetailsFrameRow text='Viento:' prop={`${Math.round(weather.wind.speed * 3.6)} Km/h`} />
          </div>
          <div className='grid--column'>
            {hourly && <DetailsFrameRow text='Precipitaciones:' prop={`${Math.round(hourly.list[0].pop * 100)}%`} />}
            {hourly && <DetailsFrameRow text='Volumen:' prop={`${hourly.list[0].rain ? Object.entries(hourly.list[0].rain)[0][1] : 0}mm`} />}
            <DetailsFrameRow text='Presión:' prop={`${weather.main.pressure}hPa`} />
          </div>
        </div>)}
    </section>
  )
}

export default DetailsFrame
