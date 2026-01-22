
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 py-24 border-t border-gray-100">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black italic-heading uppercase tracking-tighter leading-none mb-6">
            What Our <br /> <span className="text-red-600">Winners</span> Say
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F4C430"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">4.9/5 From 2,100+ Reviews</span>
          </div>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0">
                <img src="https://picsum.photos/100/100?random=1" className="w-full h-full rounded-full object-cover" alt="User" />
              </div>
              <div>
                <h5 className="text-[11px] font-black uppercase text-[#111111]">Ahmed Khalil</h5>
                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Verified Buyer</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic font-medium leading-relaxed">
              "The transparency here is unmatched. I won my dream SUV at a price that was actually lower than dealership averages. The delivery to Erbil was seamless."
            </p>
          </div>

          <div className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0">
                <img src="https://picsum.photos/100/100?random=2" className="w-full h-full rounded-full object-cover" alt="User" />
              </div>
              <div>
                <h5 className="text-[11px] font-black uppercase text-[#111111]">Sara Mahmood</h5>
                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Corporate Client</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic font-medium leading-relaxed">
              "Managing fleet auctions through Khat Al Jazeera has transformed our liquidations. Their digital platform is robust and highly secure for high-value transactions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
