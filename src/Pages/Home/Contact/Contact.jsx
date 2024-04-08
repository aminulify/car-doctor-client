import React from 'react';


const Contact = () => {
    return (
        <div id='contact' data-aos="fade-down" className='p-8 md:p-16 mx-8 lg:mx-20 md:mx-8 rounded-lg bg-slate-800 text-white grid md:grid-cols-3 grid-cols-1'>
            <div className='flex gap-3 mb-8 md:mb-0'>
                <img loading="lazy" src="./assets/icons/calender.png" className='w-1/6 h-full object-contain' alt="" />
                <div>
                    <p className='text-sm'>We are open monday-friday</p>
                    <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex gap-3 mb-8 md:mb-0'>
                 <img loading="lazy" src="./assets/icons/contact.png" className='w-1/6 h-full object-contain' alt="" />
                <div>
                    <p className='text-sm'>Have a question?</p>
                    <h2 className='text-2xl font-bold'>+2546-251-2658</h2>
                </div>
            </div>
            <div className='flex gap-3 md:mb-0'>
                 <img loading="lazy" src="./assets/icons/location.png" className='w-1/6 h-full object-contain' alt="" />
                <div>
                    <p className='text-sm'>Need a repair? our address</p>
                    <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;