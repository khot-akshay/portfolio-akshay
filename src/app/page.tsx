'use client';

import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AnimatedGradient from '@/components/AnimatedGradient';
import About from '@/components/About';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      {/* <AnimatedGradient /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
