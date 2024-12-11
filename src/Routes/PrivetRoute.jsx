import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import Loading from '../components/Loading';


const PrivetRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location =useLocation();
    // console.log(location)
    if(loading){
        return <Loading />
    }
    if(user&&user?.email){
        return children
    }

    return <Navigate state={location.pathname} to={`/auth/login`} />
}

export default PrivetRoute