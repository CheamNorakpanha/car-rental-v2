import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="bg-zinc-800 text-white py-8">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-gray-400">QuadWheel is your trusted partner for car rentals. We offer a wide selection of vehicles for all your driving needs.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-gray-400 hover:text-[#FB9733]">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-gray-400 hover:text-[#FB9733]">About</Link>
                                </li>
                                <li>
                                    <Link to="/services" className="text-gray-400 hover:text-[#FB9733]">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-gray-400 hover:text-[#FB9733]">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <address className="text-gray-400">
                                <p>123 National Road 6, Phnom Penh, Cambodia</p>
                                <p>Phone: +855 12 345 678</p>
                                <p>Email: info@quadwheel.kh</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <form className="flex">
                                <input type="email" placeholder="Your email" className="text-zinc-800 flex-grow p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                                <button type="submit" className="bg-[#FB9733] text-white p-2 rounded-r-md transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; 2024 QuadWheel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}