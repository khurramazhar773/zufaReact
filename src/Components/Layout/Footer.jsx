import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8 px-4">
            <div className="container mx-auto flex justify-between flex-wrap">

                {/* About Us Section */}
                <div className="flex flex-col  -mt-8">
                    <img
                        src="/zufalogo.png"
                        alt="Zufa Logo"
                        className="w-48 mb-0" // Smaller size for the logo
                    />
                    <p className="text-sm leading-relaxed max-w-xs -mt-12">
                        ZUFA is an e-commerce platform delivering unique products, promising a seamless shopping experience for everyone.
                    </p>
                </div>

                {/* Information Section */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-4">INFORMATION</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to={'/about'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Tracking Order
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Privacy & Policy
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* My Account Section */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-4">MY ACCOUNT</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to={'/cart'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                My Cart
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                Compare
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-orange-500 hover:px-2 transition-all duration-300">
                                My Account
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-4">NEWSLETTER</h2>
                    <p className="text-sm mb-4">Enter E-Mail Address</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter E-Mail Address"
                            className="w-full px-3 py-2 rounded-l-lg focus:outline-none"
                        />
                        <button className="bg-orange-500 px-4 py-2 rounded-r-lg text-white hover:bg-orange-600">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 flex justify-evenly">
                <p>
                    © 2024 Zufa. All Right Reserved
                </p>
                <p>
                    Developed and Maintained By : 
                    <Link to="https://csoftsystems.com/" className="text-orange-500 hover:underline">
                        Csoft Systems
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
