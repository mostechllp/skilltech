import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PillBadge } from './ui/PillBadge';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';
const categories = [
{
  name: 'TV Wall Mounts',
  img: '/src/assets/images/categories/Icon_TV_Wall_Mount.webp',
  active: true
},
{
  name: 'Monitor & Desktop Mounts',
  img: '/src/assets/images/categories/Icon_Desktop_Mount.webp'
},
{
  name: 'Monitorized Mounts and Stands',
  img: '/src/assets/images/categories/Icon_Motorized_Mount.webp'
},
{
  name: 'TV Floor Stands & Cart',
  img: 'src/assets/images/categories/Icon_Floor_Stand.webp'
},
{
  name: 'TV Ceiling Mounts',
  img: '/src/assets/images/categories/Icon_TV_Ceiling_Mount.webp'
},
{
  name: 'Television',
  img: '/src/assets/images/categories/Icon_Television.webp',
},
{
  name: 'Kiosk Screen',
  img: '/src/assets/images/categories/Icon_Kiosk_Stand.webp'
},
{
  name: 'LED Display',
  img: '/src/assets/images/categories/Icon_LED_Display.webp'
},
{
  name: 'Projector Screens',
  img: '/src/assets/images/categories/Icon_Projector_Screen.webp'
},
{
  name: 'Projector Mounts',
  img: '/src/assets/images/categories/Icon_Projector_Mount.webp'
},
{
  name: 'Gaming',
  img: 'src/assets/images/categories/Icon_Gaming_Chair.webp'
},
{
  name: 'POS Mounts',
  img: '/src/assets/images/categories/Icon_POS_Stand.webp'
},
{
  name: 'Video Wall Mounts',
  img: '/src/assets/images/categories/Icon_Video_Wall_Mount.webp'
},
{
  name: 'HDMI Cables',
  img: '/src/assets/images/categories/Icon_HDMI_Cables.webp'
},
{
  name: 'DVD / Receiver & CPU Mounts',
  img: '/src/assets/images/categories/Icon_DVD_-_Recevier_Mount.webp'
},
{
  name: 'CCTV Camera Brackets',
  img: '/src/assets/images/categories/Icon_CCTV_Brackets.webp'
},
{
  name: 'AC Brackets',
  img: '/src/assets/images/categories/Icon_AC_Brackets.webp'
},
{
  name: 'Other Mounts & Accessories',
  img: '/src/assets/images/categories/Icon_Other_TV_Wall_Mount.webp'
},
{
  name: 'Podium Screens',
  img: '/src/assets/images/categories/ChatGPT_Image_Apr_15_2026_03_19_02_PM_copy.webp'
},
{
  name: 'Laptop & Tablet Stands',
  img: '/src/assets/images/categories/Icon_Laptop__Tablet_Mount.webp'
}
];

export function BrowseCategory() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Clear any existing auto-scroll timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Stop auto-scrolling temporarily
      setIsAutoScrolling(false);
      
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Resume auto-scrolling after 5 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 5000);
    }
  };

  const updateActiveCategory = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const containerCenter = scrollPosition + container.clientWidth / 2;
      
      const items = container.children;
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  }, [activeIndex]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && scrollContainerRef.current) {
      // Clear any existing interval
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentScroll = container.scrollLeft;
          
          // Get the width of one category item (with gap)
          const firstItem = container.children[0];
          const itemWidth = firstItem ? firstItem.offsetWidth + 16 : 0; // 16px is the gap
          
          // Check if reached the end
          if (currentScroll + itemWidth >= maxScroll) {
            // Reset to beginning
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Scroll by one item's width at a time
            container.scrollBy({
              left: itemWidth,
              behavior: 'smooth'
            });
          }
        }
      }, 2500); // Scroll every 2.5 seconds
    }
    
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Update active category on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Use requestAnimationFrame for smoother updates
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateActiveCategory();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      container.addEventListener('scroll', handleScroll);
      // Initial update
      updateActiveCategory();
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [updateActiveCategory]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="browse-category" className="py-16 bg-white container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <PillBadge text="Categories" className="mb-4" />
          <SectionHeading>Browse by Category</SectionHeading>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-navy hover:bg-pink-accent hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-4 hide-scrollbar snap-x scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.01
            }}
            onClick={() => {
              if (scrollContainerRef.current) {
                // Clear auto-scroll timeout
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                
                // Stop auto-scrolling
                setIsAutoScrolling(false);
                
                // Scroll to selected category
                const item = scrollContainerRef.current.children[idx];
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                
                // Resume auto-scrolling after 5 seconds
                timeoutRef.current = setTimeout(() => {
                  setIsAutoScrolling(true);
                }, 5000);
              }
            }}
            className={`flex-none w-36 md:w-44 flex flex-col items-center p-4 rounded-2xl border bg-white cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md snap-start ${
              activeIndex === idx ? 'border-pink-accent shadow-sm' : 'border-slate-100'
            }`}
          >
            <div className="h-24 w-full flex items-center justify-center mb-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply" 
              />
            </div>
            <h3
              className={`text-xs md:text-sm text-center font-medium ${
                activeIndex === idx ? 'text-pink-accent' : 'text-navy'
              }`}>
              {cat.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}