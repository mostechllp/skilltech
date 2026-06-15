import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import one from "../assets/images/categories/Icon_AC_Brackets.webp";
import two from "../assets/images/categories/Icon_CCTV_Brackets.webp";
import three from "../assets/images/categories/Icon_Desktop_Mount.webp";
import four from "../assets/images/categories/Icon_Floor_Stand.webp";
import five from "../assets/images/categories/Icon_Laptop__Tablet_Mount.webp";
import six from "../assets/images/categories/Icon_Kiosk_Stand.webp";
import seven from "../assets/images/categories/ChatGPT_Image_Apr_15_2026_03_19_02_PM_copy.webp";
import eight from "../assets/images/categories/Icon_Projector_Mount.webp";
import nine from "../assets/images/categories/Icon_Projector_Screen.webp";
import ten from "../assets/images/categories/Icon_LED_Display.webp";
import eleven from "../assets/images/categories/Icon_Television.webp";
import twelve from "../assets/images/categories/Icon_Motorized_Mount.webp";
import thirteen from "../assets/images/categories/Icon_POS_Stand.webp";
import fourteen from "../assets/images/categories/Icon_LED_Display.webp";
import fifteen from "../assets/images/categories/Icon_Gaming_Chair.webp";
import sixteen from "../assets/images/categories/Icon_Other_TV_Wall_Mount.webp";

const squareData = [
  { id: 1, src: one },
  { id: 2, src: two },
  { id: 3, src: three },
  { id: 4, src: four },
  { id: 5, src: five },
  { id: 6, src: six },
  { id: 7, src: seven },
  { id: 8, src: eight },
  { id: 9, src: nine },
  { id: 10, src: ten },
  { id: 11, src: eleven },
  { id: 12, src: twelve },
  { id: 13, src: thirteen },
  { id: 14, src: fourteen },
  { id: 15, src: fifteen },
  { id: 16, src: sixteen },
];

const shuffle = (array: typeof squareData) => {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{
        duration: 1.2,
        type: "spring",
      }}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3500);
  };

  return (
    <div
      className="
        grid
        grid-cols-3
        grid-rows-3
        sm:grid-cols-4
        sm:grid-rows-4
        h-[280px]
        sm:h-[350px]
        md:h-[450px]
        lg:h-[500px]
        gap-2
      "
    >
      {squares}
    </div>
  );
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-lavender-light w-full">
      <div
        className="
          container
          mx-auto
          px-4
          md:px-8
          py-12
          sm:py-16
          md:py-24
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <span
            className="
              inline-block
              mb-4
              px-4
              py-1
              rounded-full
              bg-pink-100
              text-pink-600
              text-sm
              font-medium
            "
          >
            {t("premiumMountingSolutions")}
          </span>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-navy
              leading-tight
            "
          >
            {t("mountSmarter")}
            <br />
            {t("workBetter")}
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              text-slate-600
              mt-6
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            {t("heroDescription")}
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              justify-center
              lg:justify-start
            "
          >
            <button
              className="
                w-full
                sm:w-auto
                bg-navy
                text-white
                px-6
                py-3
                rounded-full
                flex
                items-center
                justify-center
                gap-2
                hover:bg-pink-accent
                transition-colors
                group
              "
            >
              {t("exploreProducts")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              className="
                w-full
                sm:w-auto
                border
                border-slate-300
                px-6
                py-3
                rounded-full
                hover:bg-white
                hover:border-pink-accent
                hover:text-pink-accent
                transition-all
              "
            >
              {t("viewProjects")}
            </button>
          </div>
        </div>

        {/* Right Grid */}
        <ShuffleGrid />
      </div>
    </section>
  );
}