import axios from "axios"
import { useState,useEffect } from "react"


const Temp = () => {
    const [verTemp,setVerTemp] = useState([]) 
    const [filtro,setFiltro] = useState(1)

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.13&lon=-86.25&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        //console.log("Humedad: ",resp.data.main.humidity)
        setVerTemp([resp.data.main])
    })},[filtro])

    const tempLocal= () => {
        return (verTemp.map((datos)=>(
            <div key={datos} className="flex justify-center">
                <p className="font-pixelfont">Humidity: {datos.humidity}</p>
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