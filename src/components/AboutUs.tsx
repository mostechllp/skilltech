import React from "react";
import { useTranslation } from 'react-i18next';
import { PlayCircle } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { motion } from "framer-motion";
import about1 from "../assets/images/about_us/about1.webp"
import about2 from "../assets/images/about_us/about2.webp"

export function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-lavender-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Images & Shape */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Top Left Image */}
              <div className="rounded-[30px] overflow-hidden shadow-lg h-64">
                <img
                  src={about1}
                  alt={t('aboutUs')}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Us Box */}
              <div className="bg-pink-accent rounded-tl-[40px] rounded-tr-[80px] rounded-br-[40px] rounded-bl-[40px] h-64 flex items-center justify-center shadow-lg">
                <h2 className="text-white text-4xl font-bold">{t('aboutUs')}</h2>
              </div>

              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-[30px] overflow-hidden shadow-lg h-72">
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
            className="w-full lg:w-1/2"
          >
            <SectionHeading className="mb-6">{t('aboutUs')}</SectionHeading>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
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

            <button className="mt-8 flex items-center gap-2 bg-pink-accent text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group">
              <PlayCircle className="w-5 h-5 fill-white/20 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium">{t('readMore')}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}