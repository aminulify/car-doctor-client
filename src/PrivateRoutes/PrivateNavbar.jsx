import React, { useContext, useEffect, useState } from 'react';
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import './PrivateNavbar.css';
import { Link, useNavigation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const PrivateNavbar = () => {
    const [navbarMobile, setNavbarMobile] = useState(false);
    const {logOut, user} = useContext(AuthContext);
    const navigation = useNavigation();

    const [dataCount, setDataCount] = useState([]);
    console.log(dataCount);

    

    const handleResponsiveBtn = () =>{
        setNavbarMobile(!navbarMobile);
    }

    const handleLogoutBtn = () =>{
       

        Swal.fire({
            title: "Logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff3811",
            cancelButtonColor: "#000000",
            confirmButtonText: "Logout!"
          }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                .then(()=>{
                    localStorage.removeItem('car-access-token');
                })
                .catch(e=>console.log(e));
            }
          });
    }

    useEffect(()=>{
        const url = `http://localhost:5000/booking?email=${user?.email}`
        fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>data ? setDataCount(data.length) : setDataCount('?'));
    },[]);

    

    return (
        <div>

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
                <a href='/services/65ff12d7ef05b89aa3ce6d3e'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>Services</li></a>
                <a href='/order'><li className='p-2 mr-2 hover:text-[var(--mainColor)]'>Order</li></a>
            </div>

            {/* right-side  */}
            <div className={`lg:flex md:flex block items-center ${navbarMobile ? 'responsiveRightSide':'hidden'}`}>
                <div className='flex my-3 lg:my-0 md:my-0 relative'>
                    <Link to='/order'>
                        <div className='text-xl hover:text-[var(--mainColor)]'><IoBagHandleOutline/><div className='absolute w-3 h-3 rounded-full bg-[var(--mainColor)] top-0 md:right-12 right-16 text-[8px]'><h1 className='absolute -top-2 left-[3px] text-white font-bold'>{dataCount ? dataCount : '...'}</h1></div></div>
                    </Link>
                <div className='text-xl lg:mx-4 md:mx-4 mx-2 hover:text-[var(--mainColor)]'><IoSearch/></div>
                </div>
                <Link to='/' className=''><button onClick={handleLogoutBtn} className='py-2 px-4 border-2 border-[var(--mainColor)] font-semibold text-md text-[var(--mainColor)] hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'>Logout</button></Link>
            </div>
        </div>

        </div>
    );
};

export default PrivateNavbar;