import axios from "axios"
import { useState,useEffect } from "react"
import cloudspng from '../assets/4188714.png'

const CloudsState = () => {

    const [filtro,useFiltro] = useState(1)
    const [status,setStatus] = useState(true)
    const [nubes,SetNubes] = useState([])

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.13&lon=-86.25&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        console.log('resp:',resp.data.weather[0].main)
        SetNubes([resp.data.weather[0].main])
    })},[filtro])

    //console.log("nubestatus: ",palabraRetornada)

    //const palabraRetornada = nubes.toString

    function nubeStatus () {
        let palabra 
        nubes.map((datos,index) => palabra = datos)
        return palabra
    } 

    console.log('adasd',nubeStatus())

    return (
        <>
        
        {
            nubeStatus() === 'Rain' ? <img src={cloudspng} alt="" /> : 'lol'
        }
        </>
    )
}

export default CloudsState