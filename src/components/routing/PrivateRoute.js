import React, {useState} from 'react';
import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {

    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
console.log(token,"token")
    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoute