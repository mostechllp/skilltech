import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "react-i18next";

// import one from "../assets/images/categories/Icon_AC_Brackets.webp";
// import two from "../assets/images/categories/Icon_CCTV_Brackets.webp";
// import three from "../assets/images/categories/Icon_Desktop_Mount.webp";
// import four from "../assets/images/categories/Icon_Floor_Stand.webp";
// import five from "../assets/images/categories/Icon_Laptop__Tablet_Mount.webp";
// import six from "../assets/images/categories/Icon_Kiosk_Stand.webp";
// import seven from "../assets/images/categories/ChatGPT_Image_Apr_15_2026_03_19_02_PM_copy.webp";
// import eight from "../assets/images/categories/Icon_Projector_Mount.webp";
// import nine from "../assets/images/categories/Icon_Projector_Screen.webp";
// import ten from "../assets/images/categories/Icon_LED_Display.webp";
// import eleven from "../assets/images/categories/Icon_Television.webp";
// import twelve from "../assets/images/categories/Icon_Motorized_Mount.webp";
// import thirteen from "../assets/images/categories/Icon_POS_Stand.webp";
// import fourteen from "../assets/images/categories/Icon_LED_Display.webp";
// import fifteen from "../assets/images/categories/Icon_Gaming_Chair.webp";
// import sixteen from "../assets/images/categories/Icon_Other_TV_Wall_Mount.webp";
import heroVideo from "../assets/video/hero_video.mp4";

// const squareData = [
//   { id: 1, src: one },
//   { id: 2, src: two },
//   { id: 3, src: three },
//   { id: 4, src: four },
//   { id: 5, src: five },
//   { id: 6, src: six },
//   { id: 7, src: seven },
//   { id: 8, src: eight },
//   { id: 9, src: nine },
//   { id: 10, src: ten },
//   { id: 11, src: eleven },
//   { id: 12, src: twelve },
//   { id: 13, src: thirteen },
//   { id: 14, src: fourteen },
//   { id: 15, src: fifteen },
//   { id: 16, src: sixteen },
// ];

// const shuffle = (array: typeof squareData) => {
//   const arr = [...array];
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// };

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{
//         duration: 1.2,
//         type: "spring",
//       }}
//       className="w-full h-full rounded-lg overflow-hidden"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     />
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());
//     timeoutRef.current = setTimeout(shuffleSquares, 3500);
//   };

//   return (
//     <div
//       className="
//         grid
//         grid-cols-3
//         grid-rows-3
//         sm:grid-cols-4
//         sm:grid-rows-4
//         h-[280px]
//         sm:h-[350px]
//         md:h-[450px]
//         lg:h-[500px]
//         gap-2
//       "
//     >
//       {squares}
//     </div>
//   );
// };

export function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
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
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Darker Overlay for better text contrast, matching the site's style */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 focus:outline-none"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Centered Content */}
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

       {/* Right Grid */}
          {/* <div className="relative z-10">
            <ShuffleGrid />
          </div> */}
    </section>
  );
}