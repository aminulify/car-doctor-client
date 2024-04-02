import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const ServiceCard = ({service,handleScroll}) => {
    const {_id, img, title, price} = service;
    
    return (
        <Link onClick={handleScroll} to={`/services/${_id}`}>
            <div className="zoom-img p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
            <div className="image-hover-zoom"><img src={img} className="w-full h-[200px] object-cover" alt="service_image" /></div>
            <h1 className="text-left mt-2 text-xl font-bold">{title}</h1>
            <div className="flex justify-between items-center">
                <p className="font-bold text-[var(--mainColor)] py-1">Price: ${price}</p>
                <Link><div className="text-2xl text-[var(--mainColor)] hover:text-slate-800 hover:duration-500"><IoIosArrowDropright/></div></Link>
            </div>
        </div>
        </Link>
    );
};

export default ServiceCard;