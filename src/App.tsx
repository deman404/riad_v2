import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Gallery } from './components/Gallery';
import { Experiences } from './components/Experiences';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand selection:bg-terracotta selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Experiences />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
