// Import necessary components and products
import ProductCard from "./ProductCard"; 
import products from "@/lib/products"; 
import SectionTitle from "../shared/SectionTitle"; 
import Link from "next/link"; 

const Products = () => { 
    return ( 
        <div> 
            {/* Header Section */}
            <div> 
                <SectionTitle 
                    heading="Popular Products" 
                    title="Browse Our Products" 
                    description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable." 
                /> 
            </div> 

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16"> 
                { 
                    // Map through products array and render a ProductCard for each product
                    products.map((product, idx) => ( 
                        <ProductCard key={idx} product={product} /> 
                    )) 
                } 
            </div> 

            {/* Link to More Products */}
            <div className="flex justify-center"> 
                <Link 
                    href="/" 
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary hover:text-white border border-primary rounded-lg hover:bg-primary hover:border-none focus:ring-4 focus:ring-gray-100" 
                > 
                    More Products 
                </Link> 
            </div> 
        </div> 
    ); 
}; 

export default Products;
