import React from 'react';
import Footer from '../components/Footer';
import FAQ from '../components/contact/Faq';
import Header from '../components/contact/Header';
import Contact from '../components/contact/ContactInfo';

function contact() {
    return (
        <div>
            <div>
                <div className="flex flex-col min-h-screen">
                    <Header />

                    <main className="flex-grow">
                        <Contact />

                        <FAQ />
                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default contact