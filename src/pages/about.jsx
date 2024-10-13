import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/about/Header';
import OurStory from '../components/about/OurStory';
import OurValue from '../components/about/OurValue';
import WhyChooseQW from '../components/WhyChooseQW';
import BrowseFleet from '../components/about/BrowseFleet';

function About() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <OurStory />

          <OurValue />

          <WhyChooseQW className={""} />

          <BrowseFleet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default About