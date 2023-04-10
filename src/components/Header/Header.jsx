import { useState, useEffect} from 'react'

const Header = ({ onSearchChange }) => {

  const URL = 'https://api.openweathermap.org/geo/1.0/direct?'
  const KEY = '03274569d0683f10a05a188a0121cede'

  const [cities, setCities] = useState()
  const [search, setSearch] = useState()

  const fetching = async () => {
    if(!search) return;
    const response = await fetch(`${URL}q=${search}&limit=5&appid=${KEY}`);
    const data = await response.json()
    setCities(data)
  }

  useEffect(() => {fetching()}, [search])
  
  const handleOption = (as) => {
    const city = {
      lat: as.target.dataset.lat,
      lon: as.target.dataset.lon,
      name: as.target.dataset.name,
      country: as.target.dataset.country
    }

    onSearchChange( city )
    setSearch(null)
  }

  const handleSearch = (e) => setSearch(e.target.value)
  
  return ( 

    <div className="header">
      <div className="header__input">
        <div className="input-container">  
          <span className="material-symbols-rounded">
          search
          </span>

          <input
            type="text"
            className="input" 
            placeholder='Buscar ciudad' 
            onChange={handleSearch}
          />
        </div>

        {search &&
        <div className="input-options" >
          { cities && cities.length > 0 ? cities.map( (city, idx)=> (
          <p data-lat={city.lat} data-lon={city.lon} data-name={city.name} data-country={city.country} key={idx} onClick={ handleOption }>
              { `${city.name}${ city.state ? ", " + city.state : ""} (${city.country})`  }
            </p>
          ) ) : <p> No se encontraron resultados </p> }
        </div> 
        }
      </div>
    </div>
  )
}
 
export default Header;