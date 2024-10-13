import React from 'react';
import roadBg from '../../assets/home/road_bg.png';
import { SearchIcon } from 'lucide-react';

export default function Header() {
    return (
        <div>
            <section className="text-white py-20"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${roadBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right bottom',
                }}>
                <div className="max-w-screen-xl container mx-auto px-4">
                    <h1 className="text-7xl md:text-5xl font-bold mb-3 kalam">Find Your <span className='text-[#FB9733]'>Perfect Ride</span></h1>
                    <p className="text-xl mb-8 font-light raleway">Rent a car for your next adventure with ease and comfort</p>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                    Pick-up Location
                                </label>
                                <select id="location" className="w-full p-2 border border-gray-300 rounded-md focus:ring-zinc-800 focus:border-zinc-800 text-zinc-900">
                                    <option value="">Select location</option>
                                    <option value="new-york">New York</option>
                                    <option value="los-angeles">Los Angeles</option>
                                    <option value="chicago">Chicago</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Pick-up Date
                                </label>
                                <div className="relative">
                                    <input type="date" id="pickup-date" className="w-full p-2 border border-gray-300 rounded-md focus:ring-zinc-800 focus:border-zinc-800 text-zinc-900" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Return Date
                                </label>
                                <div className="relative">
                                    <input type="date" id="return-date" className="w-full p-2 border border-gray-300 rounded-md focus:ring-zinc-800 focus:border-zinc-800 text-zinc-900" />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-zinc-800 text-white p-2 rounded-md hover:bg-[#FB9733] transition-colors md:self-end">
                                <SearchIcon className="inline-block w-5 h-5 mr-2" />
                                Search Cars
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
