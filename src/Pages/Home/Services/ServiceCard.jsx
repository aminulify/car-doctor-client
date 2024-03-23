import { IoIosArrowDropright } from "react-icons/io";

const ServiceCard = ({service}) => {
    const {img, title, price} = service;
    return (
        <div className="zoom-img p-5 border rounded-md hover:border-[var(--mainColor)] hover:duration-500">
            <div className="image-hover-zoom"><img src={img} className="w-full h-[200px] object-cover" alt="service_image" /></div>
            <h1 className="text-left mt-2 text-xl font-bold">{title}</h1>
            <div className="flex justify-between items-center">
                <p className="font-bold text-[var(--mainColor)] py-1">Price: ${price}</p>
                <div className="text-2xl text-[var(--mainColor)] hover:text-slate-800 hover:duration-500"><IoIosArrowDropright/></div>
            </div>
        </div>
    );
};

export default ServiceCard;