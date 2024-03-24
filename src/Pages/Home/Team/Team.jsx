import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
    return (
        <div className='py-10' id='team'>

            <div data-aos="fade-left" className='text-center'>
                <h2 className='font-bold text-lg text-[var(--mainColor)]'>Team</h2>
                <h1 className='font-bold md:text-6xl text-4xl pb-2'>Meet Our Team</h1>
                <p className='md:mx-72 md:mt-3 mb-8 text-sm mx-14'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>


            {/* carousel  */}
                <div data-aos="fade-right" className='lg:mx-20 md:mx-8 mx-5 mb-5'>
                <div className="carousel w-full h-[260px] md:h-[500px]">
                <div id="slide11" className="carousel-item relative w-full">
                    <div className='grid grid-cols-2 md:grid-cols-3 w-full justify-center gap-5 items-center'>
                        {/* first person  */}
                        <div className='text-center'>
                             <div className="p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
                            <div className="flex justify-center">
                                <img src="./assets/images/team/1.jpg" className="w-[300px] md:md:h-[300px] object-cover rounded-sm" alt="team_image" />
                            </div>
                            <h1 className="mt-2 md:text-xl text-md font-bold">Car Tire & Wheel</h1>
                           
                            <p className="font-medium text-[var(--mainColor)]">Wheel Expert</p>
                            <div className="flex gap-1 text-2xl justify-center py-2">
                                    <Link to="/"><FaFacebook className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><IoLogoWhatsapp className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><FaLinkedin className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                            </div>
                         
                        </div>
                        </div>

                        {/* second person  */}
                        <div className='text-center'>
                             <div className="p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
                            <div className="flex justify-center">
                                <img src="./assets/images/team/2.jpg" className="w-[300px] md:h-[300px] object-cover rounded-sm" alt="team_image" />
                            </div>
                            <h1 className="mt-2 md:text-xl text-md font-bold">Car Engine Checking</h1>
                           
                            <p className="font-medium text-[var(--mainColor)]">Engine Expert</p>
                            <div className="flex gap-1 text-2xl justify-center py-2">
                                    <Link to="/"><FaFacebook className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><IoLogoWhatsapp className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><FaLinkedin className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                            </div>
                         
                        </div>
                        </div>

                        {/* third person  */}
                        <div className='text-center'>
                             <div className="p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
                            <div className="flex justify-center">
                                <img src="./assets/images/team/3.jpg" className="w-[300px] md:h-[300px] object-cover rounded-sm" alt="team_image" />
                            </div>
                            <h1 className="mt-2 md:text-xl text-md font-bold">Car Technology Checking</h1>
                           
                            <p className="font-medium text-[var(--mainColor)]">Tech Expert</p>
                            <div className="flex gap-1 text-2xl justify-center py-2">
                                    <Link to="/"><FaFacebook className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><IoLogoWhatsapp className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><FaLinkedin className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                            </div>
                         
                        </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <a href="#slide12" className="btn btn-circle border-none bg-opacity-50 bg-slate-800 text-white">❮</a> 
                    <a href="#slide12" className="btn btn-circle ml-2 bg-[var(--mainColor)] border-none text-white">❯</a>
                    </div>

                </div> 
                <div id="slide12" className="carousel-item relative w-full">
                <div className='grid grid-cols-2 md:grid-cols-3 w-full justify-center gap-5 items-center'>
                       {/* first person  */}
                       <div className='text-center'>
                             <div className="p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
                            <div className="flex justify-center">
                                <img src="./assets/images/team/4.jpg" className="w-[300px] md:md:h-[300px] object-cover rounded-sm" alt="team_image" />
                            </div>
                            <h1 className="mt-2 md:text-xl text-md font-bold">Car Engine</h1>
                           
                            <p className="font-medium text-[var(--mainColor)]">Engine Expert</p>
                            <div className="flex gap-1 text-2xl justify-center py-2">
                                    <Link to="/"><FaFacebook className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><IoLogoWhatsapp className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><FaLinkedin className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                            </div>
                         
                        </div>
                        </div>

                        {/* second person  */}
                        <div className='text-center'>
                             <div className="p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
                            <div className="flex justify-center">
                                <img src="./assets/images/team/5.jpg" className="w-[300px] md:h-[300px] object-cover rounded-sm" alt="team_image" />
                            </div>
                            <h1 className="mt-2 md:text-xl text-md font-bold">Car Engine Servicing</h1>
                           
                            <p className="font-medium text-[var(--mainColor)]">Engine Expert</p>
                            <div className="flex gap-1 text-2xl justify-center py-2">
                                    <Link to="/"><FaFacebook className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><IoLogoWhatsapp className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><FaLinkedin className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                            </div>
                         
                        </div>
                        </div>

                        {/* third person  */}
                        <div className='text-center'>
                             <div className="p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
                            <div className="flex justify-center">
                                <img src="./assets/images/team/6.jpg" className="w-[300px] md:h-[300px] object-cover rounded-sm" alt="team_image" />
                            </div>
                            <h1 className="mt-2 md:text-xl text-md font-bold">Car Engine</h1>
                           
                            <p className="font-medium text-[var(--mainColor)]">Engine Expert</p>
                            <div className="flex gap-1 text-2xl justify-center py-2">
                                    <Link to="/"><FaFacebook className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><IoLogoWhatsapp className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                                    <Link to="/"><FaLinkedin className='hover:text-[var(--mainColor)] hover:duration-500'/></Link>
                            </div>
                         
                        </div>
                        </div>
                    </div>
                    

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <a href="#slide11" className="btn btn-circle border-none bg-opacity-50 bg-slate-800 text-white">❮</a> 
                    <a href="#slide11" className="btn btn-circle bg-[var(--mainColor)] border-none text-white">❯</a>
                    </div>

                </div> 
            
                </div>
            </div>
        </div>
    );
};

export default Team;