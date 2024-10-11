import React from 'react'
import { Link } from 'react-router-dom';
import roadBg from '../assets/Home/2021_Bugatti_Chiron.jpg';
import { StarIcon, SearchIcon, CarIcon, MapPinIcon, PhoneIcon, CircleHelp } from 'lucide-react';

function home() {
  return (
    <div>
      <section className="text-white py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${roadBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              <button type="submit" className="w-full bg-zinc-800 text-white p-2 rounded-md hover:bg-zinc-800 transition-colors md:self-end">
                <SearchIcon className="inline-block w-5 h-5 mr-2" />
                Search Cars
              </button>
            </form>
          </div>
        </div>
      </section>

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
                  <button className="w-full mt-4 bg-zinc-800 text-white p-2 rounded-md hover:bg-zinc-800 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold">Frequently asked questions</h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                  What are the requirements to rent a car?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  To rent a car, you must have a valid driver's license, be at least [minimum age] years old, and provide a credit/debit card for payment.
                  International renters may need a passport and an International Driving Permit (IDP).
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                  What is your fuel policy?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  ur fuel policy is [Full-to-Full/Pre-purchase]. You will receive the car with a full tank, and we ask that you return it full.
                  If the tank is not full upon return, a refueling fee will apply.
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                  Can I modify or cancel my reservation?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Yes, you can modify or cancel your reservation online up to [time period] before the scheduled pickup. Cancellation fees may apply depending
                  on the terms of your booking.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                  Is insurance included in the rental price?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Our rental prices typically include basic insurance coverage. However, we offer additional protection options such as collision damage waivers
                  and theft protection for extra peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <button type="submit" className="bg-[#FB9733] text-white p-2 rounded-r-md hover:bg-[#FB9733] transition-colors">
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

export default home