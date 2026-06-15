import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo/logo.svg';

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), key: 'home', active: true },
    { name: t('aboutUs'), key: 'aboutUs' },
    { name: t('products'), key: 'products', hasDropdown: true },
    { name: t('services'), key: 'services' },
    { name: t('support'), key: 'support' },
    { name: t('news'), key: 'news' },
    { name: t('career'), key: 'career' },
    { name: t('blog'), key: 'blog' },
    { name: t('contactUs'), key: 'contactUs' }
  ];

  return (
    <header
      className={`fixed top-[44px] left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-lavender-light py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href="#"
              className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-pink-accent ${
                link.active 
                  ? 'text-navy font-bold border-b-2 border-navy pb-1' 
                  : 'text-slate-700'
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white rounded-full border border-slate-200 overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder={t('search')}
              className="px-4 py-1.5 text-sm outline-none w-48"
            />
            <button className="p-2 text-slate-400 hover:text-pink-accent transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <button
            className="lg:hidden text-navy p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href="#"
              className={`text-base font-medium flex items-center justify-between border-b border-slate-50 pb-2 ${
                link.active ? 'text-pink-accent' : 'text-slate-700'
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <div className="flex items-center bg-slate-50 rounded-full border border-slate-200 overflow-hidden mt-2">
            <input
              type="text"
              placeholder={t('search')}
              className="px-4 py-2 text-sm outline-none w-full bg-transparent"
            />
            <button className="p-2 text-slate-400">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}