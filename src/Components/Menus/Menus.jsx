// import React from 'react';

import { useEffect, useState } from "react";
import './Menus.css'
const Menus = () => {
    const [menus, setState] = useState([])

    useEffect(() => {
        fetch('https://10th-assignment-server-side-zubair650.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
    return (
        <div className='m-5'>
            <h2 className='text-center' style={{color:"brown"}}>Recipes Menu</h2>
            <ol style={{border: "4px solid brown", padding: "42px"}}>{
                menus.map(m =>
                    <li key={m.id}>
                        <div className="d-flex justify-content-between">
                        <h5><b>{m.recipeName}</b></h5>
                        <p><b>{m.price} BDT</b></p>
                        </div>
                        <p>{m.ingredients}</p>
                        <hr style={{height: "3px"}}></hr>
                    </li>
                )
            }
            </ol>
        </div>
    );
};

export default Menus;