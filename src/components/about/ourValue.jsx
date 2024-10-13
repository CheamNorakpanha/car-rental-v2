import React from 'react';
import { CheckCircleIcon, UserIcon, StarIcon } from 'lucide-react';

function ourValue() {
    return (
        <div>
            <section className="bg-gray-100 py-16">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <CheckCircleIcon className="w-12 h-12 text-[#FB9733] mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2 text-center">Quality</h3>
                            <p className="text-gray-600 text-center">We maintain a modern fleet of well-serviced vehicles to ensure your safety and comfort.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <UserIcon className="w-12 h-12 text-[#FB9733] mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2 text-center">Customer-Centric</h3>
                            <p className="text-gray-600 text-center">Your satisfaction is our top priority. We go above and beyond to meet your needs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <StarIcon className="w-12 h-12 text-[#FB9733] mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2 text-center">Innovation</h3>
                            <p className="text-gray-600 text-center">We continuously improve our services and adopt new technologies to enhance your experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ourValue