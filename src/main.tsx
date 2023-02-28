import React from 'react'
import ReactDOM from 'react-dom/client'
import Start from './components/Start/Start'
import NavBar from './components/NavBar/NavBar'
import GeneralInformation from './components/GeneralInformation/GeneralInformation'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar/>
    <Start />
    <GeneralInformation/>
    
  </React.StrictMode>,
)
