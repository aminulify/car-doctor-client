import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUser} = useContext(AuthContext);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        const field = event.target;
        const email = field.email.value;
        const password = field.password.value;

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Congratulations!",
                text: "Login Successfully",
                icon: "success",
                confirmButtonText: "Done",
                confirmButtonColor: "#ff3811",
              });
        
        
            // jwt security access use on AuthProvider as a global
            
                navigate(from);
                window.scrollTo(0,0);
        })
        .catch(e=>console.log(e));
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-20 mx-5 md:py-10 mb-10 items-center overflow-hidden'>
            <div data-aos="fade-right" className='flex justify-center'>
                <img src="./assets/images/login/login.svg" alt="" className='md:w-[80%] md:block hidden'/>
            </div>
            <form data-aos="fade-left" onSubmit={handleLogin} className='border bg-white md:px-20 px-12'>
                <h1 className='text-center py-8 text-4xl font-bold text-slate-800'>Login</h1>
               
                <div>
                <label className='font-medium text-slate-700'>Email</label>
                <input type="text" placeholder='Email' name='email' className='rounded-sm border py-2 w-full pl-1 bg-white'/>
                </div>
                
                <div className='mt-3'>
                <label className='font-medium text-slate-700'>Password</label>
                <input type="password" placeholder='Password' name='password' className='rounded-sm border py-2 w-full pl-1 bg-white'/>
                </div>

                <button className='w-full py-2 mt-5 bg-[var(--mainColor)] font-semibold text-white   rounded-sm border-2 border-[var(--mainColor)] hover:bg-white hover:text-[var(--mainColor)] hover:duration-500'>Login</button>
                
                <p className='text-center text-sm text-slate-500 text-medium py-4 mb-10'>Are You New User? <Link to="/register"><span className='font-semibold text-[var(--mainColor)] underline'>Register Now</span></Link></p>
            </form>
        </div>
    );
};

export default Login;