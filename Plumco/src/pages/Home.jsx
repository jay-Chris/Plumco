// Home.jsx
// Main home page component that assembles all sections
// This page component is responsible for organizing all major sections

import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import TrainedStaff from '../components/sections/TrainedStaff';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import CTA from '../components/sections/CTA';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className="app-container">
      {/* All major sections stacked vertically */}
      <Header />
      <Hero />
      <Services />
      <TrainedStaff />
      <About />
      <Projects />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
