import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';

function location() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Popular Locations</h2>
                            <div className="space-y-6">
                                {[
                                    { city: "New York City", address: "123 Broadway, New York, NY 10001", phone: "(212) 555-1234" },
                                    { city: "Los Angeles", address: "456 Hollywood Blvd, Los Angeles, CA 90028", phone: "(323) 555-5678" },
                                    { city: "Chicago", address: "789 Michigan Ave, Chicago, IL 60611", phone: "(312) 555-9012" },
                                    { city: "Houston", address: "321 Texas St, Houston, TX 77002", phone: "(713) 555-3456" },
                                ].map((location, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
                                        <div className="flex items-start space-x-2 text-gray-600 mb-2">
                                            <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span>{location.address}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                                            <PhoneIcon className="w-5 h-5" />
                                            <span>{location.phone}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <ClockIcon className="w-5 h-5" />
                                            <span>Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Location Map</h2>
                            <div className="bg-gray-200 rounded-lg overflow-hidden h-auto">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773035705364!2d104.889500575927!3d11.56812178863289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1728751588915!5m2!1sen!2skh"
                                    width="600"
                                    height="760"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps - Royal University of Phnom Penh"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default location