import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // For furniture dropdown

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Navigation links array
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Furniture', href: '#' }, // This will be the dropdown button
        { name: 'About', href: '/' },
        { name: 'Office Furniture', href: '/' },
        { name: 'Hospital Furniture', href: '/' },
        { name: 'Contact', href: '/contact' },
    ];

    // Furniture sub-links array
    const furnitureLinks = [
        { name: 'Living Room', href: '/' },
        { name: 'Bedroom', href: '/' },
    ];

    return (
        <nav className="bg-white shadow-md top-0 left-0 right-0 z-50">
            {/* Top section with logo and icons */}
            <div className="border-b border-gray-200">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Hamburger menu for mobile */}
                    <FiMenu className="w-6 h-6 md:hidden cursor-pointer hover:text-orange-600 transition-colors duration-300" onClick={toggleMenu} />
                    {/* Logo */}
                    <div className="flex items-center">
                        {/* <img src="/logo.png" alt="Furns" className="h-8 mr-3" /> */}
                        <span className="text-2xl font-bold text-orange-600">ZUFA</span>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <FiSearch className="w-5 h-5 text-gray-700 md:w-6 md:h-6 cursor-pointer hover:text-orange-600 transition-colors duration-300" />
                        <FiUser className="w-5 h-5 text-gray-700 md:w-6 md:h-6 cursor-pointer hover:text-orange-600 transition-colors duration-300" />
                        <div className="relative">
                            <FiShoppingBag className="w-5 h-5 text-gray-700 md:w-6 md:h-6 cursor-pointer hover:text-orange-600 transition-colors duration-300" />
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1">0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex bg-gray-800">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-center space-x-8 text-white">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.name === 'Furniture' && setDropdownOpen(true)} // Open dropdown on mouse enter
                                onMouseLeave={() => link.name === 'Furniture' && setDropdownOpen(false)} // Close dropdown on mouse leave
                            >
                                {/* Render dropdown button if link is 'Furniture' */}
                                {link.name === 'Furniture' ? (
                                    <button className="flex items-center hover:text-orange-600 transition-colors duration-300">
                                        {link.name}
                                        <FiChevronDown className="ml-1 w-4 h-4" /> {/* Sub-dropdown icon */}
                                    </button>
                                ) : (
                                    <a href={link.href} className="hover:text-orange-600 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                )}
                                {link.name === 'Furniture' && dropdownOpen && (
                                    <div className="absolute bg-white shadow-lg py-2 mt-1">
                                        {furnitureLinks.map((subLink) => (
                                            <a key={subLink.name} href={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                                                {subLink.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Toggleable */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="py-3 space-y-2">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onClick={() => link.name === 'Furniture' && setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
                            >
                                {/* Render dropdown button if link is 'Furniture' */}
                                {link.name === 'Furniture' ? (
                                    <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
                                        {link.name}
                                        <FiChevronDown className="ml-1 w-4 h-4 inline" /> {/* Sub-dropdown icon */}
                                    </button>
                                ) : (
                                    <a href={link.href} className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                )}
                                {link.name === 'Furniture' && dropdownOpen && (
                                    <div className="bg-gray-700">
                                        {furnitureLinks.map((subLink) => (
                                            <a key={subLink.name} href={subLink.href} className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors duration-300">
                                                {subLink.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
