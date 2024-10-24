import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaTumblr, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto my-8 p-4">
            {/* Contact Info */}
            <div className="bg-[#fdf1e5] p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Contact Info</h2>
                <p className="text-slate-500 mb-4">
                   Feel free to contact us.
                </p>

                <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center">
                        <FaPhone className="text-orange-500 mr-4" />
                        <span className="text-slate-600">+00 125 458 222</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                        <FaEnvelope className="text-orange-500 mr-4" />
                        <span className="text-slate-600">demo@yourmail.com</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-orange-500 mr-4" />
                        <span className="text-slate-600">Your Address Goes Here</span>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 mt-6 text-orange-500">
                    <Link to="/twitter" aria-label="Twitter">
                        <FaTwitter />
                    </Link>
                    <Link to="/tumblr" aria-label="Tumblr">
                        <FaTumblr />
                    </Link>
                    <Link to="/instagram" aria-label="Instagram">
                        <FaInstagram />
                    </Link>
                    <Link to="/facebook" aria-label="Facebook">
                        <FaFacebook />
                    </Link>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                    <div className="mb-4">
                        <label className="block text-slate-600 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 focus:border-orange-500"
                            placeholder="Your name..."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-600 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 focus:border-orange-500"
                            placeholder="Your email..."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-600 mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 focus:border-orange-500"
                            placeholder="Your message..."
                            rows="5"
                        ></textarea>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">Send</button>
                </form>
            </div>


            {/* Google Map */}
            <div className="col-span-1 md:col-span-2 mt-8">
                <iframe
                    className="w-full h-64 rounded-lg shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.7533620881!2d-74.0638989!3d40.7306108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQ5LjciTiA3NMKwMDcnMzEuNyJX!5e0!3m2!1sen!2sus!4v1615177767751!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactForm;
