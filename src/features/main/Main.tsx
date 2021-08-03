import React from "react"
import MediaQuery from "react-responsive"
import Footer from "../footer/Footer"
import Header from "../header/Header"

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLocation } from '../locations/locations';
import Card from "../card/Card";


function Main(){

    // Get locations

    const locations = useAppSelector(selectLocation);  

    const locationCards = locations.map(location => 
        <Card locationName={location}></Card>
    )

    return  <React.Fragment>
        <Header/>        
        {locationCards}
        <MediaQuery maxDeviceWidth={767}>
            <Footer/>
      </MediaQuery>
    </React.Fragment>    
}

export default Main