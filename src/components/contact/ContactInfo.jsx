import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-2 border border-gray-300 rounded-md"
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
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#FB9733] text-white p-2 rounded-md hover:bg-zinc-800 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPinIcon className="w-6 h-6 text-[#FB9733] mr-4 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-gray-600">123 National Road 6, Phnom Penh, Cambodia</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <PhoneIcon className="w-6 h-6 text-[#FB9733] mr-4 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-gray-600">+855 12 345 678</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MailIcon className="w-6 h-6 text-[#FB9733] mr-4 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-600">info@quadwheel.kh</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <ClockIcon className="w-6 h-6 text-[#FB9733] mr-4 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Business Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                                        <p className="text-gray-600">Saturday: 10am - 4pm</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
