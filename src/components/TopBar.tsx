import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail } from
'lucide-react';
export function TopBar() {
  return (
    <div className="bg-[#3351a3] text-white py-2 px-4 md:px-8 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-2 z-50 relative">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors">
            
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors">
            
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors">
            
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors">
            
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-accent transition-colors">
            
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <a
          href="mailto:info@skilltechonline.com"
          className="flex items-center gap-1.5 hover:text-pink-accent transition-colors">
          
          <Mail className="w-4 h-4" />
          <span>info@skilltechonline.com</span>
        </a>
        <a
          href="tel:+971509637077"
          className="flex items-center gap-1.5 hover:text-pink-accent transition-colors">
          
          <Phone className="w-4 h-4" />
          <span>+971 50 963 7077</span>
        </a>
        <a
          href="tel:+97142347770"
          className="flex items-center gap-1.5 hover:text-pink-accent transition-colors hidden sm:flex">
          
          <Phone className="w-4 h-4" />
          <span>+971 4 234 7770</span>
        </a>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
          <div className="w-4 h-3 bg-gradient-to-r from-green-600 via-white to-black relative overflow-hidden rounded-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-red-600"></div>
          </div>
          <span className="font-medium">UAE</span>
        </div>
      </div>
    </div>);

}