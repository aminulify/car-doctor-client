import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div data-aos="fade-right" className='lg:mx-20 md:mx-8 mx-2'>
            <div className="carousel carousel-img w-full h-[400px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img loading='lazy' src="./assets/images/banner/1.jpg" className=" w-full bg-left-top" />

                    {/* header text section  */}
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.1)] h-full md:pl-10 px-5 bg-opacity-10 rounded-2xl z-3">
                <div className='lg:w-1/2 md:w-1/2'>
                    <h1 className=';g:text-6xl md:text-5xl text-4xl font-bold text-white mb-2'>Affordable Price For Car Servicing</h1>
                    <p className='text-white text-sm lg:text-md md:text-md mb-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5 mt-4'>
                    <Link to="/"><button className='px-4 py-2 border-2 font-medium rounded-sm border-[var(--mainColor)] bg-[var(--mainColor)] text-white hover:bg-transparent hover:duration-500'>Discover More</button></Link>
                    <Link to='/'><button className='px-4 py-2 border-2 text-white hover:bg-[var(--mainColor)] hover:border-[var(--mainColor)] hover:duration-500 font-medium rounded-sm'>Latest Project</button></Link>
                    </div>
                </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle border-none bg-opacity-50 bg-slate-800 text-white">❮</a> 
                <a href="#slide2" className="btn btn-circle ml-2 bg-[var(--mainColor)] border-none text-white">❯</a>
                </div>

            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img loading='lazy' src="./assets/images/banner/2.jpg" className="w-full bg-left-top" />

                {/* header text section  */}
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.1)] h-full md:pl-10 px-5 bg-opacity-10 rounded-2xl z-3">
                <div className='lg:w-1/2 md:w-1/2'>
                    <h1 className=';g:text-6xl md:text-5xl text-4xl font-bold text-white mb-2'>Affordable Price For Car Servicing</h1>
                    <p className='text-white text-sm lg:text-md md:text-md mb-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5 mt-4'>
                    <Link to="/"><button className='px-4 py-2 border-2 font-medium rounded-sm border-[var(--mainColor)] bg-[var(--mainColor)] text-white hover:bg-transparent hover:duration-500'>Discover More</button></Link>
                    <Link to='/'><button className='px-4 py-2 border-2 text-white hover:bg-[var(--mainColor)] hover:border-[var(--mainColor)] hover:duration-500 font-medium rounded-sm'>Latest Project</button></Link>
                    </div>
                </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle border-none bg-opacity-50 bg-slate-800 text-white">❮</a> 
                <a href="#slide3" className="btn btn-circle ml-2 bg-[var(--mainColor)] border-none text-white">❯</a>
                </div>

            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img loading='lazy' src="./assets/images/banner/3.jpg" className="w-full bg-left-top" />
                
                {/* header text section  */}
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.1)] h-full md:pl-10 px-5 bg-opacity-10 rounded-2xl z-3">
                <div className='lg:w-1/2 md:w-1/2'>
                    <h1 className=';g:text-6xl md:text-5xl text-4xl font-bold text-white mb-2'>Affordable Price For Car Servicing</h1>
                    <p className='text-white text-sm lg:text-md md:text-md mb-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5 mt-4'>
                    <Link to="/"><button className='px-4 py-2 border-2 font-medium rounded-sm border-[var(--mainColor)] bg-[var(--mainColor)] text-white hover:bg-transparent hover:duration-500'>Discover More</button></Link>
                    <Link to='/'><button className='px-4 py-2 border-2 text-white hover:bg-[var(--mainColor)] hover:border-[var(--mainColor)] hover:duration-500 font-medium rounded-sm'>Latest Project</button></Link>
                    </div>
                </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle border-none bg-opacity-50 bg-slate-800 text-white">❮</a> 
                <a href="#slide4" className="btn btn-circle ml-2 bg-[var(--mainColor)] border-none text-white">❯</a>
                </div>

            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img loading='lazy' src="./assets/images/banner/4.jpg" className="w-full bg-left-top" />
                
                {/* header text section  */}
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.1)] h-full md:pl-10 px-5 bg-opacity-10 rounded-2xl z-3">
                <div className='lg:w-1/2 md:w-1/2'>
                    <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold text-white mb-2'>Affordable Price For Car Servicing</h1>
                    <p className='text-white text-sm lg:text-md md:text-md mb-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5 mt-4'>
                    <a href="#about"><button className='px-4 py-2 border-2 font-medium rounded-sm border-[var(--mainColor)] bg-[var(--mainColor)] text-white hover:bg-transparent hover:duration-500'>Discover More</button></a>
                    <a href='#chooseUs'><button className='px-4 py-2 border-2 text-white hover:bg-[var(--mainColor)] hover:border-[var(--mainColor)] hover:duration-500 font-medium rounded-sm'>Choose Us!</button></a>
                    </div>
                </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle border-none bg-opacity-50 bg-slate-800 text-white">❮</a> 
                <a href="#slide1" className="btn btn-circle ml-2 bg-[var(--mainColor)] border-none text-white">❯</a>
                </div>

            </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;