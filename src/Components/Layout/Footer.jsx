import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8 px-2">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:px-10">
                {/* About Us Section */}
                <div className="flex justify-center items-center">
                    <img src="/zufalogo.png" alt="" />


                </div>

                {/* Information Section */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-4">INFORMATION</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Manufacturers</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Tracking Order</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Privacy & Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>

                {/* My Account Section */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-4">MY ACCOUNT</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Login</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">My Cart</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Wishlist</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">Compare</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500 hover:px-2 ">My Account</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h2 className="text-white text-lg font-bold mb-4">NEWSLETTER</h2>
                    <p className="text-sm mb-4">Enter E-Mail Address</p>
                    <div className="flex px-5 md:px-0">
                        <input
                            type="email"
                            placeholder="Enter E-Mail Address"
                            className="w-full px-3 py-2 rounded-l-lg focus:outline-none"
                        />
                        <button className="bg-orange-500 px-4 py-2 rounded-r-lg text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>
                    © 2024 Zufa. Made with <span className="text-red-500">❤</span> by
                    <Link to={'https://baigdevlab.netlify.app/'}>BaigDevLab</Link>
                </p>

            </div>
        </footer>
    );
};

export default Footer;
