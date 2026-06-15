import React from 'react';
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

  return (
    <section className="py-20 bg-white container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="flex gap-2 order-2 md:order-1">
          <button className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col items-end order-1 md:order-2">
          <PillBadge text={t('turningVisionIntoReality')} className="mb-4" />
          <SectionHeading align="center" className="w-full text-right">
            {t('ourSignatureProjects')}
          </SectionHeading>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative rounded-3xl overflow-hidden group h-64 md:h-80 cursor-pointer shadow-md"
          >
            <img
              src={project.img}
              alt={t(project.titleKey)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Pink dot top right */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-pink-accent rounded-full shadow-sm z-10"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
              <p className="text-white/80 text-xs font-medium mb-1">
                {t(project.categoryKey)}
              </p>
              <h3 className="text-white text-xl font-bold">{t(project.titleKey)}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}