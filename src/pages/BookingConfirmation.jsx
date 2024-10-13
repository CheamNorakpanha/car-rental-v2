import React from 'react';
import { CheckCircleIcon, CarIcon, CalendarIcon, MapPinIcon, PrinterIcon, PhoneIcon, MailIcon, UserIcon, HomeIcon } from 'lucide-react';
import Footer from '../components/Footer';

export default function BookingConfirmation() {
    // In a real application, you would fetch this data from your backend or state management
    const bookingDetails = {
        bookingNumber: 'RW12345678',
        carName: 'Economy Car',
        seats: 4,
        mpg: 35,
        pickupDate: '2024-06-15',
        returnDate: '2024-06-19',
        pickupLocation: '123 Main St, Anytown, USA',
        totalCost: '$140.00',
        customerFirstName: 'John',
        customerLastName: 'Doe',
        customerEmail: 'john.doe@example.com',
        customerPhone: '+855 123 456 789'
    }

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h1 className="text-3xl font-bold text-zinc-800">Booking Confirmed!</h1>
                                <p className="text-xl text-gray-600 mt-2">Thank you for choosing QuadWheel</p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <UserIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Name: {bookingDetails.customerFirstName} {bookingDetails.customerLastName}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MailIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Email: {bookingDetails.customerEmail}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <PhoneIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Phone: {bookingDetails.customerPhone}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                                <h2 className="text-xl font-semibold text-zinc-800 mb-4">Booking Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <CarIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Car: {bookingDetails.carName} ({bookingDetails.seats} seats, {bookingDetails.mpg} MPG)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CalendarIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Pick-up: {bookingDetails.pickupDate}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CalendarIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Return: {bookingDetails.returnDate}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPinIcon className="w-5 h-5 text-[#FB9733] mr-2" />
                                        <span className="text-gray-700">Location: {bookingDetails.pickupLocation}</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-zinc-900">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-semibold">Total Cost:</span>
                                        <span className="text-2xl font-bold text-[#FB9733]">{bookingDetails.totalCost}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Next Steps</h2>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li>Check your email for a detailed confirmation.</li>
                                    <li>Bring your driver's license and credit card to the pickup location.</li>
                                    <li>Arrive at the pickup location on time.</li>
                                    <li>Inspect the car before driving off.</li>
                                </ol>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <button className="flex items-center bg-[#FB9733] text-white px-6 py-2 rounded-md hover:bg-[#ad703a] transition-colors">
                                    <PrinterIcon className="w-5 h-5 mr-2" />
                                    Print Confirmation
                                </button>
                                <button className="flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                                    <MailIcon className="w-5 h-5 mr-2" />
                                    Email Confirmation
                                </button>
                                <a href="/" className="flex items-center bg-zinc-800 text-white px-6 py-2 rounded-md hover:bg-zinc-900 transition-colors">
                                    <HomeIcon className="w-5 h-5 mr-2" />
                                    Return to Homepage
                                </a>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
                                <p className="text-gray-700 mb-4">If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a href="tel:+11234567890" className="flex items-center justify-center bg-white text-[#FB9733] px-6 py-2 rounded-md border border-[#FB9733] hover:text-zinc-800 hover:border-zinc-800 transition-colors">
                                        <PhoneIcon className="w-5 h-5 mr-2" />
                                        Call Us
                                    </a>
                                    <a href="/contact" className="flex items-center justify-center bg-white text-[#FB9733] px-6 py-2 rounded-md border border-[#FB9733] hover:text-zinc-800 hover:border-zinc-800 transition-colors">
                                        <MailIcon className="w-5 h-5 mr-2" />
                                        Contact Support
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}