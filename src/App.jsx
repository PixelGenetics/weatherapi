import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weatherapi from './components/weatherapi'

function App() {
  return (
    <>
      <div className='w-full h-full' >
        <div className='w-full h-full' style={{backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/226/682/452/minecraft-waterfall-video-games-wallpaper-899048fd616a7d1bd697080f5011c60d.jpg')"}}>
        <Weatherapi />
        </div>
      </div>
    </>
  )
}

export default App
