import SearchBox from "./SearchBox";
import InfoBOx from './InfoBox';
import { useState } from "react";
export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
            city : "WonderLand",
            feelsLike :24.84,
            temp : 25.05,
            tempMin : 25.05,
            tempMax : 25.05,
            humidity: 47,
            weather : "haze",
    })
    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        
        
                
        <div style={{textAlign:"center"}}>
            <h1>Forcastify</h1>
            <SearchBox updateInfo={updateInfo} ></SearchBox>
            <InfoBOx info={weatherInfo} ></InfoBOx>
        </div>

    )
}