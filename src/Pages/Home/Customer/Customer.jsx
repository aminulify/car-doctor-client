import React from 'react';
import Rating from 'react-rating';
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const Customer = () => {
    return (
        <div className='text-center md:mx-20 mx-5 py-16'>
            <div data-aos="fade-left">
                <h2 className='font-bold text-lg text-[var(--mainColor)]'>Testimonial</h2>
                <h1 className='font-bold md:text-6xl text-4xl pb-2'>What Customer Says</h1>
                <p className='md:mx-72 md:mt-3 mb-8 text-sm mx-14'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div data-aos="fade-right" className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {/* first person review  */}
                <div className='border relative p-10 rounded-md'>
                    <div className='flex gap-5 items-center mb-3'>
                        <div><img src="./assets/images/customer/1.jpg" className='text-[var(--mainColor)] w-16 h-16 object-cover rounded-full' alt="" /></div>
                        <div className='text-left'>
                            <h2 className='text-slate-800 font-bold text-2xl'>Awlad Hossain</h2>
                        <p className='text-slate-400'>Businessman</p>
                        </div>
                        <div className='w-16 md:w-24 absolute right-5 top-5 opacity-10'>
                            <img src="./assets/icons/quote.svg" alt="" />
                        </div>
                        
                        
                    </div>
                    <div>
                        <p className='flex text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>

                    {/* rating  */}
                    <div className='text-orange-400 mt-4 text-2xl text-left'>
                        <Rating
                            placeholderRating={5}
                            emptySymbol={<IoMdStarOutline/>}
                            placeholderSymbol={<IoMdStar/>}
                            fullSymbol={<IoMdStar/>}
                            readonly
                            />
                    </div>
                </div>

                {/* second person review  */}
                <div className='border relative p-10 rounded-md'>
                    <div className='flex gap-5 items-center mb-3'>
                        <div><img src="./assets/images/customer/2.jpg" className='w-16 h-16 object-cover object-left rounded-full' alt="" /></div>
                        <div className='text-left'>
                            <h2 className='text-slate-800 font-bold text-2xl'>Md Aminul Islam</h2>
                        <p className='text-slate-400'>Businessman</p>
                        </div>
                        <div className='w-16 md:w-24 absolute right-5 top-5 opacity-10'>
                            <img src="./assets/icons/quote.svg" alt="" />
                        </div>
                        
                        
                    </div>
                    <div>
                        <p className='flex text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>

                    {/* rating  */}
                    <div className='text-orange-400 mt-4 text-2xl text-left'>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<IoMdStarOutline/>}
                            placeholderSymbol={<IoMdStar/>}
                            fullSymbol={<IoMdStar/>}
                            readonly
                            />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;