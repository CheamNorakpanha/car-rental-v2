import React from 'react';
import Header from '../components/cars/header';
import Fleet from '../components/cars/fleet';
import WhyChooseQW from '../components/whyChooseQW';
import Footer from '../components/footer';


function cars() {
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

export default cars