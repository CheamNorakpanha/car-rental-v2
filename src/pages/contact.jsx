import React from 'react';
import Footer from '../components/footer';
import FAQ from '../components/home/faq';
import Header from '../components/contact/header';
import Contact from '../components/contact/contact';

function contact() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />

          <Contact />

          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default contact