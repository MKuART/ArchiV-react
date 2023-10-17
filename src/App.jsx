
import './App.css'
import Footer from './componts/Footer'
import Header from './componts/Header'
import MainCard from './componts/MainCard'
import KarteiForm  from './componts/KarteiForm'
import InlineButton from './componts/InlineButton'


function App() {

  return (<div className='appDiv'>
      <Header/>
      <KarteiForm/>
      <MainCard/>
      <Footer/>
      <InlineButton/>
  </div>)
}

export default App
