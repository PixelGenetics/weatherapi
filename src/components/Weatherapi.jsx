import axios from "axios"
import { useState,useEffect } from "react"
import Temp from "./Temp";
import CloudsState from "./CloudsState";

const Weatherapi = () => {

    const [clima,setClima] = useState([]);
    const [filtro,setFiltro] = useState(1)

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        console.log('Dentro de useEffect: ',resp)
        setClima([resp.data.coord])
    })},[filtro])

    const mostrarDatos = () => {
        return clima.map((objeto) => (
            <div key={objeto}>
            <p>Latitud: {objeto.lat}</p>
            <p>Longitud: {objeto.lon}</p>
            </div>
        ))
    }

    return (
        <>
        {mostrarDatos()}
        <Temp />
        <CloudsState />
        </>
    )
}

export default Weatherapi