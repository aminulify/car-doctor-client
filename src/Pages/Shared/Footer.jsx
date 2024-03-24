import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div data-aos="fade-up" className='bg-slate-800 text-white'>
            <footer className="footer py-10 px-20">
  <aside>
    <Link to="/"><img src="../../../public/assets/logodark.svg" className='w-20' alt="logo" /></Link>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer font-bold">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer font-bold">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer font-bold">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        <p className='text-center py-2'><small>&copy; Car Doctor Reserved For 2024</small></p>
        </div>
    );
};

export default Footer;