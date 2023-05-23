// import React from 'react';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Rating from "react-rating";

const RecipeCard = ({ r }) => {
    const { id, recipeName, ingredients, recipe_image, cookingMethod, rating } = r;
    const [fav, setFav] = useState(true);

    const notify = (event) => {
        setFav(event.target.clicked);
        toast("Recipe added in the favorite list!");
    }
    return (
        <MDBCard style={{ width: '600px', margin: '0 0 50px 120px' }}>
            <MDBCardImage
                src={recipe_image}
                position='top'
                height='460px'
            />
            <MDBCardBody>
                <MDBCardTitle><b>{recipeName}</b></MDBCardTitle>
                <MDBCardText>
                    <b>Ingredients:</b> {ingredients}
                </MDBCardText>
                <MDBCardText>
                    <b>Cooking Method:</b> {cookingMethod}
                </MDBCardText>
                <MDBCardText>
                    <b>Rating: </b>
                    <Rating emptySymbol={<img width="21px" src="https://live.staticflickr.com/65535/52865625440_fda7f7589e_o.png" className="icon" />}
                        fullSymbol={<img width="21px" src="https://live.staticflickr.com/65535/52865235656_1ea9f4dd91_o.png" className="icon" />} />
                        &nbsp;&nbsp;<b>{rating}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-outline-success" onClick={notify} disabled={!fav}><ToastContainer />Favorite <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
                </MDBCardText>

            </MDBCardBody>
        </MDBCard>

    );
};

export default RecipeCard;