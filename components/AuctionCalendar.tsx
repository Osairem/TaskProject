
import React from 'react';

const AuctionCalendar: React.FC = () => {
  const events = [
    { day: '24', month: 'MAY', title: 'Luxury SUV Special Event', sub: '42 Vehicles • Starts 10:00 AM' },
    { day: '26', month: 'MAY', title: 'Modern Classics Collection', sub: '15 Vehicles • Starts 03:30 PM' },
    { day: '30', month: 'MAY', title: 'End of Month Clearing', sub: '120 Vehicles • Starts 09:00 AM' },
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black italic-heading uppercase tracking-tighter leading-none mb-6">
            Auction <br /> <span className="text-red-600">Calendar</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
            Stay ahead of the competition. Subscribe to our official calendar to receive notifications for premium lot releases.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-600 border-b-2 border-red-100 pb-1 hover:border-red-600 transition-all">
            Download Full Schedule
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center justify-center min-w-[60px]">
                  <span className="text-3xl font-black tracking-tighter leading-none text-[#111111]">{event.day}</span>
                  <span className="text-[10px] font-black text-gray-300 tracking-widest">{event.month}</span>
                </div>
                <div className="h-10 w-[1px] bg-gray-100"></div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight text-[#111111] mb-1">{event.title}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">{event.sub}</p>
                </div>
              </div>
              <div className="text-gray-200 group-hover:text-red-600 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionCalendar;
