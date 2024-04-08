import React from 'react';


const ChooseUs = () => {
    return (
        <div id='chooseUs' className='text-center lg:mx-20 md:mx-8 mx-5'>
            <div data-aos="fade-left">
                <h2 className='font-bold text-lg text-[var(--mainColor)]'>Core Features</h2>
                <h1 className='font-bold md:text-6xl text-4xl pb-2'>Why Choose Us</h1>
                <p className='md:mx-72 md:mt-3 mb-8 text-sm mx-14'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            {/* choose us working icons  */}
            <div data-aos="fade-right" className='grid md:grid-cols-6 grid-cols-3 gap-3'>
                <div className='border p-3 flex flex-col justify-center mt-2 rounded-md'>
                    <img loading="lazy" src="./assets/icons/group.svg" className='w-16 mx-auto' alt="" />
                    <h3 className='font-bold text-slate-800 text-center mt-2'>Expert Team</h3>
                </div>
                <div className='border p-3 flex flex-col justify-center mt-2 rounded-md bg-[var(--mainColor)]'>
                    <img loading="lazy" src="./assets/icons/Group 38729.svg" className='w-12 mx-auto' alt="" />
                    <h3 className='font-bold text-white text-center mt-2'>Timely Response</h3>
                </div>
                <div className='border p-3 flex flex-col justify-center mt-2 rounded-md'>
                    <img loading="lazy" src="./assets/icons/person.svg" className='w-12 mx-auto' alt="" />
                    <h3 className='font-bold text-slate-800 text-center mt-2'>12/7 Support</h3>
                </div>
                <div className='border p-3 flex flex-col justify-center mt-2 rounded-md'>
                    <img loading="lazy" src="./assets/icons/Wrench.svg" className='w-12 mx-auto' alt="" />
                    <h3 className='font-bold text-slate-800 text-center mt-2'>Best Equipment</h3>
                </div>
                <div className='border p-3 flex flex-col justify-center mt-2 rounded-md'>
                    <img loading="lazy" src="./assets/icons/check.svg" className='w-12 mx-auto' alt="" />
                    <h3 className='font-bold text-slate-800 text-center mt-2'>100% Grantee</h3>
                </div>
                <div className='border p-3 flex flex-col justify-center mt-2 rounded-md'>
                    <img loading="lazy" src="./assets/icons/deliveryt.svg" className='w-12 mx-auto' alt="" />
                    <h3 className='font-bold text-slate-800 text-center mt-2'>Timely Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;