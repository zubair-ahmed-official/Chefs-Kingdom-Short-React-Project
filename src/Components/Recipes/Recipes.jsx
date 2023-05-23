// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";

// import { Outlet } from "react-router-dom";

const Recipes = () => {
    const { id } = useParams();
    const recipes = useLoaderData();

    return (
        <div>
            <h3 className="m-5 text-center">The Number of the recipes shown: {recipes.length}</h3>
            <MDBRow className="g-3">
                    {
                        recipes.map(r =>

                            <RecipeCard
                                key={r.id}
                                r={r}
                            ></RecipeCard>

                        )
                    }
                
            </MDBRow>
        </div>
    );
};

export default Recipes;