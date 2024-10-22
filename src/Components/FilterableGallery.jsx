import React, { useState } from 'react';
import ProductCard from './Products/ProductCard';
import product from '../Constants/Products'

const FilterableGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? product
        : product.filter(product => product.catogeries === selectedCategory);

    return (
        <div className="p-4">
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-7">
                <button
                    onClick={() => setSelectedCategory('All')}
                    className={`py-2 px-4 ${selectedCategory === 'All' ? 'bg-orange-400 text-white' : 'bg-gray-200'} rounded`}>
                    All
                </button>
                {product.map}
                <button
                    onClick={() => setSelectedCategory('Pillow-Cover')}
                    className={`py-2 px-4 ${selectedCategory === 'Pillow-Cover' ? 'bg-orange-400 text-white' : 'bg-gray-200'} rounded`}>
                    Pillow Cover
                </button>
                <button
                    onClick={() => setSelectedCategory('BedSheet')}
                    className={`py-2 px-4 ${selectedCategory === 'BedSheet' ? 'bg-orange-400 text-white' : 'bg-gray-200'} rounded`}>
                    BedSheet
                </button>
                <button
                    onClick={() => setSelectedCategory('SofaCover')}
                    className={`py-2 px-4 ${selectedCategory === 'SofaCover' ? 'bg-orange-400 text-white' : 'bg-gray-200'} rounded`}>
                    SofaCover
                </button>
            </div>

            {/* Gallery */}
            <div className="flex justify-center items-center flex-wrap gap-5">
                {filteredProducts.map(product => (

                    <ProductCard key={product.id} prop={product} />
                    // <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
                    //     <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
                    //     <h2 className="text-lg font-semibold">{product.name}</h2>
                    //     <p className="text-gray-500">{product.category}</p>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default FilterableGallery;
