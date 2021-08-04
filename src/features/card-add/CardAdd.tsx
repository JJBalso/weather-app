import React, { useEffect, useState } from "react";
// import styles from './Card.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addLocation } from "../locations/locations";


function CardAdd(){  

    const dispatch = useAppDispatch();

    const [isAdding, setIsAdding] = useState(false);
    const [locationName, setLocationName] = useState('')

    function onAddClick() {
        setIsAdding(true);
    }

    function submitLocation(event: any) {
        dispatch(addLocation(locationName));
        setIsAdding(false);
    }

    function onLocationChangeClick(event: any) {
        setLocationName(event.target.value);
    }

    useEffect(() => {
        console.log(isAdding)
    }, [isAdding]); 

    useEffect(() => {
        console.log(locationName)
    }, [locationName]); 


    if(isAdding){
        return  <form onSubmit={submitLocation}>
            <label>
                New Location:
                <input type="text" value={locationName} onChange={onLocationChangeClick} />
            </label>
            <input type="submit" value="Submit" />
        </form>


    } else {
        return <div >
            <button onClick={onAddClick}>+</button>
        </div>
    }     

}

export default CardAdd