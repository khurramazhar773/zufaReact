import React from 'react'

const LineBar = ({ product }) => {
    return (
        <div className='mb-5'>
            {/* Bar Section */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 h-auto md:h-16 mx-5 md:mx-14 mt-4 md:mt-5 p-4 md:p-0 space-y-4 md:space-y-0">
                <p className="ml-0 md:ml-7 text-center md:text-left">
                    Showing {product} Product
                </p>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 mr-8">
                    <p className="mt-1">Sort By</p>
                    <input
                        className="p-2 border rounded w-full md:w-auto"
                        type="text"
                        placeholder="items"
                    />
                </div>
            </div>
        </div>

    )
}

export default LineBar