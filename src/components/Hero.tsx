import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const squareData = [
  {
    id: 1,
    src: "/src/assets/images/categories/Icon_AC_Brackets.webp",
  },
  {
    id: 2,
    src: "/src/assets/images/categories/Icon_CCTV_Brackets.webp",
  },
  {
    id: 3,
    src: "/src/assets/images/categories/Icon_Desktop_Mount.webp",
  },
  {
    id: 4,
    src: "/src/assets/images/categories/Icon_Floor_Stand.webp",
  },
  {
    id: 5,
    src: "/src/assets/images/categories/Icon_Laptop__Tablet_Mount.webp",
  },
  {
    id: 6,
    src: "/src/assets/images/categories/Icon_Kiosk_Stand.webp",
  },
  {
    id: 7,
    src: "/src/assets/images/categories/ChatGPT_Image_Apr_15_2026_03_19_02_PM_copy.webp",
  },
  {
    id: 8,
    src: "/src/assets/images/categories/Icon_Projector_Mount.webp",
  },
  {
    id: 9,
    src: "/src/assets/images/categories/Icon_Projector_Screen.webp",
  },
  {
    id: 10,
    src: "/src/assets/images/categories/Icon_LED_Display.webp",
  },
  {
    id: 11,
    src: "/src/assets/images/categories/Icon_Television.webp",
  },
  {
    id: 12,
    src: "/src/assets/images/categories/Icon_Television.webp",
  },
  {
    id: 13,
    src: "/src/assets/images/categories/Icon_POS_Stand.webp",
  },
  {
    id: 14,
    src: "/src/assets/images/categories/Icon_LED_Display.webp",
  },
  {
    id: 15,
    src: "/src/assets/images/categories/Icon_Gaming_Chair.webp",
  },
  {
    id: 16,
    src: "/src/assets/images/categories/Icon_Other_TV_Wall_Mount.webp",
  },
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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3500);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[500px] gap-2">
      {squares}
    </div>
  );
};

export function Hero() {
  return (
    <section className="bg-lavender-light w-full">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
            Premium Mounting Solutions
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
            Mount Smarter.
            <br />
            Work Better.
          </h1>

          <p className="text-slate-600 text-lg mt-6 max-w-xl">
            TV Wall Mounts, Motorised Mounts, Floor Stands and Ergonomic
            Solutions engineered for commercial, educational and home
            environments.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-navy text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition">
              Explore Products
              <ArrowRight size={18} />
            </button>

            <button className="border border-slate-300 px-6 py-3 rounded-full hover:bg-white transition">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Grid */}
        <ShuffleGrid />
      </div>
    </section>
  );
}