
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-red-600 p-1.5 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
              </div>
              <span className="font-black text-xl tracking-tighter uppercase italic">Khat Al Jazeera</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Redefining the standard of premium vehicle auctions across the region. Transparency, speed, and trust in every bid.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-8">Discovery</h6>
            <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Live Lobby</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How to Bid</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-8">Company</h6>
            <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Valuations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-8">Newsletter</h6>
            <p className="text-gray-500 text-[10px] leading-relaxed mb-6 font-bold uppercase tracking-widest">
              Join 5,000+ collectors getting first access to high-value lot drops.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-xs placeholder:text-white/20 focus:outline-none focus:border-red-600"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[10px] uppercase py-3.5 rounded-xl transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[9px] font-black uppercase tracking-widest text-gray-500">
          <p>© 2024 Khat Al Jazeera Auctions. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Anti-Fraud Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
