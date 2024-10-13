import React from 'react';

function locationSuggestion() {
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Can't Find a Location Near You?</h2>
                    <p className="text-xl mb-8">We're constantly expanding! Let us know where you'd like to see a RentWheels location.</p>
                    <button className="px-6 py-3 bg-[#FB9733] text-white rounded-md hover:bg-zinc-800 transition-colors">
                        Suggest a Location
                    </button>
                </div>
            </section>
        </div>
    )
}

export default locationSuggestion