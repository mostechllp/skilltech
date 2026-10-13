import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX, LayoutGrid } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "../assets/video/hero_video.mp4";
import { Briefcase, Users, Package, Globe2, Smile } from "lucide-react";

const statIcons = [Briefcase, Users, Package, Globe2, Smile];

// --- Counting Hook ---
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, isInView]);

  return { count, ref };
}

// --- Stats Data ---
const statsData = [
  { value: 5, suffix: "M+", label: "PROJECTS COMPLETED" },
  { value: 200, suffix: "+", label: "EXPERT STAFF" },
  { value: 1200, suffix: "+", label: "PRODUCTS (SKU)" },
  { value: 10, suffix: "+", label: "COUNTRIES SERVED" },
  { value: 10, suffix: "M+", label: "SATISFIED CUSTOMERS" },
];

// --- Stats Portfolio Card ---
function StatsCard() {
  return (
    <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
      {/* 
        MOBILE: single-row strip, all stats fit, no header, no scroll
      */}
      <div className="sm:hidden">
        <div className="flex items-stretch justify-between">
          {statsData.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2500);
            return (
              <div key={index} className="flex items-stretch flex-1 min-w-0">
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 px-1">
                  <div className="flex items-baseline">
                    <span
                      ref={ref}
                      className="text-xl font-extrabold text-white leading-none"
                    >
                      {count}
                    </span>
                    <span className="text-[11px] font-extrabold text-blue-400 ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="text-[8px] font-medium text-gray-400 tracking-wider uppercase mt-1.5 text-center leading-tight">
                    {stat.label}
                  </span>
                </div>

                {index < statsData.length - 1 && (
                  <span className="w-px bg-white/15 self-stretch my-1"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        DESKTOP: existing vertical list
      */}
      <div className="hidden sm:flex flex-col divide-y divide-white/10">
        {statsData.map((stat, index) => {
          const { count, ref } = useCountUp(stat.value, 2500);
          const Icon = statIcons[index] || Briefcase;
          return (
            <div
              key={index}
              className="flex items-center justify-between py-3.5 first:pt-5 last:pb-0"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
              <div className="flex items-baseline">
                <span
                  ref={ref}
                  className="text-xl md:text-2xl font-bold text-white"
                >
                  {count}
                </span>
                <span className="text-base md:text-lg font-bold text-blue-400 ml-0.5">
                  {stat.suffix}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Main Hero Component ---
export function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay failed:", error));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Blue + Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/85 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Headline */}
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              {t("fifteenYears")}
              <br />
              <span className="text-blue-400">{t("trustAndExcellence")}</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 mt-4 sm:mt-5 max-w-lg leading-relaxed">
              {t("heroDescription")}
            </p>

            {/* Buttons — full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-7">
              <button className="group bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/25 text-sm font-medium w-full sm:w-auto">
                {t("exploreProducts")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/15 text-white px-7 py-3 rounded-full transition-all duration-300 text-sm font-medium w-full sm:w-auto">
                {t("viewProjects")}
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end w-full"
          >
            <StatsCard />
          </motion.div>
        </div>
      </div>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 focus:outline-none"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>
    </section>
  );
}