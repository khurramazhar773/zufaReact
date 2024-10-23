import React from 'react';
import { FaHeart, FaExpand, FaLink, FaShoppingCart } from 'react-icons/fa'; // Icons from react-icons
import { Link } from 'react-router-dom';

const ProductCard = ({ prop }) => {
    return (
        <Link to={`/product/${prop.id}`} className="w-72">
            {/* Image and Icons */}
            <div className="relative group ">
                {/* Product Image */}
                <img
                    src={prop.img} // Replace with your image
                    alt="Living Room Set"
                    className="w-full h-[300px] object-cover"
                />

                {/* First Icon (Heart Icon) Visible without Hover */}
                <div className="absolute top-5 right-2">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-400">
                        <FaHeart className="text-gray-600 hover:text-white" />
                    </button>
                </div>

                {/* Other Icons (Visible on Hover) */}
                <div className="absolute top-[34%] right-2 transform -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-400">
                        <FaExpand className="text-gray-600 hover:text-white" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-400">
                        <FaLink className="text-gray-600 hover:text-white" />
                    </button>
                </div>

                {/* Add to Cart Button - Positioned at Bottom on Hover */}
                <div className="absolute bottom-4 left-3 right-3 opacity-0 group-hover:opacity-100 hover:text-orange-600 transition-opacity">
                    <button className="w-full text-lg bg-white text-gray-800 py-2 px-6 rounded-t-lg shadow-lg hover:text-orange-600 transition flex items-center justify-center space-x-2">
                        <FaShoppingCart className="text-gray-600 hover:text-orange-600 transition" />  {/* Cart Icon */}
                        <span className="hover:text-orange-600 transition">Add to Cart</span>
                    </button>
                </div>

            </div>

            {/* Product Info */}
            <div className="p-4 text-center" >
                {/* Product Name */}
                <h3 className="text-gray-900 text-lg font-semibold">{prop.name}</h3>

                {/* Price */}
                <div className="flex items-center  justify-center space-x-2 mt-2">
                    <span className="text-gray-400 line-through">$1520.0</span>
                    <span className="text-gray-800 font-bold">$1540.0</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
