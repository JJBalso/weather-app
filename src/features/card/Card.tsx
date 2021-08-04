import { useEffect, useState } from "react";
import { CardProps, Location } from "./card.models";
import styles from './Card.module.css';
import environment from '../../environments/environment.config'


function Card(props: CardProps){  

    const [location, setLocation] = useState<Location>();

    useEffect(() => {
        const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.locationName}&appid=${environment.weatherApiKey}`

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

        const weatherDescription = location.weather?.map(weather => 
            <div key={weather.id}>{weather.description}</div>
        )

        return <div className={styles.cardContainer}>
            <h1>{location.name}</h1>
            {weatherDescription}
            <div>
                <span>H: {location.main?.temp_max}º</span>
                <span> | </span>
                <span>L: {location.main?.temp_min}º</span>
            </div>
            <div>Humidity: {location.main?.humidity}</div>
            <div>Wind: {location.wind?.speed}</div>
        </div>
    }else {
        return <div>Loading...</div>
    }
}

export default Card