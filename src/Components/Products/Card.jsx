import React from 'react';
import { FaHeart, FaExpand, FaLink } from 'react-icons/fa'; // Icons from react-icons

const Card = () => {
    return (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative group">
                {/* Product Image */}
                <img
                    src="https://via.placeholder.com/300x200" // Replace with your image
                    alt="Living Room Set"
                    className="w-full h-48 object-cover"
                />

                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-4">
                    <button className="p-2 bg-white rounded-full">
                        <FaHeart className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full">
                        <FaExpand className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full">
                        <FaLink className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-gray-900 text-lg font-semibold">Living Room Sets</h3>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-400 line-through">$1520.0</span>
                    <span className="text-gray-800 font-bold">$1540.0</span>
                </div>

                {/* Add to Cart Button */}
                <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
