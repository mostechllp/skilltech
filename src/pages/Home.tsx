import React, { useState, useEffect } from 'react';
import '../i18n';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { BrowseCategory } from '../components/BrowseCategory';
import { ExploreProducts } from '../components/ExploreProducts';
import { AboutUs } from '../components/AboutUs';
import { ProductGrid } from '../components/ProductGrid';
import { Services } from '../components/Services';
import { StatsBand } from '../components/StatsBand';
import { SignatureProjects } from '../components/SignatureProjects';
import { Partners } from '../components/Partners';
import { PreFooter } from '../components/PreFooter';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { Loading } from '../components/Loading';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Simulate loading time for smooth transition
      // You can add actual resource preloading here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return <Loading message="Preparing your visual experience..." />;
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <BrowseCategory />
        <ExploreProducts />
        <AboutUs />
        <ProductGrid />
        <Services />
        <StatsBand />
        <SignatureProjects />
        <Partners />
        <PreFooter />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}