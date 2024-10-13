import React from 'react';
import PageNotFound from '../components/notfound/PageNotFound';
import PageOptions from '../components/notfound/PageOptions';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <PageNotFound />
      </main>

      <PageOptions />

      <Footer />

    </div>
  )
}