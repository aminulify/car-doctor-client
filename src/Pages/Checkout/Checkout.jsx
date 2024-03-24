import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import PrivateNavbar from '../../PrivateRoutes/PrivateNavbar';

const Checkout = () => {
    const id = useParams();

    const loadSingleData = useLoaderData();
    const {_id, title, img, price} = loadSingleData;

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div>
            {/* private navbar  */}
            <PrivateNavbar></PrivateNavbar>

           <div className='md:mx-8 lg:mx-20 mx-5 overflow-hidden'>
                {/* header img */}
            <div data-aos="fade-down" className='relative mt-3 md:mb-16 mb-8'>
                <img src="../../../../public/assets/images/checkout/checkout.png" alt="" className='rounded-lg h-[200px] md:h-full w-full object-cover '/>

                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.5)] rounded-xl w-full h-full top-0'>
                    <h1 className=' absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-150%] md:translate-y-[-220%] text-center text-3xl md:text-6xl font-bold text-white md:mt-24 my-6'>Check Out</h1>
                    <div className="absolute left-1/2 bottom-0 translate-x-[-50%]">
                        <div className='relative w-[350px] md:w-[450px] border-b-[40px] md:border-b-[40px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[var(--mainColor)]'><h1 className="absolute md:text-xl text-md font-bold text-white top-[5px] left-1/2 translate-x-[-50%]">{title}</h1></div>
                    </div>
                </div>
            </div>

                {/* form section */}
                <form data-aos="fade-right" className='mb-10 p-16 bg-slate-100 rounded-xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 mb-5'>
                        <input type="text" name='name' placeholder='Your Name' className='py-3 pl-2 rounded-md' />
                        <input type="date" name='date' className='py-3 px-2 rounded-md' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 mb-5'>
                        <input type="text" name='phone' placeholder='Your Phone' className='py-3 pl-2 rounded-md' />
                        <input type="text" name='email' placeholder='Your Email' className='py-3 pl-2 rounded-md' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 mb-5'>
                        <input type="text" name='service' defaultValue={"Service: "+title} className='py-3 pl-2 rounded-md' readOnly/>
                        <input type="text" name='dueAmount' defaultValue={"Price: $"+price} className='py-3 pl-2 rounded-md' readOnly/>
                    </div>
                    <textarea name="massage" id="" className='w-full p-2' rows="8" placeholder='Your Massage'></textarea>

                    {/* btn  */}
                    <button className='mt-5 py-2 rounded-md w-full border-2 border-[var(--mainColor)] bg-[var(--mainColor)] font-semibold text-white text-lg hover:bg-transparent hover:text-[var(--mainColor)] hover:border-2 hover:border-[var(--mainColor)] hover:duration-500'>Proceed Checkout</button>
                </form>

              
            </div>
              {/* footer  */}
              <Footer></Footer>
        </div>
    );
};

export default Checkout;