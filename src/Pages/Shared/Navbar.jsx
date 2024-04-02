import React, { useContext, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import './Navbar.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const [navbarMobile, setNavbarMobile] = useState(false);
    const navigation = useNavigation();

    const handleResponsiveBtn = () =>{
        setNavbarMobile(!navbarMobile);
    }

    // scroll up 
    const handleScroll = () =>{
        window.scrollTo(0,0)
        
    }

    return (
        <>
        {
            navigation.state==="loading"? <span className="absolute top-[50%] z-30 left-[50%] loading loading-dots bg-[var(--mainColor)] w-[80px]"></span> : ""
          
        }
        <div data-aos="fade-left" className='lg:mx-20 flex justify-between items-center mx-5 py-3 z-10'>
            {/* left side  */}
            <Link to="/">
                <img src="./assets/logo.svg" className='w-20' alt="" />
            </Link>

             {/* menu close btn */}
            <div className='menu-bar hidden' onClick={handleResponsiveBtn}>
                
                {
                    navbarMobile ? <div className={`text-5xl hover:text-[var(--mainColor)]`}><IoIosClose/></div> : <div className={`text-5xl hover:text-[var(--mainColor)]`}><IoIosMenu/></div>
                }
                
            </div>

            {/* center side  */}
            <div className={`lg:flex md:flex list-none font-medium ${navbarMobile ? 'responsive':'hidden'}`}>
                <Link to='/'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>Home</li></Link>
                <a href='/#about'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>About</li></a>
                <a href='/#services'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>Services</li></a>
                <a href='/#team'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>Team</li></a>
                <a href='/#contact'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>Contact</li></a>
            </div>

            {/* right-side  */}
            <div className={`lg:flex md:flex block items-center ${navbarMobile ? 'responsiveRightSide':'hidden'}`}>
                <div className='flex my-3 lg:my-0 md:my-0'>
                    <div className='text-xl hover:text-[var(--mainColor)]'><IoBagHandleOutline/></div>
                <div className='text-xl lg:mx-4 md:mx-4 mx-2 hover:text-[var(--mainColor)]'><IoSearch/></div>
                </div>
                <Link to='/services/65ff12d7ef05b89aa3ce6d3e' className='' onClick={handleScroll}><button className='py-2 px-4 border-2 border-[var(--mainColor)] font-semibold text-md text-[var(--mainColor)] hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'>Appointment</button></Link>
            </div>
        </div>
        </>
    );
};

export default Navbar;