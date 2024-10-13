import React from 'react';
import Header from '../components/cars/Header';
import Fleet from '../components/cars/Fleet';
import WhyChooseQW from '../components/WhyChooseQW';
import Footer from '../components/Footer';


function Cars() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <Header />

                <main className="flex-grow">
                    <Fleet />

                    <WhyChooseQW className={"bg-gray-100"}/>
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default Cars