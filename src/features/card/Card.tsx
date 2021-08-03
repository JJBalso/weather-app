import { useEffect, useState } from "react";




interface CardProps {
    locationName: string
}

interface Location {
    coord: any,
    weather : any[];
    base : any;
    main : any;
    visibility : any;
    wind : any;
    clouds : any;
    dt : any;
    sys : any;
    timezone : any;
    id : any;
    name : any;
    cod : any;
}

function Card(props: CardProps){

    const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.locationName}&appid=753bf7675696927d1daa601c92d681df`


    const [location, setLocation] = useState<Location>();

    useEffect(() => {
        fetch(locationUrl)
        .then(response => response.json())
        .then((location: Location) => {
            setLocation(location)  
        })
    }, []);    

    if(location){

        const weatherDescription = location.weather?.map(weather => 
            <div>{weather.description}</div>
        )

        return <div>
            <h1>{location.name}</h1>
            {weatherDescription}
            <div>
                <span>H: {location.main?.temp_max}º</span>
                <span> | </span>
                <span>L: {location.main?.temp_min}º</span>
            </div>
        </div>
    }else {
        return <div>Loading...</div>
    }
}

export default Card