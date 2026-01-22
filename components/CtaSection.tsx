
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 py-12">
      <div className="grid md:grid-cols-2 rounded-[60px] overflow-hidden shadow-2xl">
        {/* Sell Section */}
        <div className="bg-red-600 p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/10 transition-colors"></div>
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-black italic-heading uppercase tracking-tighter leading-none mb-6">
              Ready to Sell <br /> Your Vehicle?
            </h2>
            <p className="text-red-100/70 text-sm mb-10 max-w-sm font-medium">
              Get the highest market value through our global network of motivated buyers. Professional inspection included.
            </p>
            <button className="bg-white text-red-600 font-black text-[10px] uppercase px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95">
              Get a Valuation
            </button>
          </div>
        </div>

        {/* Partner Section */}
        <div className="bg-yellow-400 p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mb-20 blur-3xl group-hover:bg-black/10 transition-colors"></div>
          <div className="relative z-10">
            <h2 className="text-[#111111] text-4xl md:text-5xl font-black italic-heading uppercase tracking-tighter leading-none mb-6">
              Partner with <br /> the Experts
            </h2>
            <p className="text-[#111111]/60 text-sm mb-10 max-w-sm font-medium">
              Access premium dealer tools, volume discounts, and priority logistics for your inventory management.
            </p>
            <button className="bg-[#111111] text-white font-black text-[10px] uppercase px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95">
              Dealer Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
