// import React from 'react';

import { Card } from "react-bootstrap";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const Chefslayout = () => {
    const chefs = useLoaderData();
    const {id,  chef_picture, chef_name, bio, recipes, years_of_experience } = chefs;
    return (
        <div>
        <div className="d-flex justify-content-center">
        <Card className=" ms-5 mt-3" style={{ width: '50rem' }} >
                <Card.Img style={{ height: '680px', padding:"25px" }} src={chef_picture} />
                <Card.Body>
                    <Card.Title>
                        <b>{chef_name}</b>
                    </Card.Title>
                    <Card.Text>
                       <b> Biography:</b> {bio}
                    </Card.Text>
                    <Card.Text>
                    <b>Number of recipes:</b> {recipes}
                    </Card.Text>
                    <Card.Text>
                        <b>Experience:</b> {years_of_experience} years
                    </Card.Text>
                    <Link to={`/`}>All Chefs</Link>
                </Card.Body>
            </Card>
           
        </div>
        <Outlet/>
        </div>
    );
};

export default Chefslayout;