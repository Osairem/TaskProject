
import React from 'react';

const ProcessBlueprint: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'AUTHENTICATE',
      desc: 'Register your profile and complete our 2-minute secure digital verification process.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
          <path d="M12 13c-2.21 0-4 1.79-4 4v3h8v-3c0-2.21-1.79-4-4-4z" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
          <path d="M8 8a4 4 0 0 1 8 0" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'DEPOSIT',
      desc: 'Activate your bidding power with a fully refundable security deposit through local or international channels.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'WIN BIG',
      desc: 'Join the live arena. Set your max bid or fight in real-time to claim your next masterpiece.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34c1.2-.7 2-1.99 2-3.46V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2.19c0 1.48.81 2.77 2 3.47z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[10px] text-red-600 font-black tracking-[0.2em] uppercase block mb-4">
            PROCESS BLUEPRINT
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#111111]">
            VICTORY IN <br />
            <span className="text-[#D1D5DB] italic">THREE MOVES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Green Rounded Square Icon Box */}
              <div className="w-20 h-20 bg-[#009245] rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-green-600/10 transition-transform duration-300 group-hover:scale-105">
                {step.icon}
              </div>

              {/* Step Number and Title */}
              <h3 className="text-[13px] font-black tracking-tight text-[#111111] uppercase mb-3">
                <span className="italic mr-1">{step.id}.</span> {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] font-medium leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessBlueprint;
