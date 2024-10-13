import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/home/Header';
import FeaturedCars from '../components/home/FeaturedCars';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FAQ from '../components/home/Faq';

function Home() {
  return (
    <div>
      <Header />

      <main className="flex-grow">
        <FeaturedCars />

        <WhyChooseUs />

        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default Home