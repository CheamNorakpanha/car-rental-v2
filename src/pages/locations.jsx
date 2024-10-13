import React from 'react';
import Header from '../components/locations/Header';
import Location from '../components/locations/Location';
import WhyChooseQW from '../components/WhyChooseQW';
import LocationSuggestion from '../components/locations/LocationSuggestion';
import Footer from '../components/Footer';

function Locations() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <Header />

                <main className="flex-grow">
                    <Location />

                    <WhyChooseQW className={"bg-gray-100"} />

                    <LocationSuggestion />
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default Locations