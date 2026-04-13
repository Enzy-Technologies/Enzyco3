import React, { useState, useEffect } from 'react';
import { MainNavigation } from "./MainNavigation";
import { Link, useLocation } from "react-router";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isLightMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call it once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 pointer-events-auto ${
        isScrolled 
          ? 'bg-[rgba(255,255,255,0.1)] backdrop-blur-[32px] py-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="relative flex items-center justify-between w-full px-4 max-w-7xl mx-auto">
        <Link to="/" className="z-50 relative transition-transform duration-300 hover:scale-105">
          <img 
            src="https://39823762.fs1.hubspotusercontent-na2.net/hubfs/39823762/Enzy.co/Enzy_Logo_2026_Wordmark.svg" 
            alt="Enzy Logo" 
            className={`h-8 lg:h-10 w-auto ${isLightMode ? 'brightness-0' : 'invert brightness-0'}`} 
          />
        </Link>
        
        {/* Desktop Nav Items (Absolutely positioned center pill and mobile menu) */}
        <MainNavigation isLightMode={isLightMode} />

        <div className="hidden md:flex relative items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border backdrop-blur-md transition-colors pointer-events-auto z-50 ${isLightMode ? 'border-black/20 bg-black/5 hover:bg-black/10 text-black' : 'border-white/20 bg-white/5 hover:bg-white/10 text-white'}`}
            aria-label="Toggle Theme"
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Link to="/about" className="relative flex items-center justify-center px-6 py-3 rounded-[13px] border-[0.8px] border-[rgba(255,255,255,0.9)] backdrop-blur-[4px] bg-[linear-gradient(189.6deg,rgba(25,173,125,0.85)_25.1%,rgba(20,144,103,0.85)_64.2%)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),inset_2px_2px_5px_0px_rgba(255,255,255,0.4)] text-[#f5f7fa] font-['Inter'] font-medium text-[13px] transition-transform active:scale-95 hover:opacity-90 whitespace-nowrap w-max z-50 pointer-events-auto">
            Learn more
          </Link>
        </div>
      </div>
    </header>
  );
}