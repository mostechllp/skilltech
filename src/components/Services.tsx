import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import service1 from "../assets/images/services/service1.webp"
import service2 from "../assets/images/services/service2.webp"

export function Services() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-lavender-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <SectionHeading className="mb-4 md:mb-6 text-center lg:text-left">
              {t('tvInstallationService')}
            </SectionHeading>
            
            {/* Desktop: Full text */}
            <div className="hidden lg:block space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>{t('servicesParagraph1')}</p>
              <p>
                {t('servicesParagraph2')}{" "}
                <strong className="text-navy">{t('tvTypes')}</strong>
                {t('servicesParagraph2Continued')}
              </p>
              <p>{t('servicesParagraph3')}</p>
            </div>

            {/* Mobile/Tablet: Truncated text */}
            <div className="lg:hidden">
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed text-center">
                <p>
                  {t('servicesParagraph1').substring(0, 120)}
                  {!isExpanded && "..."}
                </p>
                
                {isExpanded && (
                  <>
                    <p>
                      {t('servicesParagraph2')}{" "}
                      <strong className="text-navy">{t('tvTypes')}</strong>
                      {t('servicesParagraph2Continued')}
                    </p>
                    <p>{t('servicesParagraph3')}</p>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-pink-accent text-sm font-medium hover:text-pink-600 transition-colors"
                >
                  {isExpanded ? t('readLess') : t('readMore')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="mt-6 md:mt-8 flex items-center gap-2 bg-pink-accent text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group text-sm md:text-base">
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 fill-white/20 group-hover:translate-x-1 transition-transform" />
                <span className="font-medium">{t('bookNow')}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Side - Images & Shape */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {/* Top Left Image */}
              <div className="rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-40 sm:h-48 md:h-56 lg:h-64">
                <img
                  src={service1}
                  alt={t('services')}
                  className="w-full h-full object-cover"
                />
              </div>
          
              {/* Services Box */}
              <div className="bg-pink-accent rounded-tl-[25px] rounded-tr-[50px] rounded-br-[25px] rounded-bl-[25px] md:rounded-tl-[40px] md:rounded-tr-[80px] md:rounded-br-[40px] md:rounded-bl-[40px] h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center shadow-lg">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  {t('services')}
                </h2>
              </div>
          
              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-48 sm:h-56 md:h-64 lg:h-72">
                <img
                  src={service2}
                  alt={t('services')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}