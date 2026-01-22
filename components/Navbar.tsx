
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-1.5 rounded">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase italic">Khat Al Jazeera</span>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
          <a href="#" className="hover:text-red-600 transition-colors">Inventory</a>
          <a href="#" className="text-red-600 transition-colors">Live Auctions</a>
          <a href="#" className="hover:text-red-600 transition-colors">Calendar</a>
          <a href="#" className="hover:text-red-600 transition-colors">Sell Your Car</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-[11px] font-bold tracking-widest uppercase hover:text-red-600 transition-colors">Sign In</button>
        <button className="bg-[#111111] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-2.5 rounded transition-transform active:scale-95">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
