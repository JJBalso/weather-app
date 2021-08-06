import { useAppSelector } from '../../app/hooks';
import { selectLocation } from '../locations/locations';

import React from "react"
import MediaQuery from "react-responsive"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Card from "../card/Card";

import styles from './Main.module.css';
import CardAdd from '../card-add/CardAdd';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Main(){

    // Get locations

    const locations = useAppSelector(selectLocation);  

    

    function locationCards() {
        return locations.map(location => 
            <Card key={location} locationName={location} isSimple={false}></Card>
        )
    }

    function locationCardsCarousel() {
        return <div>
            {locations.map(location => 
                <Card key={location} locationName={location} isSimple={true}></Card>
            )}
        </div>
    }

    return  <React.Fragment>
        <Header/>
        <div className={styles.mainContainer}>
            <MediaQuery minWidth={767}>
                <div className={styles.cardWrapper}>
                    {locationCards()}
                    <CardAdd></CardAdd>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={766}>
                <Carousel 
                    autoPlay showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                    className={styles.carouselWrapper}>                    
                        {locationCardsCarousel().props.children}
                        <CardAdd></CardAdd>
                </Carousel>
            </MediaQuery> 
        </div>   
        <MediaQuery minWidth={767}>
            <Footer/>
      </MediaQuery>
    </React.Fragment>    
}

export default Main