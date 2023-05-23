// import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Sliders from '../Slider/Sliders';
import Chefs from '../Chefs/Chefs';
import Contact from '../Contact/Contact';
import Menus from '../Menus/Menus';

const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <Chefs></Chefs>
            <Menus></Menus>
            <Contact></Contact>
        </div>
    );
};

export default Home;