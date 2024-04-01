import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://car-doctor-server-seven-rho.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='py-10 text-center' id='services'>
            <div data-aos="fade-left">
                <h2 className='font-bold text-lg text-[var(--mainColor)]'>Services</h2>
                <h1 className='font-bold md:text-6xl text-4xl pb-2'>Our Service Area</h1>
                <p className='md:mx-72 md:mt-3 mb-8 text-sm mx-14'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            {/* service card  */}
            <div data-aos="fade-right" className='grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-8 mx-8'>
               {
                services.map((service)=><ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
               } 
            </div>

            {/* more services btn  */}
            <Link to="/"><button className='mt-5 py-2 px-4 border-2 border-[var(--mainColor)] font-semibold text-md text-[var(--mainColor)] hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'>More Services</button></Link>
        </div>
    );
};

export default Services;