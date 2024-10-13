import React from 'react';
import { StarIcon } from 'lucide-react';

function featuredCars() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Featured Cars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Economy Car", image: "https://www.wsupercars.com/wallpapers-regular/BMW/2023-BMW-7-Series-005-1080.jpg", price: 35 },
                            { name: "SUV", image: "https://www.wsupercars.com/wallpapers-regular/Lamborghini/2019-Lamborghini-Urus-009-1080.jpg", price: 55 },
                            { name: "Luxury Sedan", image: "https://www.wsupercars.com/wallpapers-regular/Lincoln/2017-Lincoln-Continental-001-1080.jpg", price: 75 },
                        ].map((car, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold ">${car.price}/Day</span>
                                        <div className="flex items-center">
                                            <StarIcon className="w-5 h-5 text-[#FB9733] fill-current" />
                                            <span className="ml-1">4.5</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 bg-zinc-800 text-white p-2 rounded-md hover:bg-[#FB9733] transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default featuredCars