import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className='py-10 text-center' id='products'>
            <div data-aos="fade-left">
                <h2 className='font-bold text-lg text-[var(--mainColor)]'>Popular Products</h2>
                <h1 className='font-bold md:text-6xl text-4xl pb-2'>Browser Our Products</h1>
                <p className='md:mx-72 md:mt-3 mb-8 text-sm mx-14'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            {/* product card  */}
            <div data-aos="fade-right" className='grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 mx-8'>
               {
                products.map((product)=><ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>)
               } 
            </div>

            {/* more products btn  */}
            <Link to="/"><button className='mt-5 py-2 px-4 border-2 border-[var(--mainColor)] font-semibold text-md text-[var(--mainColor)] hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'>More Products</button></Link>
        </div>
    );
};

export default Products;