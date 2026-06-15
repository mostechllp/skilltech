import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { PlayCircle, ChevronDown } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { motion } from "framer-motion";
import about1 from "../assets/images/about_us/about1.webp"
import about2 from "../assets/images/about_us/about2.webp"
import about3 from "../assets/images/about_us/about3.webp"

export function AboutUs() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-lavender-light">
      <div className="container mx-auto px-4 md:px-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-20">
          {/* Left Side - Images & Shape */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {/* Top Left Image */}
              <div className="rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-48 sm:h-56 md:h-64">
                <img
                  src={about1}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-48 sm:h-56 md:h-64">
                 <img
                  src={about3}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg h-56 sm:h-64 md:h-72">
                <img
                  src={about2}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <SectionHeading className="mb-4 md:mb-6 text-center lg:text-left">{t('aboutUs')}</SectionHeading>
            
            {/* Desktop: Full text */}
            <div className="hidden lg:block space-y-3 md:space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                {t('aboutUsParagraph1')}{" "}
                <strong className="text-navy">
                  SKILL MOUNT ELECTRONICS TRADING LLC
                </strong>
                {t('aboutUsParagraph1Continued')}
              </p>
              <p>
                {t('aboutUsParagraph2')}
              </p>
              <p>
                {t('aboutUsParagraph3')}{" "}
                <strong className="text-navy">SKILL TECH</strong>
                {t('aboutUsParagraph3Continued')}
              </p>
            </div>

            {/* Mobile/Tablet: Truncated text with read more */}
            <div className="lg:hidden">
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed text-center">
                <p>
                  {t('aboutUsParagraph1')}{" "}
                  <strong className="text-navy">
                    SKILL MOUNT ELECTRONICS TRADING LLC
                  </strong>
                  {t('aboutUsParagraph1Continued').substring(0, 150)}
                  {!isExpanded && "..."}
                </p>
                
                {isExpanded && (
                  <>
                    <p>
                      {t('aboutUsParagraph2')}
                    </p>
                    <p>
                      {t('aboutUsParagraph3')}{" "}
                      <strong className="text-navy">SKILL TECH</strong>
                      {t('aboutUsParagraph3Continued')}
                    </p>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-pink-accent text-sm font-medium hover:text-pink-600 transition-colors"
                >
                  {isExpanded ? t('readLess') : t('readMore')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Desktop Read More button */}
            <div className="hidden lg:flex justify-center lg:justify-start">
              <button className="mt-6 md:mt-8 flex items-center gap-2 bg-pink-accent text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group text-sm md:text-base">
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 fill-white/20 group-hover:translate-x-1 transition-transform" />
                <span className="font-medium">{t('readMore')}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}