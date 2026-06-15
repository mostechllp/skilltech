import React from 'react';
import { PlayCircle } from 'lucide-react';
import logo from '../assets/images/logo/logo.svg';
export function Footer() {
  return (
    <footer className="bg-[#3351a3] text-white pt-20 pb-6 relative z-0 -mt-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo Column */}
          <div className="md:col-span-3">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
              'Home',
              'About Us',
              'Installation Services',
              'Support',
              'News',
              'Career',
              'Blog',
              'Contact Us',
              'Privacy Policy'].
              map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-pink-accent flex items-center gap-2 transition-colors">
                  
                    <PlayCircle className="w-3 h-3 text-pink-accent" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Products Col 1 */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {[
              'TV Wall Mounts',
              'Monitor & Desktop Mounts',
              'TV Ceiling Mounts',
              'Motorised Mounts and Stands',
              'TV Floor Stands & Cart',
              'Projector Mounts',
              'Projector Screens',
              'Laptop & Tablet Stands'].
              map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-pink-accent flex items-center gap-2 transition-colors">
                  
                    <PlayCircle className="w-3 h-3 text-pink-accent" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Products Col 2 */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 opacity-0 hidden md:block">
              Products
            </h4>
            <ul className="space-y-3">
              {[
              'POS Mounts',
              'Video Wall Mounts',
              'AC Brackets',
              'DVD / Receiver & CPU Mounts',
              'CCTV Camera Brackets',
              'Other Mounts & Accessories',
              'Television'].
              map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm text-slate-300 hover:text-pink-accent flex items-center gap-2 transition-colors">
                  
                    <PlayCircle className="w-3 h-3 text-pink-accent" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-400">
            Copyright © 2026 Skill Mount Electronics Trading LLC | All Rights
            Reserved. Powered by Prime Coderz
          </p>
        </div>
      </div>
    </footer>);

}