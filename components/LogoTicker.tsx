
import React from 'react';

const LogoTicker: React.FC = () => {
  const logos = [
    'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Tesla', 'Lexus', 'Range Rover'
  ];

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-50">
      <div className="animate-ticker flex gap-24 items-center">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center gap-3 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
            </div>
            <span className="text-lg font-black uppercase tracking-tighter text-[#111111] whitespace-nowrap">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoTicker;
