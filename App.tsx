
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuctions from './components/FeaturedAuctions';
import AuctionCalendar from './components/AuctionCalendar';
import LogoTicker from './components/LogoTicker';
import ProcessBlueprint from './components/ProcessBlueprint';
import CtaSection from './components/CtaSection';
import RecentlySold from './components/RecentlySold';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedAuctions />
        <AuctionCalendar />
        <LogoTicker />
        <ProcessBlueprint />
        <CtaSection />
        <RecentlySold />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
