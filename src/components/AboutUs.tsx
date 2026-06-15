import React from "react";
import { PlayCircle } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { motion } from "framer-motion";
export function AboutUs() {
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
                  src="/src/assets/images/about_us/about2.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Us Box */}
              <div className="bg-pink-accent rounded-tl-[40px] rounded-tr-[80px] rounded-br-[40px] rounded-bl-[40px] h-64 flex items-center justify-center shadow-lg">
                <h2 className="text-white text-4xl font-bold">About Us</h2>
              </div>

              {/* Bottom Full Width Image */}
              <div className="col-span-2 rounded-[30px] overflow-hidden shadow-lg h-72">
                <img
                  src="/src/assets/images/about_us/about1.webp"
                  alt=""
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
            <SectionHeading className="mb-6">About Us</SectionHeading>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                At{" "}
                <strong className="text-navy">
                  SKILL MOUNT ELECTRONICS TRADING LLC
                </strong>
                , we believe your viewing experience should be seamless, secure,
                and stylish. As pioneers in entertainment setup solutions, we go
                beyond supplying hardware; we engineer precision and reliability
                into every product.
              </p>
              <p>
                Our commitment to excellence and innovation drives our range of
                mounting technologies, from durable fixed and articulating LCD
                TV wall mounts to advanced motorized systems and video wall
                solutions. We also offer ergonomic gaming chairs, desks, and
                premium accessories such as high-quality cables and wires all
                designed to support and enhance your electronics setup.
              </p>
              <p>
                Trust <strong className="text-navy">SKILL TECH</strong> to
                provide the strength, stability, and sophistication that elevate
                your space.
              </p>
            </div>

            <button className="mt-8 flex items-center gap-2 bg-pink-accent text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <PlayCircle className="w-5 h-5 fill-white/20" />
              <span className="font-medium">Read more</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
