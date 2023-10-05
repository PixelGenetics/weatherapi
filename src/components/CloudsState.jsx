import axios from "axios"
import { useState,useEffect } from "react"
import cloudspng from '../assets/4188714.png'

const CloudsState = () => {

    const [filtro,useFiltro] = useState(1)
    const [status,setStatus] = useState(true)
    const [nubes,SetNubes] = useState([])

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.13&lon=-86.25&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        console.log('resp:',resp.data.weather)
        SetNubes([resp.data.weather])
    })},[filtro])

    const nubeStatus = () => {
        return (nubes.map((datos,index) => (
            <div key={datos}>
                {datos[0].main}
            </div>
        ))
        )
    }
    
    if (nubeStatus === 'Clouds') {
        <img src={cloudspng} alt="" />
    }else{
        <p>Hola</p>
    }

    return (
        <>
        {
            nubeStatus() === 'Clouds' ? "Hola" : <img src={cloudspng} alt="" />
        }
        </>
    )
}

export default CloudsState