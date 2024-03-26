import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PrivateNavbar from '../PrivateRoutes/PrivateNavbar';

const Main = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user?.email ? <PrivateNavbar></PrivateNavbar> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;