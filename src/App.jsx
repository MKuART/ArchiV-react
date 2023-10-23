
import './App.css'
import Footer from './componts/Footer'
import Header from './componts/Header'
import MainCard from './componts/MainCard'
import KarteiForm  from './componts/KarteiForm'
import InlineButton from './componts/InlineButton'
import LoginCard from './componts/LoginCard'

import {RouterProvider} from 'react-router-dom';
import {router} from './utils/router'


function App() {

  return (<div className='appDiv'>
    
    <RouterProvider router={router}/>

  </div>)
}

export default App
