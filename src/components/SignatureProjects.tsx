import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import project_abudhabi from "../assets/images/projects/Abu_Dhabi_Project_dd0AvS1.webp";
import project_dubai_police from "../assets/images/projects/Dubai_Police_Project_hm5wCoq.webp";
import project_kfc from "../assets/images/projects/KFC_Project.webp";

const projects = [
  {
    titleKey: 'abudhabiAirport',
    categoryKey: 'tvInstallationService',
    img: project_abudhabi
  },
  {
    titleKey: 'dubaiPolice',
    categoryKey: 'tvInstallationService',
    img: project_dubai_police
  },
  {
    titleKey: 'kfc',
    categoryKey: 'tvInstallationService',
    img: project_kfc
  }
];

export function SignatureProjects() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 300;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white container mx-auto px-4 md:px-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-4">
        <div className="flex gap-2 order-2 md:order-1 justify-center md:justify-start">
          <button 
            onClick={() => scroll('left')}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-lavender-light flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-lavender-light flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <div className="flex flex-col items-center md:items-end order-1 md:order-2">
          <PillBadge text={t('turningVisionIntoReality')} className="mb-2 md:mb-4" />
          <SectionHeading align="center" className="w-full text-center md:text-right">
            {t('ourSignatureProjects')}
          </SectionHeading>
        </div>
      </div>

      {/* Horizontal scroll container on mobile, grid on desktop */}
      <div className="relative">
        {/* Mobile: Horizontal Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-3xl overflow-hidden group h-72 md:h-80 cursor-pointer shadow-md flex-none w-[85vw] md:w-auto snap-center"
            >
              <img
                src={project.img}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Pink dot top right */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-pink-accent rounded-full shadow-sm z-10"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                <p className="text-white/80 text-xs font-medium mb-1">
                  {t(project.categoryKey)}
                </p>
                <h3 className="text-white text-lg md:text-xl font-bold">{t(project.titleKey)}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator dots for mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className="h-1.5 rounded-full transition-all duration-300 bg-slate-300 w-4"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
}