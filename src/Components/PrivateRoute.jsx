import {  useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../public/ContentAPI/AuthContext";


const PrivateRoute = ( {children}) => {
    const { users, loading } = useContext(AuthContext);
    const location= useLocation();
    console.log(location);
    if (loading) {
        return (
            <div className="text-center mt-5"><span className="loading loading-spinner text-secondary"></span></div>
        )
    }
    if (users) {
        return children
    }
    return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
};

export default PrivateRoute;