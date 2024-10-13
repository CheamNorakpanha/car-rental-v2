import React from 'react';
import { MapPinIcon, CarIcon, PhoneIcon } from 'lucide-react';

export default function pageoptions() {
    return (
        <div>
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                        Popular Pages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a
                            href="/locations"
                            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <MapPinIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Locations</h3>
                            <p className="text-gray-600 text-center">Find a RentWheels location near you</p>
                        </a>
                        <a
                            href="/about"
                            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <CarIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
                            <p className="text-gray-600 text-center">Learn more about RentWheels and our mission</p>
                        </a>
                        <a
                            href="/contact"
                            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <PhoneIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
                            <p className="text-gray-600 text-center">Get in touch with our support team</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
