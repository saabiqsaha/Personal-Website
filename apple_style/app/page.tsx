'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import FounderPortfolio from '../components/FounderPortfolio';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FounderPortfolio />
      <Projects />
      <Footer />
    </main>
  );
} 