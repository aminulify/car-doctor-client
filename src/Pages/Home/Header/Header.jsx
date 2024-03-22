import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Team from '../Team/Team';
import ChooseUs from '../ChooseUs/ChooseUs';
import Customer from '../Customer/Customer';

const Header = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Customer></Customer>
        </div>
    );
};

export default Header;