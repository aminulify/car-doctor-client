import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import './OrderMaping.css';

const OrderMaping = ({order,handleDetailsModal, handleDeleteService, handleEditService, handleConfirm}) => {
    const {_id, photoURL, email, date, service, dueAmount, status} = order;
    
    return (
        <div data-aos="fade-right" className='mb-10 items-center md:grid md:grid-cols-2 justify-between md:border-none md:p-0 border p-5 md:rounded-none rounded-md'>
            <div className='flex gap-5 items-center'>
                <div className='flex md:flex-col gap-1 md:gap-3'>
                <div onClick={()=>handleDeleteService(_id)} className='text-3xl text-[var(--mainColor)] hover:text-black hover:duration-500 cursor-pointer'><IoCloseCircle/></div>
                <div onClick={()=>handleEditService(_id)} className='text-3xl text-[var(--mainColor)] hover:text-black hover:duration-500 cursor-pointer'><MdEditSquare/></div>
                </div>
                <div className=' flex gap-5 items-center'>
                    <img src={photoURL} className='w-24 h-24 rounded-md object-cover hiddenForPhone' alt="" />
                    <div>
                        <h1 className='text-lg md:text-xl font-bold'>{service}</h1>
                        <p className='font-medium text-slate-500 '>Email: {email}</p>
                    </div>
                </div>
            </div>

            <div className='md:flex md:justify-between gap-20 items-center mt-3'>
                <div className='md:flex md:gap-20 hiddenForPhone'>
                    <div>
                        <h2 className='text-lg font-bold'>${dueAmount}</h2>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium'>{date}</h2>
                    </div>
                </div>
                <div className='grid md:grid-cols-1 grid-cols-2 md:gap-3 gap-5'>
                    {
                        status==='Confirm' ? <button onClick={()=>handleConfirm(_id)} className='px-6 py-3 text-white bg-green-500 rounded-sm font-medium'>Approved</button> : <button onClick={()=>handleConfirm(_id)} className='px-6 py-3 text-white bg-[var(--mainColor)] rounded-sm font-medium'>Pending</button> 
                    }
                    
                    <button onClick={()=>handleDetailsModal(_id)} className='py-2 px-4 border-2 border-[var(--mainColor)] font-semibold text-md text-[var(--mainColor)] hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default OrderMaping;