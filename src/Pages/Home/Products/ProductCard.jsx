import React from 'react';
import Rating from 'react-rating';
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = ({product}) => {
    const {price, title, rating, img} = product;
    return (
        <div className="zoom-img p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500 text-center">
            <div className='relative image-hover-zoom'>
                <img src={img} className=" bg-slate-50 w-full h-[300px] object-cover rounded-md" alt="service_image" />

                {/* shopping btn  */}
                <Link to="/"><button className='absolute top-3 right-3 text-[var(--mainColor)] text-xl p-2 bg-[#fce2de] rounded-md hover:text-white hover:bg-[var(--mainColor)] hover:duration-500'><HiOutlineShoppingBag/></button></Link>
            </div>

            {/* rating  */}
            <div className='text-orange-400 mt-4 text-2xl'>
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<IoMdStarOutline/>}
                    placeholderSymbol={<IoMdStar/>}
                    fullSymbol={<IoMdStar/>}
                    readonly
                    />
            </div>
            <h1 className="text-xl font-bold">{title}</h1>
          
            <p className="font-bold text-[var(--mainColor)] py-1">Price: ${price}</p>
            
            
        </div>
    );
};

export default ProductCard;