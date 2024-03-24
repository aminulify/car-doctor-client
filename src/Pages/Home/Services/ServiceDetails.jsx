import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const loadSingleServiceData = useLoaderData();
    const {title, img, price, description, facility} = loadSingleServiceData;
    return (
        <div className='mx-20'>
            {/* header img */}
            <div data-aos="fade-down" className='relative mt-3 mb-16'>
                <img src="../../../../public/assets/images/checkout/checkout.png" alt="" className='rounded-lg w-full object-cover '/>

                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.5)] rounded-xl w-full h-full top-0'>
                    <h1 className='text-center text-6xl font-bold text-white mt-24'>Service Details</h1>
                    <div className="absolute left-1/2 bottom-0 translate-x-[-50%]">
                        <div className='relative w-[450px] border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[var(--mainColor)]'><h1 className="absolute text-xl font-bold text-white top-[9px] left-1/2 translate-x-[-50%]">{title}</h1></div>
                    </div>
                </div>
            </div>

            {/* service details main section  */}
            <div className='grid grid-cols-3 gap-5'>
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
                    <div data-aos="fade-right" className='grid grid-cols-3 gap-5 my-10'>
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
                        <video src="../../../../public/assets/images/BMW.mp4" className='w-full rounded-xl mb-10' poster='../../../../public/assets/images/banner/2.jpg' muted controls></video>
                    </div>
                </div>

                {/* right section  */}
                <div className='col-span-1'></div>
            </div>
        </div>
    );
};

export default ServiceDetails;