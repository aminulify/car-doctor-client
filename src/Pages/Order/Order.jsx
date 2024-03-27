import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PrivateNavbar from '../../PrivateRoutes/PrivateNavbar';
import Footer from '../Shared/Footer';
import OrderMaping from './OrderMaping';
import Swal from 'sweetalert2';
import { IoCloseCircle } from "react-icons/io5";

const Order = () => {
    const {user} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:5000/booking?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
            setLoading(false);
        });
    },[orders])

    // delete data service 
    const handleDeleteService = (_id) =>{

        Swal.fire({
            title: `"Are you sure? Delete it!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff3811",
            cancelButtonColor: "#000000",
            confirmButtonText: "Delete"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${_id}`,{
                    method: "DELETE",
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data);
                    if(data.deletedCount>0){
                        const remaining = orders.filter(order=> order._id!==_id);
                        setOrders(remaining);
                    }
                });
            }
          });
        
        

    }

    const [shareId, setShareId] = useState(null);
    // console.log(shareId);

    // update modal
    const [updateModal, setUpdateModal] = useState(false);
    const [updateDataShow, setUpdateDataShow] = useState([]);


    // update / edit 
    const handleEditService = (_id)=>{
        setShareId(_id);
        setShowModal(false); //off details modal
        setUpdateModal(true);

        fetch(`http://localhost:5000/booking/${_id}`)
        .then(res=>res.json())
        .then(data=>setUpdateDataShow(data));  

        window.scrollTo(0,0);    
    }
    
    // update data 
    const handleUpdateData = (e) =>{
        e.preventDefault();
        const field = e.target;
        const name = field.name.value;
        const email = field.email.value;
        const date = field.date.value;
        const service = field.service.value;
        const phone = field.phone.value;
        const dueAmount= field.dueAmount.value;
        const massage = field.massage.value;

        const update = {name, email, date, service, dueAmount, massage, phone};
        console.log(update);

        fetch(`http://localhost:5000/booking/${shareId}`,{
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(update)
            })
            .then(res=>res.json())
            .then(data=> {
                // console.log(data);
                if(data.modifiedCount>0){

                    // update status 
                    const remaining = orders.filter(order=>order._id !== shareId);
                    const update = orders.find(updateOrder=>updateOrder._id === shareId);

                    const updatedItems = [update, ...remaining];
                    setOrders(updatedItems);

                    Swal.fire({
                        title:"Congratulation! Updated Successfully.",
                        confirmButtonText:"OK",
                        confirmButtonColor: "#ff3811"
                        
                })

               
                } 
            });
            setUpdateModal(false);

    }


    // details modal 
    const [showModal, setShowModal] = useState(false);
    const [getData, setGetData] = useState([]);


    const handleDetailsModal = (_id) =>{
        setUpdateModal(false); //off edit/update modal
        setShowModal(true);
        
        const filterModal = orders.filter(data=>data._id===_id);
        setGetData(filterModal[0]);   
        
        window.scrollTo(0,0)
    }

    const handleClose = () =>{
        setShowModal(false);
    }
    const handleUpdateClose = ()=>{
        setUpdateModal(false);
    }

    // confirm button 
    const handleConfirm = (_id) =>{
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#22c55e",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${_id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({status: 'Confirm'})
            })
            .then(res=>res.json())
            .then(data=> {console.log(data)
                if(data.modifiedCount>0){
                    // update status 
                    const remaining = orders.filter(order=>order._id !== _id);
                    const update = orders.find(updateOrder=>updateOrder._id === _id);

                    const updatedItems = [update, ...remaining];
                    setOrders(updatedItems);
                }
            });
              Swal.fire({
                title: "Approved",
                text: "Appointment Approval Successfully",
                icon: "success",
                confirmButtonColor: "#ff3811"
              });
            }
          });

        
    }
    
    return (
        <div>
            {/* spinner  */}
            {
                loading ? <span className="absolute top-[70%] z-30 left-[50%] translate-x-[-50%] loading loading-dots bg-[var(--mainColor)] w-[80px]"></span> : ''
            }


            {/* modal  */}
            <div className=''>
            {
               showModal && <div className='absolute w-full z-10 left-1/2 translate-x-[-50%]'>
                    
                    <div className='relative grid mx-10  md:mx-48 lg:mx-72 md:mt-20 mt-28 justify-center rounded-xl p-6 bg-[#fcf1ef] first-line:border shadow-lg bg-opacity-70 backdrop-blur-lg'>
                        {/* close  */}
                         <div onClick={handleClose} className='text-red-500 z-20 absolute text-4xl bg-white rounded-full -right-5 -top-5 cursor-pointer'><IoCloseCircle/></div>

                        <img src={getData.photoURL} className='rounded-md' alt="" />
                        <h1 className='text-left text-xl mt-2 font-bold'>{getData.service}</h1>
                        <p className='font-medium text-sm mt-2'>Name: {getData.name}</p>
                        <p className='font-medium text-sm'>Email: {getData.email}</p>
                        <p className='font-medium text-sm'>Appointment Date: {getData.date}</p>
                        <p className='font-medium text-sm'>Phone: {getData.phone}</p>
                        <p className='font-medium text-sm'>Due Amount: <span className='font-bold'>${getData.dueAmount}</span></p>
                        <p className='text-sm'>My Note: {getData.massage}</p>
                        
                        <div className='grid grid-cols-2 gap-5 mt-3'>
                            <button onClick={()=>handleEditService(getData._id)} className='w-full py-3 text-white bg-[var(--mainColor)] rounded-sm font-medium hover:bg-black hover:duration-500'>Edit</button>

                            <button onClick={()=>handleDeleteService(getData._id)} className='py-2 w-full border-2 border-[var(--mainColor)] font-semibold text-md text-[var(--mainColor)] hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'>Delete</button>
                        </div>
                        
                    </div>
               </div> 
            }
            </div>

            {/* update modal  */} 
            {/* update modal  */} 
            <div>
                {
                    updateModal && <div className='relative w-full z-10 left-1/2 translate-x-[-50%]'>

                    {/* close  */}        
                    <div className='absolute w-[80%] md:w-[50%] grid left-1/2 translate-x-[-50%] md:mt-20 mt-28 rounded-xl bg-black shadow-lg bg-opacity-5 backdrop-blur-xl'>
                        {/* update form  */}
                         {/* form section */}
                         <div onClick={handleUpdateClose} className='text-red-500 z-20 absolute text-4xl bg-white rounded-full -right-5 -top-5 cursor-pointer'><IoCloseCircle/></div>
                <form onSubmit={handleUpdateData} data-aos="fade-right" className=' p-5 rounded-xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                        <input type="text" name='name' placeholder='Your Name' defaultValue={updateDataShow.name}  className='py-3 pl-2 rounded-md' />

                        {/* **** npm day-picker = react has stylist date picker component */}
                        <input type={`text`} name='date' defaultValue={updateDataShow.date} className={`py-3 px-2 rounded-md`} />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                        <input type="text" name='phone' defaultValue={updateDataShow.phone} placeholder='Your Phone' className='py-3 pl-2 rounded-md' />
                        <input type="text" name='email' defaultValue={updateDataShow.email}  placeholder='Your Email' className='py-3 pl-2 rounded-md' readOnly />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                        <input type="text" name='service' defaultValue={updateDataShow.service} className='py-3 pl-2 rounded-md' readOnly/>
                        <input type="text" name='dueAmount' defaultValue={updateDataShow.dueAmount} className='py-3 pl-2 rounded-md' readOnly/>
                    </div>
                    <textarea name="massage" id="" className='w-full p-2' rows="8" placeholder='Write about your car...' defaultValue={updateDataShow.massage}></textarea>

                
                        
                        <div className='flex w-full mt-3'>
                            <button className='w-full py-3 text-white bg-[var(--mainColor)] rounded-sm font-medium hover:bg-black hover:duration-500'>Update</button>

                        </div>
                        </form>

                    </div>
               </div> 
                    
                }
            </div>

            {/* private navbar  */}
            <PrivateNavbar></PrivateNavbar>

            
            
            <div className='lg:mx-20 md:mx-8 mx-5'>
                 {/* header img */}
            <div data-aos="fade-down" className='relative mt-3 md:mb-16 mb-8'>
                <img src="../../../../public/assets/images/checkout/checkout.png" alt="" className='rounded-lg h-[200px] md:h-full w-full object-cover '/>

                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(0, 0, 0, 0.5)] rounded-xl w-full h-full top-0'>
                    <h1 className=' absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-150%] md:translate-y-[-220%] text-center text-3xl md:text-6xl font-bold text-white md:mt-24 my-6'>Manage Order</h1>
                    <div className="absolute left-1/2 bottom-0 translate-x-[-50%]">
                        <div className='relative w-[350px] md:w-[450px] border-b-[40px] md:border-b-[40px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[var(--mainColor)]'><h1 className="absolute md:text-xl text-md font-bold text-white top-[5px] left-1/2 translate-x-[-50%]">Home - Order</h1></div>
                    </div>
                </div>
            </div>
                
                <div className='mb-16'>
                {
                    orders.map(order=><OrderMaping
                    key={order._id}
                    order={order}
                    handleDetailsModal={handleDetailsModal}
                    handleDeleteService={handleDeleteService}
                    handleEditService={handleEditService}
                    handleConfirm={handleConfirm}
                   
                
                    ></OrderMaping>)
                }
                
                </div>
            </div>

            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default Order;