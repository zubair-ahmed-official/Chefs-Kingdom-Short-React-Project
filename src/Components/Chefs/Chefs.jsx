// import React from 'react';

import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import './Chefs.css'

const Chefs = () => {
    const [chef, setState] = useState([])

    useEffect(() => {
        fetch('https://10th-assignment-server-side-zubair650.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
    return (
        <div className="mt-5">
            <h1 className="text-center" style={{ color: "navy" }}>Our Chefs</h1>
            <Row >
                {
                    chef.map(c =>
                        <Col key='3'>
                            <Card className="chefsCard" key={c.id} >
                                {/*LazyLoad added*/ }
                                <LazyLoad>
                                    <Card.Img className="cardImg" style={{ height: '440px' }} src={c.chef_picture} />
                                </LazyLoad>
                                <Card.Body>
                                    <Card.Title>
                                        <Link className="text-decoration-none" to={`chefs/${c.id}`}>
                                            {c.chef_name}
                                        </Link>
                                    </Card.Title>
                                    <Card.Text>
                                        Number of Recipes: {c.recipes}
                                    </Card.Text>
                                    <Card.Text>
                                        Likes: {c.likes}
                                    </Card.Text>
                                    <Card.Text>
                                        Experience: {c.years_of_experience} years
                                    </Card.Text>
                                    <Link className="text-decoration-none" to={`chefs/${c.id}`}>
                                        <button className="btn btn-outline-dark">View Recipes</button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Chefs;