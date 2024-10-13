import React from 'react';
import Footer from '../components/footer';
import Header from '../components/home/header';
import FeaturedCars from '../components/home/featuredCars';
import WhyChooseUs from '../components/home/whyChooseUs';
import FAQ from '../components/home/faq';

function home() {
  return (
    <div>
      <main className="flex-grow">
        <Header />

        <FeaturedCars />

        <WhyChooseUs />

        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default home