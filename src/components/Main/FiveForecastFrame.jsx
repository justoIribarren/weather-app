import ForecastItem from "./ForecastItem"



const FiveForecastFrame = ({ hourly }) => {

  let i = hourly && hourly.list.filter( ( item ) => item.dt_txt.split(" ")[1].split(":")[0] == 12 );
  
  return (
    <>
      {hourly && i.map ( (item, idx) => <ForecastItem key={idx} item={item} data={hourly.city.timezone} index={idx}/> )}
    </>
  )
}

export default FiveForecastFrame;