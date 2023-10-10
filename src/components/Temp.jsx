import axios from "axios"
import { useState,useEffect } from "react"


const Temp = () => {
    const [verTemp,setVerTemp] = useState([]) 
    const [filtro,setFiltro] = useState(1)
    const [tempCelcius,setTempCelcius] = useState([])

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.13&lon=-86.25&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        console.log("Humedad: ",resp.data.main)
        setVerTemp([resp.data.main])
    })},[filtro])

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.13&lon=-86.25&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        console.log("Celcius: ",resp.data.main.temp)
        setTempCelcius([resp.data.main.temp])
    })},[filtro])

    const Celcius = () => {
        return(tempCelcius.map((datos)=> (
            <div key={datos}>
                {conversion(datos)}
            </div>
        )))
    }
    
    function conversion(datos1) {
        return Math.round(datos1 - 273.15)
    }

    const tempLocal= () => {
        return (verTemp.map((datos)=>(
            <div key={datos} className="">
                <p className="flex justify-center font-pixelfont">Humidity: {datos.humidity}</p>
                <p className="flex justify-center font-pixelfont">Temperature Kelvin: {datos.temp}</p>
                <p className="flex justify-center font-pixelfont">Temperature Celcius: {conversion(datos.temp)}</p>
            </div>
        ))
        )
    }

    return (
        <>  
            {tempLocal()}
        </>
    )
}

export default Temp