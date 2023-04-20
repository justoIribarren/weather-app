const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__contact'>
        <div className='footer__contact--name'>
          <span className='footer__name--link'>Hecho por</span>
          <a href='https://justoiribarren.github.io/' target='_blank' rel='noopener noreferrer' className='footer__name--link'> Justo Iribarren </a>
        </div>

        <a href='https://www.linkedin.com/in/justo-iribarren/' target='_blank' rel='noopener noreferrer' className='footer__contact--content'>
          <span><i className='fa-brands fa-linkedin' /></span>
        </a>
        <a href='https://github.com/justoIribarren' target='_blank' rel='noopener noreferrer' className='footer__contact--content'>
          <span><i className='fa-brands fa-github' /></span>
        </a>
      </div>
      <div className='footer__copy'>
        <a href='https://openweathermap.org/api' target='_blank' rel='noopener noreferrer'> Weather API </a>
        -
        <a href='https://openweathermap.org/api/geocoding-api' target='_blank' rel='noopener noreferrer'> Geocoding API </a>
      </div>
    </div>
  )
}

export default Footer
