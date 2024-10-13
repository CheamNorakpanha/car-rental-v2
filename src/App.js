import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cars from './pages/Cars';
import Locations from './pages/Locations';
import RentalProcess from './pages/RentalProcess';
import BookingConfirmation from './pages/BookingConfirmation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/rentalprocess" element={<RentalProcess />} />
        <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
        <Route path="/404page" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;