import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import LoaderSpinner from '../Component/Spinner/LoaderSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {users, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }
    if(users){
        return children
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;