import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, moreDetailsUser, googleAuthPopUp, facebookAuthPop, user} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(null);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    // email/password auth 
    const handleRegister = (event) =>{
        event.preventDefault();
        setPasswordError();

        const field = event.target;
        const name = field.name.value;
        const email = field.email.value;
        const password = field.password.value;
        console.log(name,email,password);

        if(password.length<6){
            setPasswordError("Password should be more than 6 character!")
        }

        createUser(email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            // alert('good');

            moreDetailsUser(name)
            .then((result)=>{
                Swal.fire({
                    title: "Congratulations!",
                    text: "Registration Completed",
                    icon: "success",
                    confirmButtonText: "Done",
                    confirmButtonColor: "#ff3811",
                  });
                 
            })
            .catch(e=>console.log("normal",e));     
            
            
             // jwt security access use on AuthProvider as a global
            navigate(from, { replace: true });
            })

         .catch(e=>console.log("main",e));   
    }
    // google 
    const handleGoogleAuth = () =>{
        googleAuthPopUp()
        .then((result)=>{
            const user = result.user;  
            // console.log(user); 

            Swal.fire({
                title: "Congratulations!",
                text: "Registration Completed With Google",
                icon: "success",
                confirmButtonText: "Done",
                confirmButtonColor: "#ff3811",
              });

             // jwt security access use on AuthProvider as a global
            navigate(from, { replace: true });


        })
        .catch(e=>console.log("normal",e)); 
        
    }
    // facebook 
    const handleFbAuth = () =>{
        facebookAuthPop()
        .then((result)=>{
            const user = result.user;
            // console.log(user);

            Swal.fire({
                title: "Congratulations!",
                text: "Registration Completed With Facebook",
                icon: "success",
                confirmButtonText: "Done",
                confirmButtonColor: "#ff3811",
              });

              // jwt security access use on AuthProvider as a global
            navigate(from, { replace: true });


        })
        .catch(e=>console.log("normal",e)); 
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-20 mx-5 md:py-10 mb-10 items-center mt-3 md:mt-0 overflow-hidden'>
        <div>
            <form data-aos="fade-right" onSubmit={handleRegister} className='border bg-white md:px-20 px-12'>
                <h1 className='text-center py-8 text-4xl font-bold text-slate-800'>Register</h1>
               
                <div>
                <label className='font-medium text-slate-700'>Name</label>
                <input type="text" placeholder='Name' name='name' className='rounded-sm border py-2 w-full pl-1 bg-white' required/>
                </div>

                <div className='my-3'>
                <label className='font-medium text-slate-700'>Email</label>
                <input type="text" placeholder='Email' name='email' className='rounded-sm border py-2 w-full pl-1 bg-white' required/>
                </div>
                
                <div>
                <label className='font-medium text-slate-700'>Password</label>
                <input type="password" placeholder='Password should be more than 6 Character' name='password' className='rounded-sm border py-2 w-full pl-1 bg-white'/>
                <label className='text-red-500 text-sm'>{passwordError}</label>
                </div>

                <button className='w-full py-2 mt-5 bg-[var(--mainColor)] font-semibold text-white   rounded-sm border-2 border-[var(--mainColor)] hover:bg-white hover:text-[var(--mainColor)] hover:duration-500'>Register</button>
                
            </form>

            <p className='text-center py-4 text-sm font-medium text-slate-400'>Or Login With</p>
                <div className='flex justify-center gap-3'>
                    <button onClick={handleGoogleAuth} className='p-1 border rounded-full  border-black hover:border-[var(--mainColor)] hover:duration-500'>
                        <img src="./assets/images/login/g.png" className='w-10' alt="" />
                    </button>
                    <button onClick={handleFbAuth} className='p-1 border rounded-full  border-black hover:border-[var(--mainColor)] hover:duration-500'>
                        <img src="./assets/images/login/fb.png" className='w-10' alt="" />
                    </button>

                </div>
                <p className='text-center text-sm text-slate-500 text-medium py-4 mb-10'>Have an account? <Link to="/login"><span className='font-semibold text-[var(--mainColor)] underline'>Login</span></Link></p>
                </div>

            <div data-aos="fade-left" className='flex justify-center'>
                <img src="./assets/images/login/login.svg" alt="" className='md:w-[80%] md:block hidden'/>
            </div>
        </div>
    );
};

export default Register;