import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Layout from "../Components/Layout/Layout";
import PageBanner from "../Components/PageBanner";

const CartPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([{ id: 1, name: "Quality House Storage Grey Leather Double Bed", price: 970 }]);

    const price = cartItems.length > 0 ? cartItems[0].price : 0;
    const subtotal = price * quantity;

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <Layout>
            <PageBanner name={'Cart'} path={'/ Cart'} />
            <div className="max-w-4xl my-10 mx-auto p-4 md:p-8 bg-white rounded shadow-lg">
                {cartItems.length > 0 ? (
                    <>
                        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Shopping Cart</h1>

                        {/* Cart Table */}
                        <table className="min-w-full bg-white border border-gray-300 mb-6 rounded-lg shadow-sm text-xs sm:text-sm lg:text-base">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-600 font-semibold">IMAGE</th>
                                    <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-600 font-semibold">PRODUCT NAME</th>
                                    <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-600 font-semibold">UNIT PRICE</th>
                                    <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-600 font-semibold">QTY</th>
                                    <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-600 font-semibold">SUBTOTAL</th>
                                    <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-gray-600 font-semibold">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t hover:bg-gray-50">
                                    <td className="px-2 sm:px-4 lg:px-6 py-3">
                                        <img
                                            src="/images/pillow6.jpg" // replace with actual image
                                            alt="Product"
                                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded"
                                        />
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 text-gray-800 font-medium">
                                        {cartItems[0].name}
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 text-gray-800">${price.toFixed(2)}</td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 flex items-center space-x-1 sm:space-x-2">
                                        <button
                                            className="border border-gray-300 px-2 py-1 sm:px-3 hover:bg-gray-200 rounded"
                                            onClick={decrementQuantity}
                                        >
                                            -
                                        </button>
                                        <span className="px-2">{quantity}</span>
                                        <button
                                            className="border border-gray-300 px-2 py-1 sm:px-3 hover:bg-gray-200 rounded"
                                            onClick={incrementQuantity}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 text-gray-800 font-semibold">
                                        ${subtotal.toFixed(2)}
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 flex space-x-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-gray-500 hover:text-red-600">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Grand Total and Actions */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                            <p className="text-lg sm:text-xl font-semibold">Grand Total:</p>
                            <p className="text-2xl sm:text-3xl font-bold">${subtotal.toFixed(2)}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={handleClearCart}
                                className="bg-red-500 w-full sm:w-auto text-white px-6 py-3 rounded shadow hover:bg-red-600 transition duration-300"
                            >
                                CLEAR CART
                            </button>
                            <button className="bg-green-500 w-full sm:w-auto text-white px-6 py-3 rounded shadow hover:bg-green-600 transition duration-300">
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-96">
                        <FaShoppingCart className="text-8xl sm:text-9xl text-gray-400 mb-6" />
                        <p className="text-xl sm:text-2xl font-semibold text-gray-600">
                            Nothing is in the cart
                        </p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CartPage;
