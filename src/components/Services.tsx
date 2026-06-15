import React from 'react';
import { PlayCircle } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
import service1 from "../assets/images/services/service1.webp"
import service2 from "../assets/images/services/service2.webp"
export function Services() {
  return (
    <section className="py-20 bg-lavender-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
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
            className="w-full lg:w-1/2">
            
            <SectionHeading className="mb-6">
              TV Installation Service
            </SectionHeading>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Looking for reliable TV installation services? Our expert team
                provides professional wall-mounted and stand-mounted TV setups
                for all sizes and brands. From precise mounting to clean cable
                management, we ensure a flawless finish every time.
              </p>
              <p>
                We handle{' '}
                <strong className="text-navy">
                  LED, OLED, 4K, and curved TVs
                </strong>{' '}
                with expert care — serving both residential and commercial
                spaces. Enjoy same-day service, competitive pricing, and
                guaranteed satisfaction.
              </p>
              <p>
                Book your installation today — schedule online or call us for
                quick assistance.
              </p>
            </div>

            <button className="mt-8 flex items-center gap-2 bg-pink-accent text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <PlayCircle className="w-5 h-5 fill-white/20" />
              <span className="font-medium">Book Now</span>
            </button>
          </motion.div>

          {/* Right Side - Images & Shape */}
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
                  src={service1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
          
              {/* About Us Box */}
              <div className="bg-pink-accent rounded-tl-[40px] rounded-tr-[80px] rounded-br-[40px] rounded-bl-[40px] h-64 flex items-center justify-center shadow-lg">
                <h2 className="text-white text-4xl font-bold">
                  Services
                </h2>
              </div>
          
              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-[30px] overflow-hidden shadow-lg h-72">
                <img
                  src={service2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
          
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}