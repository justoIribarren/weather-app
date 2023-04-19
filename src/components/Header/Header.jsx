import { getSearches } from '../../services/getSearches'

const Header = ({ onSearchChange }) => {
  const { cities, debouncedGetSearch, setCities } = getSearches()

  const handleOption = (city) => {
    onSearchChange(city)
    setCities(null)
  }
  const handleSearch = (e) => {
    debouncedGetSearch(e.target.value)
  }

  return (
    <div className='header'>
      <div className='header__input'>
        <div className='input-container'>
          <span className='material-symbols-rounded'> search </span>
          <input
            type='text'
            className='input'
            placeholder='Buscar ciudad'
            onChange={handleSearch}
          />
        </div>
        {cities &&
          <div className='input-options'>
            {cities.length > 0
              ? cities.map((city, idx) => (
                <p key={idx} onClick={() => handleOption(city)}>
                  {`${city.name}${city.state ? ', ' + city.state : ''} (${city.country})`}
                </p>
              ))
              : <p> No se encontraron resultados </p>}
          </div>}
      </div>
    </div>
  )
}

export default Header
