import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCircleChevronRight } from "react-icons/fa6";
import {useParams} from 'react-router-dom'
import Footer from '../../Shared/Footer';

const ServiceDetails = () => {
    const id = useParams();
    // console.log(id.id);

    const loadSingleServiceData = useLoaderData();
    const {_id, title, img, price, facility} = loadSingleServiceData;

    console.log(_id);
    

    // service load 
    const [serviceTitle, setServiceTitle] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServiceTitle(data))

        // scroll up 
        window.scrollTo(0,0)
    },[]);

    // scroll up 
    const handleScroll = () =>{
        window.scrollTo(0,0)
    }
    return (
        <div>
            <div className='md:mx-8 lg:mx-20 mx-5 overflow-hidden'>
            {/* header img */}
            <div data-aos="fade-down" className='relative mt-3 md:mb-16 mb-10'>
                <img src="../../../../public/assets/images/checkout/checkout.png" alt="" className='rounded-lg h-[200px] md:h-full w-full object-cover '/>

                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.5)] rounded-xl w-full h-full top-0'>
                    <h1 className=' absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-150%] md:translate-y-[-220%] text-center text-3xl md:text-6xl font-bold text-white md:mt-24 my-6'>Service Details</h1>
                    <div className="absolute left-1/2 bottom-0 translate-x-[-50%]">
                        <div className='relative w-[350px] md:w-[450px] border-b-[40px] md:border-b-[40px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[var(--mainColor)]'><h1 className="absolute md:text-xl text-md font-bold text-white top-[5px] left-1/2 translate-x-[-50%]">{title}</h1></div>
                    </div>
                </div>
            </div>

            {/* service details main section  */}
            <div className='md:grid flex flex-col-reverse md:grid-cols-3 gap-5'>
                {/* left-section  */}
                <div className='col-span-2'>
                    <div data-aos="fade-right">
                    <img src={img} alt="" className='w-full h-[350px] object-cover object-bottom rounded-lg' />
                    <h1 className='font-bold text-4xl mt-5'>Unique Car Engine Service</h1>
                    <h4 className='text-xl font-bold py-2 text-slate-400'>{title}</h4>
                    <p className="text-left w-[98%]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>

                    {/* more sections  */}
                    <div data-aos="fade-right" className='py-9 grid grid-cols-2 gap-5'>
                        {
                            facility.map(data=><div className='p-3 rounded-md border-t-2 border-[var(--mainColor)] bg-slate-50'>
                                <h2 className='font-bold'>{data.name}</h2>
                                <p><small>{data.details}</small></p>
                            </div>)
                        }
                    </div>
                    <div data-aos="fade-right">
                    <h1 className='text-4xl font-bold'>3 Simple Steps to Process</h1>
                    <p className='pt-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text.</p>

                    </div>
                    <div data-aos="fade-right" className='grid grid-cols-2 md:grid-cols-3 gap-5 my-10'>
                        <div className='p-5 border rounded-lg'>
                            <div className='grid place-items-center'>
                                <div className='flex justify-center w-24 h-24 items-center rounded-full bg-[rgb(255,228,224)] translate-x[-50%] mb-2'>
                                    <div className='absolute text-center w-16 h-16 rounded-full bg-[var(--mainColor)] text-2xl font-semibold text-white'><h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>01</h1>
                                    </div>
                                    </div>
                            </div>
                            <h2 className='text-2xl font-bold text-center py-2'>Step One</h2>
                            <p className='text-sm text-slate-300 text-center'>It uses a dictionary of over 200.</p>

                        </div>
                        <div  className='p-5 border rounded-lg'>
                            <div className='grid place-items-center'>
                                <div className='flex justify-center w-24 h-24 items-center rounded-full bg-[rgb(255,228,224)] translate-x[-50%] mb-2'>
                                    <div className='absolute text-center w-16 h-16 rounded-full bg-[var(--mainColor)] text-2xl font-semibold text-white'><h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>02</h1>
                                    </div>
                                    </div>
                            </div>
                            <h2 className='text-2xl font-bold text-center py-2'>Step Two</h2>
                            <p className='text-sm text-slate-300 text-center'>It uses a dictionary of over 200.</p>

                        </div>

                        {/* two  */}
                        <div className='p-5 border rounded-lg'>
                            <div className='grid place-items-center'>
                                <div className='flex justify-center w-24 h-24 items-center rounded-full bg-[rgb(255,228,224)] translate-x[-50%] mb-2'>
                                    <div className='absolute text-center w-16 h-16 rounded-full bg-[var(--mainColor)] text-2xl font-semibold text-white'><h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>03</h1>
                                    </div>
                                    </div>
                            </div>
                            <h2 className='text-2xl font-bold text-center py-2'>Step Three</h2>
                            <p className='text-sm text-slate-300 text-center'>It uses a dictionary of over 200.</p>

                        </div>
                    </div>
                    {/* video  */}
                    <div data-aos="fade-right">
                        <video src="../../../../public/assets/images/BMW.mp4" className='w-full rounded-xl mb-10' poster='../../../../public/assets/images/banner/2.jpg' muted autoPlay controls></video>
                    </div>
                </div>

                {/* right section  */}
                <div data-aos="fade-left" className='col-span-1'>
                    <div className='p-10 bg-slate-100 rounded-xl'>
                        <h1 className='text-2xl font-bold'>Services</h1>
                       

                         {
                            serviceTitle.map(title=><div
                            key={title._id}>
                            <Link onClick={handleScroll} className="" to={`/services/${title._id}`}><h3 className={`flex justify-between text-lg font-medium py-3 my-3 ${(title._id === id.id) ? 'bg-[var(--mainColor)] text-white' : 'bg-white'} px-4 rounded-sm hover:bg-[var(--mainColor)] hover:text-white hover:duration-500 items-center`}>{title.title} <FaCircleChevronRight/></h3></Link>
                         </div>)

                         
                         }
                         
                    </div>
                        <div data-aos="fade-left" className='my-10 p-10 pb-16 rounded-xl bg-slate-900 text-white'>
                            <img src="../../../../public/assets/logodark.svg" className='w-32 mx-auto' alt="" />

                            <h2 className='my-5 font-bold text-2xl text-center'>Need Help? We Are Here to Help You</h2>

                            <div className='p-5 bg-white rounded-md text-slate-800 relative'>
                                <h2 className='text-center text-xl font-bold'><span className='text-[var(--mainColor)]'>Car Doctor</span> Special</h2>
                                <p className='text-sm pb-2 text-center font-medium'>Save up to <span className='text-[var(--mainColor)] font-bold '>60% off</span></p>

                                <button className='absolute left-1/2 py-2 px-4 bg-[var(--mainColor)] text-white font-medium rounded-sm translate-x-[-50%]'>Get A Quote</button>
                            </div>
                        </div>

                        <div data-aos="fade-left" className='mx-2'>
                            <h1 className='text-3xl md:text-5xl text-slate-800 text-center font-bold'>Price: ${price}</h1>
                            <Link to={`/checkout/${_id}`}>
                            <button className='my-5 py-2 rounded-sm w-full border-2 border-[var(--mainColor)] bg-[var(--mainColor)] font-semibold text-white text-lg hover:bg-transparent hover:text-[var(--mainColor)] hover:border-2 hover:border-[var(--mainColor)] hover:duration-500'>Proceed Checkout</button></Link>
                        </div>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default ServiceDetails;