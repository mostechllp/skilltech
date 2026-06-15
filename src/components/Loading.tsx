import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo/logo.svg';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export function Loading({ message = "Loading amazing content...", fullScreen = true }: LoadingProps) {
  return (
    <div className={`${fullScreen ? 'fixed inset-0' : 'w-full h-full min-h-[400px]'} bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center z-50`}>
      <div className="text-center px-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mb-8"
        >
          <img src={logo} alt="Skill Tech" className="h-16 sm:h-20 w-auto mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}