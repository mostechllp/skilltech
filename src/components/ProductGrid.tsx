import React, { useState } from 'react';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

import product_sh_126p from "../assets/images/products/TV_wall_mount/SH-126P.webp";
import product_sh_360r from "../assets/images/products/TV_wall_mount/SH-360R.webp";
import product_sh_380p from "../assets/images/products/TV_wall_mount/SH-380P.webp";
import product_sh_1015p from "../assets/images/products/TV_wall_mount/SH-1015P.webp";
import product_pm_75fw from "../assets/images/products/TV_wall_mount/PM-75FW.webp";
import product_p6 from "../assets/images/products/TV_wall_mount/P6.webp";
import product_sh_34p from "../assets/images/products/TV_wall_mount/SH-34P.webp";
import product_sh_4280lf from "../assets/images/products/TV_wall_mount/SH-4280UF.webp";

const filters = [
  'TV Wall Mounts',
  'Monitor & Desktop Mounts',
  'Motorised Mount and Stands',
  'TV Floor Stands & Cart',
  'TV Ceiling Mounts',
  'Television',
  'Kiosk Screen',
  'LED Display',
  'AC Brackets',
  'CCTV Camera Brackets',
  'DVD / Receiver & CPU Mounts',
  'HDMI Cables',
  'Video Wall Mounts',
  'POS Mounts',
  'Gaming',
  'Projector Mounts',
  'Projector Screens'
];

const products = [
  {
    id: 'SH 126P',
    name: 'Heavy-Duty Full-Motion TV Wall Mount',
    img: product_sh_126p
  },
  {
    id: 'SH 360R',
    name: '360° Rotate Wall Mount For Flat Panel Display TV Wall Mount',
    img: product_sh_360r
  },
  {
    id: 'SH 380P',
    name: 'Premium Heavy Duty Full Motion Wall Mount For Large Screen TV Wall Mount',
    img: product_sh_380p
  },
  {
    id: 'SH 1015P',
    name: 'Extra Long Single Arm Full-Motion TV Wall Mount',
    img: product_sh_1015p
  },
  {
    id: 'PM 75FW',
    name: 'Fixed TV Wall Mount',
    img: product_pm_75fw,
    badge: 'ECONOMIC SERIES'
  },
  {
    id: 'P6',
    name: 'Ultra Slim Double Arm Full Motion TV Wall Mount',
    img: product_p6
  },
  {
    id: 'SH 34P',
    name: 'Super Economy Full-Motion TV Wall Mount',
    img: product_sh_34p
  },
  {
    id: 'SH 4280LF',
    name: 'Ultra Thin Fixed TV Wall Mount',
    img: product_sh_4280lf
  }
];

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState('TV Wall Mounts');
  
  return (
    <section className="py-20 bg-white container mx-auto px-4 md:px-8 relative">
      <div className="mb-8">
        <PillBadge text="Our Products" className="mb-4" />
        <SectionHeading>Explore Our Products</SectionHeading>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              activeFilter === filter 
                ? 'bg-navy text-white border-navy' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-pink-accent hover:text-pink-accent'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid Container with Arrows */}
      <div className="relative">
        <button className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-pink-accent rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-10 hidden md:flex">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-pink-accent rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-10 hidden md:flex">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all relative group cursor-pointer"
            >
              {/* Badge - Styled like the image */}
              {product.badge && (
                <>
                  {/* Badge triangle background */}
                  <div className="absolute top-0 left-0 z-10">
                    <div className="relative">
                      {/* Main badge */}
                      <div className="bg-[#cc2165] text-white text-[10px] font-bold px-4 py-1.5 shadow-md z-20 relative"
                           style={{
                             clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                           }}>
                        {product.badge}
                      </div>
                      {/* Small triangle fold effect */}
                      <div className="absolute -bottom-1 left-0 w-2 h-2 bg-amber-700"
                           style={{
                             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)'
                           }} />
                    </div>
                  </div>
                  
                  {/* Alternate badge design - ribbon style */}
                  {/* <div className="absolute top-4 -left-2 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-bold px-4 py-1.5 shadow-md relative">
                      {product.badge}
                      <div className="absolute -bottom-1 left-0 w-2 h-2 bg-amber-700"
                           style={{
                             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)'
                           }} />
                    </div>
                  </div> */}
                </>
              )}

              <div className="h-40 w-full mb-6 flex items-center justify-center p-4 mt-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h4 className="text-pink-accent font-bold text-sm mb-2">
                {product.id}
              </h4>
              <p className="text-slate-600 text-xs mb-6 flex-grow">
                {product.name}
              </p>

              <button className="flex items-center gap-2 border border-pink-accent/30 text-slate-700 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-colors group/btn">
                <PlayCircle className="w-4 h-4 text-pink-accent group-hover/btn:text-white transition-colors" />
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination / View More */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="flex gap-2">
          <div className="w-6 h-1.5 bg-pink-accent rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
        </div>

        <button className="flex items-center gap-2 border border-pink-accent/30 text-slate-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-colors group">
          <PlayCircle className="w-5 h-5 text-pink-accent group-hover:text-white transition-colors" />
          View More
        </button>
      </div>
    </section>
  );
}