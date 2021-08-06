import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addLocation } from "../locations/locations";
import styles from './CardAdd.module.css';


function CardAdd(){  

    const dispatch = useAppDispatch();

    const [isAdding, setIsAdding] = useState(false);
    const [locationName, setLocationName] = useState('');    

    function submitLocation(event: any) {
        dispatch(addLocation(locationName));
        setIsAdding(false);
    }

    function onLocationChangeClick(event: any) {
        setLocationName(event.target.value);
    }

    if(isAdding){
        return  <div className={styles.cardAddContainer}>
            <h1 className={styles.cardAddTitle}>New Location</h1>  
            <form onSubmit={submitLocation}>
                <input type="text" value={locationName} onChange={onLocationChangeClick} />
                <input type="submit" value="Submit" className={styles.submitButton}/>
            </form>
        </div>

    } else {
        return <div className={styles.addButtonContainer}>
            <PlusCircleOutlined 
                title="Add Location"
                className={styles.addButton}
                onClick={() => setIsAdding(true)}/>            
        </div>
    }     

}

export default CardAdd