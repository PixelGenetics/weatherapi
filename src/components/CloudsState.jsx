import axios from "axios"
import { useState,useEffect } from "react"
import cloud from '../assets/cloud-solid.svg'
import rain from '../assets/cloud-rain-solid.svg'
import snow from '../assets/snowflake-solid.svg'
import wind from '../assets/wind-solid.svg'


const CloudsState = () => {

    const [filtro,useFiltro] = useState(1)
    const [status,setStatus] = useState(true)
    const [nubes,SetNubes] = useState([])

    useEffect(() => {axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.13&lon=-86.25&appid=56e1337974ab22108e31121b83bc55f2').then(resp => {
        //console.log('resp:',resp.data.weather[0].main)
        SetNubes([resp.data.weather[0].main])
    })},[filtro])

    //console.log("nubestatus: ",palabraRetornada)

    //const palabraRetornada = nubes.toString

    
    function nubeStatus () {
        let palabra 
        nubes.map((datos,index) => palabra = datos)
        return palabra
    } 

    //console.log('adasd',nubeStatus())

    function weather1(){
        if (nubeStatus() === 'Clouds') {
            return (
                    <div className="flex justify-center">
                        <img src={cloud} alt="" className="h-16 "/>
                    </div>
            )
        }else if(nubeStatus() === 'Rain'){
            return(
                <div className="flex justify-center">
                    <img src={rain} alt="" className="h-16 "/>
                </div>
            )
        }else if(nubeStatus() === 'Snow'){
            return(
                <div className="flex justify-center">
                    <img src={snow} alt="" className="h-16 "/>
                </div>
            )
        }else if(nubeStatus() === 'Wind'){
            return(
                <div className="flex justify-center">
                    <img src={wind} alt="" className="h-16 "/>
                </div>
            )
        }
    }

    //console.log('weather1',weather1())
    return (
        <>
        <div >
        {
            weather1()
        }
        </div>
        </>
    )
}

export default CloudsState