import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // For category dropdown

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Navigation links array
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Category', href: '#' }, // This will be the dropdown button
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' },
    ];

    // Category sub-links array
    const furnitureLinks = [
        { name: 'Living Room', href: '/' },
        { name: 'Bedroom', href: '/bedsheet' },
    ];

    return (
        <nav className="bg-white shadow-md top-0 left-0 right-0">
            {/* Top section with logo and icons */}
            <div className="border-b border-gray-200">
                <div className="container px-4 flex justify-between items-center md:px-28">
                    {/* Hamburger menu for mobile */}
                    <FiMenu className="w-6 h-6 md:hidden cursor-pointer hover:text-orange-600 transition-colors duration-300" onClick={toggleMenu} />
                    {/* Logo */}
                    <Link to={'/'} className="flex items-center">
                        <img src="/zufalogo.png" alt="Furns" className="h-24 w-32 mr-3" />
                    </Link>

                    {/* Icons */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <FiSearch className="w-5 h-4 text-gray-700 md:w-6 md:h-6 cursor-pointer hover:text-orange-600 transition-colors duration-300" />
                        <FiUser className="w-5 h-4 text-gray-700 md:w-6 md:h-6 cursor-pointer hover:text-orange-600 transition-colors duration-300" />
                        <Link to={'/cart'} className="relative">
                            <FiShoppingBag className="w-5 h-4 text-gray-700 md:w-6 md:h-6 cursor-pointer hover:text-orange-600 transition-colors duration-300" />
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1">0</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex bg-gray-800">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-center space-x-12 text-white">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.name === 'Category' && setDropdownOpen(true)} // Open dropdown on mouse enter
                                onMouseLeave={() => link.name === 'Category' && setDropdownOpen(false)} // Close dropdown on mouse leave
                            >
                                {/* Render dropdown button if link is 'Category' */}
                                {link.name === 'Category' ? (
                                    <button className="flex items-center hover:text-orange-600 transition-colors duration-300">
                                        {link.name}
                                        <FiChevronDown className="ml-1 w-4 h-4" /> {/* Sub-dropdown icon */}
                                    </button>
                                ) : (
                                    <a href={link.href} className="hover:text-orange-600 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                )}
                                {link.name === 'Category' && dropdownOpen && (
                                    <div className="absolute z-10 bg-white shadow-lg w-40 py-2 mt-1"> {/* Added z-10 here */}
                                        {furnitureLinks.map((subLink) => (
                                            <a key={subLink.name} href={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-400 transition-colors duration-300">
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
                                onClick={() => link.name === 'Category' && setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
                            >
                                {/* Render dropdown button if link is 'Category' */}
                                {link.name === 'Category' ? (
                                    <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
                                        {link.name}
                                        <FiChevronDown className="ml-1 w-4 h-4 inline" /> {/* Sub-dropdown icon */}
                                    </button>
                                ) : (
                                    <a href={link.href} className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                )}
                                {link.name === 'Category' && dropdownOpen && (
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
