
import React from 'react';

const RecentlySold: React.FC = () => {
  const soldCars = [
    { title: '2023 Performance SUV', price: '$89,200', date: 'Closed 2 hours ago', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400' },
    { title: 'Luxury Sport Sedan', price: '$54,500', date: 'Closed 4 hours ago', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400' },
    { title: 'Modern Executive 4x4', price: '$72,100', date: 'Closed Yesterday', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400' },
    { title: 'Classic Premium GT', price: '$110,000', date: 'Closed 2 days ago', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 py-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-black italic-heading uppercase tracking-tighter">
          Social Proof: <span className="text-gray-300">Sold Recently</span>
        </h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-300 hover:border-red-600 hover:text-red-600 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-300 hover:border-red-600 hover:text-red-600 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {soldCars.map((car, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-3 border border-gray-50 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
              <img src={car.img} alt={car.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[8px] font-black uppercase px-2 py-1 rounded">SOLD</div>
            </div>
            <div className="px-2 pb-2">
              <h4 className="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">{car.title}</h4>
              <div className="flex justify-between items-end">
                <span className="text-xl font-black text-[#111111] tracking-tighter">{car.price}</span>
                <span className="text-[9px] font-bold text-gray-300 uppercase">{car.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlySold;
