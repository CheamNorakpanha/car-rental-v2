import React from 'react';
import Footer from '../components/footer';
import Header from '../components/about/header';
import OurStory from '../components/about/ourStory';
import OurValue from '../components/about/ourValue';
import WhyChooseQW from '../components/whyChooseQW';
import BrowseFleet from '../components/about/browseFleet';

function about() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />

          <OurStory />

          <OurValue />

          <WhyChooseQW className={""}/>

          <BrowseFleet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default about