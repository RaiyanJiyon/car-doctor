// Import Next.js Image component and an icon from react-icons
import Image from "next/image"; 
import { PiHandbag } from "react-icons/pi"; 

const ProductCard = ({ product }) => { 
    return ( 
        <div className="bg-white shadow-lg rounded-xl p-4 border border-[#e8e8e8]">
            {/* Product Image */}
            <div className="relative rounded-lg bg-[#F3F3F3]"> 
                <Image 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-40 object-contain rounded-lg p-4" // Use `object-contain` for better cropping 
                    width={400} // Adjust based on your design 
                    height={160} 
                /> 

                {/* Icon */}
                <div className="absolute top-5 right-3 bg-white hover:bg-primary text-primary hover:text-white p-3 rounded-lg"> 
                    <PiHandbag className="" /> 
                </div> 
            </div> 

            {/* Product Details */}
            <div className="mt-4"> 
                <h2 className="text-lg font-semibold">{product.title}</h2> 
                <p className="text-red-500 font-bold">${product.price}</p> 
            </div> 
        </div> 
    ); 
}; 

export default ProductCard;
