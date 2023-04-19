import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App () {
  const [props, setProps] = useState(null)
  const onSearchChange = (props) => {
    setProps(props)
  }
  return (
    <div className='page__container'>
      <header><Header onSearchChange={onSearchChange} /> </header>
      <main>{props && <Main props={props} />}</main>
      <footer><Footer /></footer>
    </div>
  )
}

export default App
