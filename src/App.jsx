import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weatherapi from './components/weatherapi'

function App() {
  return (
    <>
      <div className='h-screen bg-blue-200 sm:bg-blue-300 md:bg-blue-400'>
        <div>
          <Weatherapi />
        </div>
      </div>
    </>
  )
}

export default App
