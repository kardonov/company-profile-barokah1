/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import ServicesSection from './components/ServicesSection';
import BentoFeatures from './components/BentoFeatures';
import CaseStudies from './components/CaseStudies';
import TestimonialsSection from './components/TestimonialsSection';
import InquiryPlanner from './components/InquiryPlanner';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-briefly-bg text-briefly-accent font-sans selection:bg-neutral-900 selection:text-white antialiased">
      {/* Sticky navigation glass bar */}
      <Navbar />

      <main>
        {/* Hero Area + Interactive Workspace Showcase Mockup */}
        <Hero />

        {/* Sliding client logosTicker */}
        <Clients />

        {/* Modular detailed services with visuals */}
        <ServicesSection />

        {/* Beautiful bento-grid detailing our advantages */}
        <BentoFeatures />

        {/* High performance real-world study cases and metrics */}
        <CaseStudies />

        {/* Custom interactive project scope planner and calculator */}
        <InquiryPlanner />

        {/* Real client satisfaction reviews */}
        <TestimonialsSection />

        {/* Core questions accordion */}
        <FaqSection />
      </main>

      {/* Corporate detailed footer */}
      <Footer />
    </div>
  );
}

