import React from 'react';
import Header from '../components/locations/header';
import Location from '../components/locations/location';
import WhyChooseQW from '../components/whyChooseQW';
import LocationSuggestion from '../components/locations/locationSuggestion';
import Footer from '../components/footer';

function locations() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <Header />

                    <Location />

                    <WhyChooseQW className={"bg-gray-100"}/>

                    <LocationSuggestion />

                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default locations