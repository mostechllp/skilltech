import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  { key: 'tvWallMounts', value: 'TV Wall Mounts' },
  { key: 'monitorDesktopMounts', value: 'Monitor & Desktop Mounts' },
  { key: 'motorizedMountsAndStands', value: 'Motorised Mount and Stands' },
  { key: 'tvFloorStandsCart', value: 'TV Floor Stands & Cart' },
  { key: 'tvCeilingMounts', value: 'TV Ceiling Mounts' },
  { key: 'television', value: 'Television' },
  { key: 'kioskScreen', value: 'Kiosk Screen' },
  { key: 'ledDisplay', value: 'LED Display' },
  { key: 'acBrackets', value: 'AC Brackets' },
  { key: 'cctvCameraBrackets', value: 'CCTV Camera Brackets' },
  { key: 'dvdReceiverCpuMounts', value: 'DVD / Receiver & CPU Mounts' },
  { key: 'hdmiCables', value: 'HDMI Cables' },
  { key: 'videoWallMounts', value: 'Video Wall Mounts' },
  { key: 'posMounts', value: 'POS Mounts' },
  { key: 'gaming', value: 'Gaming' },
  { key: 'projectorMounts', value: 'Projector Mounts' },
  { key: 'projectorScreens', value: 'Projector Screens' }
];

const allProducts = [
  {
    id: 'SH 126P',
    nameKey: 'heavyDutyFullMotion',
    img: product_sh_126p
  },
  {
    id: 'SH 360R',
    nameKey: 'rotateWallMount',
    img: product_sh_360r
  },
  {
    id: 'SH 380P',
    nameKey: 'premiumHeavyDuty',
    img: product_sh_380p
  },
  {
    id: 'SH 1015P',
    nameKey: 'extraLongSingleArm',
    img: product_sh_1015p
  },
  {
    id: 'PM 75FW',
    nameKey: 'fixedTVWallMount',
    img: product_pm_75fw,
    badge: 'economicSeries'
  },
  {
    id: 'P6',
    nameKey: 'ultraSlimDoubleArm',
    img: product_p6
  },
  {
    id: 'SH 34P',
    nameKey: 'superEconomyFullMotion',
    img: product_sh_34p
  },
  {
    id: 'SH 4280LF',
    nameKey: 'ultraThinFixed',
    img: product_sh_4280lf
  }
];

export function ProductGrid() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('TV Wall Mounts');
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Responsive product display
    const updateDisplayedProducts = () => {
      const mobile = window.innerWidth < 768;
      if (mobile) {
        // Show only 4 products on mobile: first 2 from first 4, and 2 from second 4
        const firstTwo = allProducts.slice(0, 2);
        const lastTwo = allProducts.slice(4, 6);
        setDisplayedProducts([...firstTwo, ...lastTwo]);
      } else {
        // Show all products on desktop
        setDisplayedProducts(allProducts);
      }
    };

    updateDisplayedProducts();
    window.addEventListener('resize', updateDisplayedProducts);
    return () => window.removeEventListener('resize', updateDisplayedProducts);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // On mobile: show only 6 filters with "Show More", On desktop: show all filters
  const displayedFilters = isMobile 
    ? (showAllFilters ? filters : filters.slice(0, 6))
    : filters;

  return (
    <section className="py-12 md:py-20 bg-white container mx-auto px-4 md:px-8 relative  sm:px-6 lg:px-12 xl:px-16">
      <div className="mb-6 md:mb-8">
        <PillBadge text={t('ourProducts')} className="mb-3 md:mb-4" />
        <SectionHeading className="text-center md:text-left">{t('exploreOurProducts')}</SectionHeading>
      </div>

      {/* Filters */}
      <div className="relative mb-8 md:mb-12">
        <div 
          ref={scrollContainerRef}
          className={`flex ${isMobile ? 'overflow-x-auto' : 'flex-wrap'} gap-2 pb-4 md:pb-0 hide-scrollbar`}
        >
          {displayedFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${isMobile ? 'whitespace-nowrap' : 'whitespace-normal'} ${
                activeFilter === filter.value 
                  ? 'bg-navy text-white border-navy' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-pink-accent hover:text-pink-accent'
              }`}
            >
              {t(filter.key)}
            </button>
          ))}
        </div>
        
        {/* Show More / Show Less button - ONLY on mobile */}
        {isMobile && !showAllFilters && filters.length > 6 && (
          <button
            onClick={() => setShowAllFilters(true)}
            className="text-pink-accent text-xs font-medium mt-2 block"
          >
            +{filters.length - 6} more categories
          </button>
        )}
        {isMobile && showAllFilters && (
          <button
            onClick={() => setShowAllFilters(false)}
            className="text-pink-accent text-xs font-medium mt-2 block"
          >
            Show less
          </button>
        )}
      </div>

      {/* Grid Container */}
      <div className="relative">
        {/* Desktop Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-pink-accent rounded-full shadow-lg items-center justify-center text-white hover:scale-110 transition-transform z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-pink-accent rounded-full shadow-lg items-center justify-center text-white hover:scale-110 transition-transform z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all relative group cursor-pointer"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="relative">
                    <div className="bg-[#cc2165] text-white text-[8px] md:text-[10px] font-bold px-3 md:px-4 py-1 md:py-1.5 shadow-md z-20 relative"
                         style={{
                           clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'
                         }}>
                      {t(product.badge)}
                    </div>
                    <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-amber-700"
                         style={{
                           clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)'
                         }} />
                  </div>
                </div>
              )}

              <div className="h-32 sm:h-36 md:h-40 w-full mb-4 md:mb-6 flex items-center justify-center p-3 md:p-4 mt-4 md:mt-4">
                <img
                  src={product.img}
                  alt={t(product.nameKey)}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h4 className="text-pink-accent font-bold text-xs md:text-sm mb-1 md:mb-2">
                {product.id}
              </h4>
              <p className="text-slate-600 text-[11px] md:text-xs mb-4 md:mb-6 flex-grow line-clamp-2 md:line-clamp-none">
                {t(product.nameKey)}
              </p>

              <button className="flex items-center gap-1.5 md:gap-2 border border-pink-accent/30 text-slate-700 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-colors group/btn">
                <PlayCircle className="w-3 h-3 md:w-4 md:h-4 text-pink-accent group-hover/btn:text-white transition-colors" />
                {t('viewDetails')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View More button - only show on mobile when showing limited products */}
      {isMobile && displayedProducts.length < allProducts.length && (
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => {
              setDisplayedProducts(allProducts);
            }}
            className="flex items-center gap-2 border border-pink-accent/30 text-slate-700 px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-pink-accent hover:text-white hover:border-pink-accent transition-colors group"
          >
            <PlayCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-accent group-hover:text-white transition-colors" />
            {t('viewMore')}
          </button>
        </div>
      )}

      {/* Pagination dots - only show on desktop or when all products are shown */}
      {(!isMobile || displayedProducts.length === allProducts.length) && (
        <div className="mt-10 md:mt-12 flex flex-col items-center gap-4 md:gap-6">
          <div className="flex gap-2">
            <div className="w-6 h-1.5 bg-pink-accent rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}