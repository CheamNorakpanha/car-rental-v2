import React from 'react';
import { SearchIcon } from 'lucide-react';
import roadBg from '../../assets/home/road_bg.png';

function header() {
    return (
        <div>
            <section className="text-white py-20"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${roadBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right bottom',
                }}>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 kalam">Our <span className="text-[#FB9733]">Locations</span></h1>
                    <p className="text-xl mb-8 font-light raleway">Find a RentWheels near you</p>
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your city or zip code"
                                className="w-full p-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-zinc-800"
                            />
                            <button className="absolute right-2 top-2 bg-[#FB9733] text-white p-2 rounded-full hover:bg-zinc-800 transition-colors">
                                <SearchIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default header