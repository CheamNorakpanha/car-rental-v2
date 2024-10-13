import React from 'react'

function ourStory() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-screen-xl container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                            <p className="text-justify text-gray-600 mb-4">
                                Founded in 2010, QuadWheel has evolved from a small local operation into a nationwide leader in car rentals. Our mission was simple: to provide
                                high-quality, affordable rentals with exceptional customer service.
                            </p>
                            <p className="text-justify text-gray-600 mb-4">
                                As we expanded, we embraced technology, launching an intuitive mobile app and an advanced booking system that make renting a car easier than ever. Our
                                diverse fleet now includes everything from compact cars to SUVs, catering to every need and budget while prioritizing eco-friendly options to reduce our
                                carbon footprint.
                            </p>
                            <p className="text-justify text-gray-600 mb-4">
                                At QuadWheel, we value our customers. Our dedicated team is here to ensure your rental experience is smooth and enjoyable. Today, we proudly serve thousands
                                of satisfied customers and look forward to creating memorable journeys together.
                            </p>
                            <p className="text-justify text-gray-600">
                                Thank you for choosing QuadWheel. We look forward to being part of your next adventure!
                            </p>
                        </div>
                        <div className="order-first md:order-last">
                            <img src="https://europe.fastlaneluxurycars.com/wp-content/uploads/2021/10/Porsche-911-Carrera-Cabriolet-1.jpg" alt="QuadWheel Team" className="w-full h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ourStory