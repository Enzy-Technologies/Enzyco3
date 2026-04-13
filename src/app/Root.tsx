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
        
        {/* Glow blobs behind hero section */}
        <div className="absolute top-0 left-0 w-full h-[1200px] overflow-hidden pointer-events-none z-0">
          <div className="absolute -left-[10%] top-[10%] w-[600px] h-[600px] rounded-full bg-[#AFFFEB]/10 blur-[80px]" />
          <div className="absolute left-[60%] top-[20%] w-[800px] h-[800px] rounded-full bg-[#AFFFEB]/10 blur-[100px]" />
        </div>

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