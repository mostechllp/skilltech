import React from 'react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Al Futtaim',
    logo: '/src/assets/images/partners/Al_Futtaim.webp'
  },
  {
    name: 'Aloft',
    logo: '/src/assets/images/partners/Aloft.webp'
  },
  {
    name: 'Ansar Mall',
    logo: '/src/assets/images/partners/Ansar_Mall.webp'
  },
  {
    name: 'Carillion',
    logo: '/src/assets/images/partners/Carillion.webp'
  },
  {
    name: 'Carrefour',
    logo: '/src/assets/images/partners/Carrefour.webp'
  },
  {
    name: 'DP World',
    logo: '/src/assets/images/partners/DP_World.webp'
  },
  {
    name: 'Dubai Autodrome',
    logo: '/src/assets/images/partners/Dubai_Autodrome.webp'
  },
  {
    name: 'Dubai Police',
    logo: '/src/assets/images/partners/Dubai_Police.webp'
  },
  {
    name: 'Emax',
    logo: '/src/assets/images/partners/Emax_kkfHNsD.webp'
  },
  {
    name: 'Eros Digital Home',
    logo: '/src/assets/images/partners/Eros_Digital_Home.webp'
  },
  {
    name: 'Harman House',
    logo: '/src/assets/images/partners/Harman_House.webp'
  },
  {
    name: 'Jumbo',
    logo: '/src/assets/images/partners/Jumbo.webp'
  },
  {
    name: 'Lulu',
    logo: '/src/assets/images/partners/lulu.webp'
  },
  {
    name: 'MovenPick',
    logo: '/src/assets/images/partners/MovenPick.webp'
  },
  {
    name: 'Sharaf DG',
    logo: '/src/assets/images/partners/Sharaf_DG.webp'
  },
  {
    name: 'Trigon',
    logo: '/src/assets/images/partners/Trigon.webp'
  },
];

export function Partners() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <PillBadge text="Those Who Trust Our Expertise" className="mb-4" />
        <SectionHeading align="center" className="mb-12">
          Our Partners & Collaborators
        </SectionHeading>

        <div className="w-full relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <div className="animate-infinite-scroll flex gap-12 md:gap-16">
              {duplicatedPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex-none w-32 md:w-40 h-20 md:h-24 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'text-slate-400 font-semibold text-sm';
                      fallback.textContent = partner.name;
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infiniteScroll 80s linear infinite;
          width: fit-content;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}