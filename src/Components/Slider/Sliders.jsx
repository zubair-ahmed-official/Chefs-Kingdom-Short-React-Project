// import React from 'react';
import { Carousel } from 'react-bootstrap';
// import Slider from 'react-slick';
import './Sliders.css'
const Sliders = () => {
  //Carousel added for slider
  return (<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100" height="620px"
        src="https://live.staticflickr.com/65535/52864373959_67aae4eefc_o.jpg"
        alt="First slide"
      />
      <Carousel.Caption className='bg'>
        <h3>Best Quality Foods</h3>
        <p>We have the food items of the best quality. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100" height="620px"
        src="https://live.staticflickr.com/65535/52863625682_da60421f6e_o.jpg"
        alt="Second slide"
      />
      <Carousel.Caption className='bg'>
        <h3>Better Chefs</h3>
        <p>We have the world class chefs with proper qualifications. </p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100" height="620px"
        src="https://live.staticflickr.com/65535/52864652103_829d18be6c_o.jpg"
        alt="Third slide"
      />
      <Carousel.Caption className='bg'>
        <h3>Food Hygiene</h3>
        <p>We maintain the hygienic conditions of our foods. </p>
      </Carousel.Caption>

    </Carousel.Item>
  </Carousel>);
}

export default Sliders;
