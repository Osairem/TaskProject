
import React from 'react';

const FeaturedAuctions: React.FC = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <span className="text-red-600 text-[10px] font-black tracking-widest uppercase block mb-2">Real-Time Market</span>
          <h2 className="text-4xl md:text-5xl font-black italic-heading uppercase tracking-tighter">
            Live <span className="text-gray-300">Auctions</span>
          </h2>
        </div>
        <a href="#" className="text-[11px] font-bold tracking-widest uppercase text-gray-400 hover:text-red-600 transition-colors border-b-2 border-gray-100 pb-1">View All 428 Vehicles</a>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Main Large Card */}
        <div className="lg:col-span-7 bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row group">
          <div className="md:w-1/2 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000" 
              alt="Porsche 911 GT3" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 bg-yellow-400 text-black text-[9px] font-black uppercase px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-1 h-1 bg-black rounded-full animate-pulse"></span>
              Ending in 04h 32m 15s
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-green-500 font-bold uppercase">Available Now</span>
                <span className="text-[10px] text-gray-300 font-bold uppercase">LOT #0438-21-952</span>
              </div>
              <h3 className="text-3xl font-black italic-heading uppercase tracking-tighter leading-tight mb-4">
                High Performance <br /> Luxury Sport
              </h3>
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  12,500 km
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Erbil Terminal
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
                <div>
                  <span className="text-[9px] font-bold text-gray-300 uppercase block">Current Highest Bid</span>
                  <span className="text-2xl font-black text-red-600 tracking-tighter">$64,200</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-bold text-gray-300 uppercase block">Total Bids</span>
                  <span className="text-lg font-bold text-[#111111]">24 Bids</span>
                </div>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[10px] uppercase py-4 rounded-xl transition-all shadow-lg shadow-red-600/20 active:scale-[0.98]">
                Place Your Bid
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Card */}
        <div className="lg:col-span-5 bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 flex flex-col group">
          <div className="relative h-64">
            <img 
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000" 
              alt="Range Rover Autobiography" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 right-6 bg-yellow-400 text-black text-[9px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg">
              Ends in 12:04
            </div>
          </div>
          <div className="p-8 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-2xl font-black italic-heading uppercase tracking-tighter mb-1">Elite Executive SUV</h3>
              <p className="text-[9px] font-bold text-gray-300 uppercase mb-4">Lot #0312-74-9121 Special</p>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[9px] font-bold text-gray-300 uppercase block">Current Bid</span>
                  <span className="text-2xl font-black text-[#111111] tracking-tighter">$41,500</span>
                </div>
                <button className="text-gray-300 hover:text-red-500 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
              </div>
            </div>
            <button className="w-full bg-[#111111] hover:bg-neutral-800 text-white font-black text-[10px] uppercase py-4 rounded-xl transition-all active:scale-[0.98]">
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
