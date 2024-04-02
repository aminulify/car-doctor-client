import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname, location);

    const navigation = useNavigation();
 

    if(loading){
        return <div>{
            navigation.state==="loading" ? <span className="absolute top-[50%] z-30 left-[50%] loading loading-dots bg-[var(--mainColor)] w-[80px]"></span> : ""
            }</div>
    }
 

    if(user){
        console.log("user",user)
        return children;
    }
 

    return (
        <Navigate to='/register' state={{from:location}} replace></Navigate>
        // replace means client clicked page not save in history 
    );
};

export default PrivateRoute;