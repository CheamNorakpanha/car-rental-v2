import React from 'react';
import { CheckCircleIcon, CarIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

function whyChooseQW(className) {
    return (
        <div>
            <section className={`py-16 ${className}`}>
                <div className="max-w-screen-xl container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Choose QuadWheel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <CarIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                            <p className="text-gray-600">From compact cars to luxury SUVs, we have the perfect vehicle for every occasion.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <MapPinIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Convenient Locations</h3>
                            <p className="text-gray-600">With branches across the country, we're always nearby when you need us.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <PhoneIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Our customer service team is always ready to assist you, anytime, anywhere.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <CheckCircleIcon className="w-12 h-12 text-[#FB9733] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Flexible Policies</h3>
                            <p className="text-gray-600">Easy booking, free cancellations, and various insurance options to suit your needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default whyChooseQW