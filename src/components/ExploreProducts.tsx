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
    <section className="py-16 bg-white container mx-auto px-4 md:px-8">
      <div className="flex flex-col items-end mb-8">
        <PillBadge text={t('whatsNew')} className="mb-4" />
        <SectionHeading align="center" className="w-full text-right">
          {t('exploreTheProducts')}
        </SectionHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Left Card */}
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
          className="md:col-span-6 lg:col-span-5 relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <div className="aspect-[4/5] md:aspect-auto md:h-full w-full">
            <img
              src={image1}
              alt={t('tvWallMounts')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-4">
              {t('tvWallMounts')}
            </h3>
            <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
              <span className="text-sm font-medium">{t('explore')}</span>
              <PlayCircle className="w-4 h-4 text-pink-accent group-hover/btn:text-white transition-colors" />
            </button>
          </div>
        </motion.div>

        {/* Right Column Grid */}
        <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
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
            <div className="aspect-square sm:aspect-[4/3] w-full">
              <img
                src={motorised}
                alt={t('motorisedWallMounts')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-3">
                {t('motorisedWallMounts')}
              </h3>
              <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
                <span className="text-xs font-medium">{t('explore')}</span>
                <PlayCircle className="w-3.5 h-3.5 text-pink-accent group-hover/btn:text-white transition-colors" />
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
            <div className="aspect-square sm:aspect-[4/3] w-full">
              <img
                src={floorStand}
                alt={t('floorStands')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-3">
                {t('floorStands')}
              </h3>
              <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
                <span className="text-xs font-medium">{t('explore')}</span>
                <PlayCircle className="w-3.5 h-3.5 text-pink-accent group-hover/btn:text-white transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Bottom Wide */}
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
            <div className="aspect-[2/1] sm:aspect-[3/1] w-full">
              <img
                src={ergonomic}
                alt={t('ergonomicMounts')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-3">
                {t('ergonomicMounts')}
              </h3>
              <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full w-fit hover:bg-pink-accent hover:border-pink-accent transition-colors group/btn">
                <span className="text-sm font-medium">{t('explore')}</span>
                <PlayCircle className="w-4 h-4 text-pink-accent group-hover/btn:text-white transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}