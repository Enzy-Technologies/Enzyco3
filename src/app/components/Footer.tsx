import React from "react";
import { useLocation } from "react-router";
import { useTheme } from "./ThemeProvider";

export function Footer() {
  const location = useLocation();
  const { isLightMode } = useTheme();

  return (
    <footer className={`relative z-10 w-full px-4 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center ${isLightMode ? 'border-t border-black/10' : ''}`}>
      
      {/* Centered CTA */}
      <div className={`w-full max-w-[1500px] flex flex-col items-center gap-10 pb-32 border-b mb-10 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
        <h2 className={`font-['Inter'] font-bold text-5xl md:text-[60px] tracking-[-3px] text-center ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
          Connect with us
        </h2>
        <p className="font-['Roboto_Mono'] text-[#6f6f6f] text-[15px] uppercase tracking-[-0.075px] text-center max-w-[600px] leading-relaxed">
          Schedule a quick call to learn how Enzy can turn your regional data into a powerful advantage.
        </p>
        <button className="relative flex items-center justify-center px-6 py-3 mt-4 rounded-[13px] border-[0.8px] border-[rgba(255,255,255,0.9)] backdrop-blur-[4px] bg-[linear-gradient(189.6deg,rgba(25,173,125,0.85)_25.1%,rgba(20,144,103,0.85)_64.2%)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),inset_2px_2px_5px_0px_rgba(255,255,255,0.4)] text-[#f5f7fa] font-['Inter'] font-medium text-[13px] transition-transform active:scale-95 hover:opacity-90 whitespace-nowrap w-max">
          Learn more
        </button>
      </div>

      {/* Links & Credits */}
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className={`flex gap-8 font-['Roboto_Mono'] font-bold text-sm uppercase tracking-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
          <button className="hover:text-[#19ad7d] transition-colors">Benefits</button>
          <button className="hover:text-[#19ad7d] transition-colors">Specifications</button>
          <button className="hover:text-[#19ad7d] transition-colors">How-to</button>
        </div>

        <div className="flex items-center gap-10">
          {/* Logo icon */}
          <div className="w-8 h-16">
            <svg viewBox="0 0 32 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#485c11]">
              <path d="M16 0C24.8366 0 32 7.16344 32 16V54C32 62.8366 24.8366 70 16 70C7.16344 70 0 62.8366 0 54V16C0 7.16344 7.16344 0 16 0ZM16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12Z" fill="currentColor" />
            </svg>
          </div>
          
          <div className="flex items-center gap-4 font-['Roboto_Mono'] text-[#485c11] text-xs uppercase tracking-tight">
            <span>© Enzy.</span>
            <span>2025</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>

    </footer>
  );
}