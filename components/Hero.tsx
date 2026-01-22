
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#8E0E00] min-h-[600px] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#8E0E00] to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Live Bidding Active • 1,420 Users Online
          </div>
          <h1 className="text-white text-5xl md:text-8xl font-black italic-heading uppercase leading-[0.9] tracking-tighter mb-4">
            Dominate <br />
            The <span className="text-yellow-400">Premium</span> <br />
            Auction
          </h1>
          <p className="text-gray-200/80 max-w-md text-sm leading-relaxed font-medium">
            The Middle East's most transparent vehicle marketplace. Real-time bidding, certified histories, and global delivery.
          </p>
        </div>

        <div className="w-full lg:w-[450px] bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h3 className="text-white text-[10px] font-black tracking-widest uppercase mb-6 opacity-60">Quick Search</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-white/50 font-bold uppercase block mb-1.5">Make</label>
                <select className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 appearance-none cursor-pointer">
                  <option className="bg-neutral-800">All Makes</option>
                  <option className="bg-neutral-800">Porsche</option>
                  <option className="bg-neutral-800">BMW</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-white/50 font-bold uppercase block mb-1.5">Year</label>
                <select className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 appearance-none cursor-pointer">
                  <option className="bg-neutral-800">2020 - 2024</option>
                  <option className="bg-neutral-800">2015 - 2019</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[10px] text-white/50 font-bold uppercase block mb-1.5">Keywords</label>
              <input 
                type="text" 
                placeholder="Model, VIN or Lot #"
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase py-4 rounded-xl flex justify-center items-center gap-2 transition-all group mt-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:scale-110 transition-transform"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              Start Search
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent"></div>
    </section>
  );
};

export default Hero;
