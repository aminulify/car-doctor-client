import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className=' mb-16 pt-10 md:my-16 md:grid md:grid-cols-2 flex flex-col-reverse mx-8 md:mx-20 gap-10 items-center' id='about'>
            <div data-aos="fade-right" className='relative'>
                <img src="./assets/images/about_us/person.jpg" alt="person_img" className='w-5/6 h-[420px] object-cover rounded-xl object-left'/>
                
                <img src="./assets/images/about_us/parts.jpg" alt="parts_img" className='absolute top-1/2 w-3/4 h-[250px] object-cover right-0 border-t-[14px] border-l-[14px] border-white rounded-md'/>
             
            </div>
            <div data-aos="fade-left">
                <h2 className='font-bold text-xl text-[var(--mainColor)]'>About Us</h2>
                <h1 className='md:text-6xl text-4xl font-bold md:leading-[65px]'>We are qualified & of experience in this field</h1>
                <p className='md:my-5 my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <Link to="/"><button className='px-4 py-2 border-2 font-medium rounded-sm border-[var(--mainColor)] bg-[var(--mainColor)] text-white hover:text-[var(--mainColor)] hover:bg-transparent hover:duration-500 mt-5'>Get More Info</button></Link>
            </div>
        </div>
    );
};

export default About;