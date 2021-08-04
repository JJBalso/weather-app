import { useAppSelector } from '../../app/hooks';
import { selectLocation } from '../locations/locations';

import React from "react"
import MediaQuery from "react-responsive"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Card from "../card/Card";

import styles from './Main.module.css';


function Main(){

    // Get locations

    const locations = useAppSelector(selectLocation);  

    const locationCards = locations.map(location => 
        <Card key={location} locationName={location}></Card>
    )

    return  <React.Fragment>
        <Header/>
        <div className={styles.cardWrapper}>
            {locationCards}
        </div>   
        <MediaQuery minWidth={767}>
            <Footer/>
      </MediaQuery>
    </React.Fragment>    
}

export default Main