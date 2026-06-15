import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "../assets/video/hero_video.mp4";

export function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Play video immediately when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay failed:", error));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
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
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content - Visible immediately */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-pink-accent/20 backdrop-blur-sm text-pink-300 text-sm font-medium border border-pink-accent/30">
            {t("premiumMountingSolutions")}
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-tight">
            {t("mountSmarter")}
            <br />
            <span className="text-pink-accent">{t("workBetter")}</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <button className="group bg-pink-accent hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg">
              {t("exploreProducts")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300">
              {t("viewProjects")}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 focus:outline-none"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </section>
  );
}