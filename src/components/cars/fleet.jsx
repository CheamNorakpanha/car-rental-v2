import React from 'react';
import { Link } from 'react-router-dom';
import { FilterIcon, SearchIcon, StarIcon, UsersIcon, GaugeIcon, FuelIcon, CarIcon } from 'lucide-react';

function fleet() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        <aside className="md:w-1/4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                                <form>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="car-type"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Car Type
                                        </label>
                                        <select
                                            id="car-type"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-zinc-800 focus:border-zinc-800"
                                        >
                                            <option value="">All Types</option>
                                            <option value="economy">Economy</option>
                                            <option value="compact">Compact</option>
                                            <option value="midsize">Midsize</option>
                                            <option value="suv">SUV</option>
                                            <option value="luxury">Luxury</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="price-range"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Price Range
                                        </label>
                                        <input
                                            type="range"
                                            id="price-range"
                                            min="0"
                                            max="500"
                                            step="10"
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>$0</span>
                                            <span>$500+</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="passengers"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Passengers
                                        </label>
                                        <input
                                            type="number"
                                            id="passengers"
                                            min="1"
                                            max="8"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Features
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span className="ml-2">Air Conditioning</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span className="ml-2">Automatic Transmission</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span className="ml-2">GPS Navigation</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span className="ml-2">Bluetooth</span>
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#FB9733] text-white p-2 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center"
                                    >
                                        <FilterIcon className="w-5 h-5 mr-2" />
                                        Apply Filters
                                    </button>
                                </form>
                            </div>
                        </aside>
                        <div className="md:w-3/4">
                            <div className="mb-6 flex justify-between items-center">
                                <h2 className="text-2xl font-bold">Available Cars</h2>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search cars..."
                                        className="p-2 border border-gray-300 rounded-l-md focus:ring-[#FB9733] focus:border-[#FB9733]"
                                    />
                                    <button className="bg-[#FB9733] text-white p-2 rounded-r-md hover:bg-zinc-800 transition-colors">
                                        <SearchIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "Economy Car",
                                        image: "https://www.wsupercars.com/wallpapers-regular/Chrysler/2015-Chrysler-300-S-006-1080.jpg",
                                        price: 35,
                                        rating: 4.5,
                                        passengers: 4,
                                        mpg: 35,
                                        transmission: "Automatic",
                                    },
                                    {
                                        name: "Compact SUV",
                                        image: "https://www.wsupercars.com/wallpapers-regular/Kia/2023-Kia-Sportage-X-Pro-001-1080.jpg",
                                        price: 55,
                                        rating: 4.7,
                                        passengers: 5,
                                        mpg: 28,
                                        transmission: "Automatic",
                                    },
                                    {
                                        name: "Luxury Sedan",
                                        image: "https://www.wsupercars.com/wallpapers-regular/Bentley/2015-Bentley-Mulsanne-Speed-001-1080.jpg",
                                        price: 85,
                                        rating: 4.9,
                                        passengers: 4,
                                        mpg: 30,
                                        transmission: "Automatic",
                                    },
                                    {
                                        name: "Minivan",
                                        image: "https://www.wsupercars.com/wallpapers-regular/Toyota/2021-Toyota-Sienna-XSE-005-1080.jpg",
                                        price: 75,
                                        rating: 4.6,
                                        passengers: 7,
                                        mpg: 24,
                                        transmission: "Automatic",
                                    },
                                    {
                                        name: "Sports Car",
                                        image: "https://www.wsupercars.com/wallpapers-regular/Lotus/2018-Lotus-Exige-Sport-410-006-1080.jpg",
                                        price: 95,
                                        rating: 4.8,
                                        passengers: 2,
                                        mpg: 22,
                                        transmission: "Manual",
                                    },
                                    {
                                        name: "Full-Size SUV",
                                        image: "https://www.wsupercars.com/wallpapers-regular/Mitsubishi/2015-Mitsubishi-GC-PHEV-Concept-001-1080.jpg",
                                        price: 90,
                                        rating: 4.7,
                                        passengers: 7,
                                        mpg: 20,
                                        transmission: "Automatic",
                                    },
                                ].map((car, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                                            <div className="flex items-center mb-2">
                                                <StarIcon className="w-5 h-5 text-[#FB9733] fill-current" />
                                                <span className="ml-1 text-sm">{car.rating}</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-2xl font-bold">${car.price}/day</span>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <UsersIcon className="w-4 h-4 mr-1" />
                                                    {car.passengers} passengers
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-sm text-gray-600 mb-4">
                                                <div className="flex items-center">
                                                    <GaugeIcon className="w-4 h-4 mr-1" />
                                                    {car.mpg} MPG
                                                </div>
                                                <div className="flex items-center">
                                                    <FuelIcon className="w-4 h-4 mr-1" />
                                                    {car.transmission}
                                                </div>
                                            </div>
                                            <button className="w-full bg-[#FB9733] text-white p-2 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center">
                                                <CarIcon className="w-5 h-5 mr-2" />
                                                Rent Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-center">
                                <nav className="inline-flex rounded-md shadow">
                                    <Link to="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-[#FB9733] hover:text-white">
                                        Previous
                                    </Link>
                                    <Link to="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-[#FB9733] hover:text-white">
                                        1
                                    </Link>
                                    <Link to="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-[#FB9733] hover:text-white">
                                        2
                                    </Link>
                                    <Link to="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-[#FB9733] hover:text-white">
                                        3
                                    </Link>
                                    <Link to="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-[#FB9733] hover:text-white">
                                        Next
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default fleet