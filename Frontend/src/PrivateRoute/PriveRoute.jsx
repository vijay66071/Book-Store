import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider';
import { useLocation } from 'react-router-dom';
import { Spinner } from "flowbite-react";
import { Navigate } from 'react-router-dom';

const PriveRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    if(user){
        return children;
    }


    return (
        <Navigate to = "/login" state= {{from:location}} replace></Navigate>
    )
}

export default PriveRoute