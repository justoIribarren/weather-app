import MainHourlyInfo from "./MainHourlyInfo";

const MainHourly = ({ hourly, currentTime }) => {

  return (
    
    <div className="main__hourly">
  
      <h2 className="main__hourly--title"> Proximas horas: </h2>

      <div className="main__hourly--block">

        <MainHourlyInfo hourly={hourly.list[0]} currentTime={currentTime + 3} hours={hourly}/>
        <div className="divY"></div>
        <MainHourlyInfo hourly={hourly.list[1]} currentTime={currentTime + 6} hours={hourly}/>
        <div className="divY"></div>
        <MainHourlyInfo hourly={hourly.list[2]} currentTime={currentTime + 9} hours={hourly}/>
        <div className="divY"></div>
        <MainHourlyInfo hourly={hourly.list[3]} currentTime={currentTime + 12} hours={hourly}/>

      </div>

    </div>

  );
};

export default MainHourly;