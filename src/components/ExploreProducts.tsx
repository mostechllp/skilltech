import React from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import image1 from '../assets/images/product_thumbnail/image_1.webp';
import motorised from '../assets/images/product_thumbnail/Motorised_Wall_Mount.webp';
import floorStand from '../assets/images/product_thumbnail/image.webp';
import ergonomic from '../assets/images/product_thumbnail/Ergonomic_Mount.webp';

export function ExploreProducts() {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16 bg-white container mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center md:items-end mb-6 md:mb-8">
        <PillBadge text={t('whatsNew')} className="mb-3 md:mb-4" />
        <SectionHeading align="center" className="w-full text-center md:text-right">
          {t('exploreTheProducts')}
        </SectionHeading>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
        {/* Large Left Card - Full width on mobile, then grid on desktop */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          className="lg:col-span-6 xl:col-span-5 relative rounded-3xl overflow-hidden group cursor-pointer mb-6 lg:mb-0"
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[4/5] xl:aspect-auto xl:h-full w-full">
            <img
              src={image1}
              alt={t('tvWallMounts')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {t('tvWallMounts')}
            </h3>
            <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn text-sm sm:text-base">
              <span className="text-xs sm:text-sm font-medium">{t('explore')}</span>
              <PlayCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-accent group-hover/btn:text-white transition-colors" />
            </button>
          </div>
        </motion.div>

        {/* Right Column Grid - Responsive layout */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col sm:grid sm:grid-cols-2 gap-5 sm:gap-6 auto-rows-fr">
          {/* Top Left */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[16/9] sm:aspect-square md:aspect-[4/3] w-full">
              <img
                src={motorised}
                alt={t('motorisedWallMounts')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-6">
              <h3 className="text-white text-lg sm:text-xl md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">
                {t('motorisedWallMounts')}
              </h3>
              <button className="flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
                <span className="text-[10px] sm:text-xs font-medium">{t('explore')}</span>
                <PlayCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-accent group-hover/btn:text-white transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[16/9] sm:aspect-square md:aspect-[4/3] w-full">
              <img
                src={floorStand}
                alt={t('floorStands')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-6">
              <h3 className="text-white text-lg sm:text-xl md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">
                {t('floorStands')}
              </h3>
              <button className="flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
                <span className="text-[10px] sm:text-xs font-medium">{t('explore')}</span>
                <PlayCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-accent group-hover/btn:text-white transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Bottom Wide - Full width on mobile and desktop */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.3
            }}
            className="sm:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] w-full">
              <img
                src={ergonomic}
                alt={t('ergonomicMounts')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-2 sm:mb-3">
                {t('ergonomicMounts')}
              </h3>
              <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
                <span className="text-xs sm:text-sm font-medium">{t('explore')}</span>
                <PlayCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-accent group-hover/btn:text-white transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}