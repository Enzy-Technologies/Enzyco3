import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { PixelCanvas } from "./components/PixelCanvas";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";
import { OrganizationSchema, SoftwareApplicationSchema } from "./components/SEO";

export function Root() {
  const location = useLocation();
  const { isLightMode, setIsLightMode } = useTheme();

  return (
    <>
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <div className={`relative w-full min-h-screen font-['Inter'] selection:bg-[#19ad7d] selection:text-white transition-colors duration-500 ${
        isLightMode ? "bg-[#faf9f6]" : "bg-[#0b0f14]"
      }`}>
      
      {/* Fixed Pixel Background for Dark Sections */}
      <PixelCanvas />

      {/* Main Content Wrapper */}
      <div className="relative w-full flex flex-col items-center overflow-x-hidden">
        
        <Header />
        
        <main className="w-full flex-1 flex flex-col items-center z-10 relative pt-[88px]">
          <Outlet />
        </main>
        
        <Footer />

      </div>
      </div>
    </>
  );
}