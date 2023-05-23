// import React, { useContext } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading)
    {
        return <Spinner style={{margin:'50px 0 0 750px'}} animation="border" variant="danger" />
    }
    if(user)
    {
        return children;
    }
    return (
        <Navigate state={{from: location}} to='/signIn'/>
    );
};

export default PrivateRoutes;