import React from 'react';

export default function BrowseFleet() {
    return (
        <div>
            <section className="bg-[#FB9733] text-white py-16">
                <div className="max-w-screen-xl container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 ">Ready to Hit the Road?</h2>
                    <p className="text-xl mb-8">Experience the Quadwheel difference today!</p>
                    <a href="/cars" className="inline-block px-6 py-3 bg-zinc-800 text-white rounded-md font-semibold hover:bg-white hover:text-zinc-800 transition-colors">
                        Browse Our Fleet
                    </a>
                </div>
            </section>
        </div>
    )
}