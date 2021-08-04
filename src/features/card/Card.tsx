import { useEffect, useState } from "react";
import { CardProps, Location } from "./card.models";
import styles from './Card.module.css';
import environment from '../../environments/environment.config'
import { useAppDispatch } from "../../app/hooks";
import { removeLocation } from "../locations/locations";


function Card(props: CardProps){  

    const dispatch = useAppDispatch();
    const [location, setLocation] = useState<Location>();

    useEffect(() => {
        const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.locationName}&units=metric&appid=${environment.weatherApiKey}`

        fetch(locationUrl)
        .then(response => response.json())
        .then((location: Location) => {
            setLocation(location)  
        })
        .catch(error => {
            console.log('Location Not Found')
        })
    }, [props.locationName]);    

    if(location){

        let weatherImage = '';
        const weatherDescription = location.weather?.map(weather => {
            // Get the last icon
            weatherImage = `https://openweathermap.org/img/w/${weather.icon}.png`;
            return <div key={weather.id}>{weather.description}</div>
        }) 

        return <div className={styles.cardContainer}>
            <h1>{location.name}</h1>
            {weatherDescription}
            <div>
                <div>{location.main?.temp}º</div>
                <img src={weatherImage}/>
            </div>
            <div>
                <span>H: {location.main?.temp_max}º</span>
                <span> | </span>
                <span>L: {location.main?.temp_min}º</span>
            </div>
            <div>Humidity: {location.main?.humidity}%</div>
            <div>Wind: {location.wind?.speed}m/s</div>
            <button onClick={() => {dispatch(removeLocation(props.locationName))}}>x</button>
        </div>
    }else {
        return <div>Loading...</div>
    }
}

export default Card