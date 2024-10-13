import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { CarIcon, CreditCardIcon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';

function RentalProcess() {

    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        pickupDate: '2024-06-15',
        returnDate: '2024-06-19',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123456789',
        cardNumber: '124567891234',
        expiryDate: '01/24',
        cvv: '123',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/bookingconfirmation');
    };

    return (
        <div>
            <div className="flex flex-col min-h-screen">

                <main className="flex-grow bg-gray-100">
                    <div className="container mx-auto px-4 py-8">
                        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-8">
                                <h1 className="text-3xl font-bold mb-6 text-center">Rent Your Car</h1>
                                <div className="flex justify-between items-center mb-8">
                                    {[1, 2, 3].map((i) => ( // Adjusted to 3 steps only
                                        <div key={i} className="flex flex-col items-center">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= i ? 'bg-[#FB9733] text-white' : 'bg-gray-200 text-gray-600'
                                                    }`}
                                            >
                                                {i}
                                            </div>
                                            <span className="text-sm mt-2">
                                                {i === 1
                                                    ? 'Car Details'
                                                    : i === 2
                                                        ? 'Personal Info'
                                                        : 'Payment'}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <form onSubmit={handleSubmit}>
                                    {step === 1 && (
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-4">Car Details</h2>
                                            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                                <div className="flex items-center mb-4">
                                                    <CarIcon className="w-6 h-6 text-[#FB9733] mr-2" />
                                                    <span className="font-semibold">Selected Car: Economy Car</span>
                                                </div>
                                                <p className="text-gray-600 mb-2">Daily Rate: $35</p>
                                                <p className="text-gray-600">Seats: 4, MPG: 35</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Pick-up Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="pickupDate"
                                                        name="pickupDate"
                                                        value={formData.pickupDate}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Return Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="returnDate"
                                                        name="returnDate"
                                                        value={formData.returnDate}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
                                            <div className="space-y-4">
                                                <div>
                                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Card Number
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="cardNumber"
                                                            name="cardNumber"
                                                            value={formData.cardNumber}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                            required
                                                        />
                                                        <CreditCardIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                            Expiry Date
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="expiryDate"
                                                            name="expiryDate"
                                                            value={formData.expiryDate}
                                                            onChange={handleInputChange}
                                                            placeholder="MM/YY"
                                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                                            CVV
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="cvv"
                                                            name="cvv"
                                                            value={formData.cvv}
                                                            onChange={handleInputChange}
                                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-between mt-6">
                                        {step > 1 && (
                                            <button
                                                type="button"
                                                onClick={handlePrevStep}
                                                className="py-2 px-4 bg-[#FB9733] text-white rounded-md"
                                            >
                                                <ChevronLeftIcon className="w-4 h-4 inline" /> Back
                                            </button>
                                        )}
                                        {step < 4 ? (
                                            <button
                                                type="button"
                                                onClick={handleNextStep}
                                                className="py-2 px-4 bg-zinc-800 text-white rounded-md"
                                            >
                                                Next <ChevronRightIcon className="w-4 h-4 inline" />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="py-2 px-4 bg-blue-600 text-white rounded-md"
                                            >
                                                Confirm Booking
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default RentalProcess