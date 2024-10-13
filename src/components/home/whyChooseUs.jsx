import React from 'react';
import { CarIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-xl container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <CarIcon className="w-12 h-12 text-[#FB9733] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Choose from a variety of cars to fit your needs and budget</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPinIcon className="w-12 h-12 text-[#FB9733] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Convenient Locations</h3>
              <p className="text-gray-600">Pick up and drop off at multiple locations across the city</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PhoneIcon className="w-12 h-12 text-[#FB9733] mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is always ready to assist you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
