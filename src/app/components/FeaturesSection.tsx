import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { useTheme } from "./ThemeProvider";

import imgAgenda from "figma:asset/6cce8469a4df66008e029b5ab1785d2ba0a9b5fa.png";
import imgOverlay1 from "figma:asset/59ffc4d905176715685a1bcd6382b68992634deb.png";
import imgOverlay2 from "figma:asset/b2f190251e9b720cd129d14e9b14f13912695448.png";
import imgCard1 from "figma:asset/bfa32be4e4c1d455b0a3fdf6464220ec293a017a.png";
import imgCard2 from "figma:asset/1ba039a3380adcb0df4a50daaa4a91103bd8aa0f.png";
import imgCard3 from "figma:asset/0fe47ac4ee9a477b73bca9c898a5bc0f18b0958e.png";
import imgLeaderboardNew from "figma:asset/c28962b6d0b9642c7448d02a0802acf85873f01b.png";

export function FeaturesSection() {
  const { isLightMode } = useTheme();

  return (
    <section className={`relative w-full px-4 md:px-12 lg:px-20 py-24 flex flex-col items-center ${isLightMode ? 'bg-[#f5f7fa]' : 'bg-[#0b0f14]'}`}>
      <div className="w-full max-w-[1280px] flex flex-col gap-8">
        
        {/* Top Feature: Agenda Builder */}
        <div 
          className="w-full rounded-2xl md:rounded-3xl overflow-hidden flex flex-col lg:flex-row relative shadow-xl"
          style={{ backgroundImage: "linear-gradient(20.4407deg, rgb(150, 183, 205) 27%, rgb(230, 141, 131) 100%)" }}
        >
          {/* Text Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-4 z-10">
            <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-['Inter'] font-semibold text-black leading-[1.1] tracking-[-1px]">
              Drag-n-drop Agenda Builder
            </h3>
            <p className="text-base md:text-[18px] text-black/80 font-['Inter'] max-w-[400px] leading-relaxed">
              Quickly rearrange your webinar’s sequence of actions and instantly generate an agenda that auto-updates as you move actions around.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-end justify-end pl-8 md:pl-12 lg:pl-16 pt-8 md:pt-12">
            <div className="relative w-full h-[calc(100%-2rem)] md:h-[calc(100%-3rem)] mt-auto ml-auto overflow-visible shadow-2xl rounded-tl-[16px]">
              <div className="absolute inset-0 rounded-tl-[16px] overflow-hidden border-t border-l border-white/20">
                <img 
                  src={imgAgenda} 
                  alt="Agenda Builder Interface" 
                  className="w-full h-full object-cover object-left-top" 
                />
              </div>
              
              {/* Overlays */}
              <img 
                src={imgOverlay2} 
                alt="Agenda holding overlay" 
                className="absolute top-[40%] left-[10%] md:left-[25%] w-[140px] md:w-[185px] drop-shadow-2xl z-20" 
              />
              <img 
                src={imgOverlay1} 
                alt="Cursor overlay" 
                className="absolute top-[35%] left-[50%] md:left-[55%] w-[80px] md:w-[100px] animate-bounce z-30 drop-shadow-lg" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Features Grid - 2x2 (4 Items) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Leaderboards */}
          <div className={`flex flex-col rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[600px] relative ${isLightMode ? 'bg-black/5' : 'bg-white/5'}`}>
            <div className="absolute top-0 left-0 w-full pt-8 md:pt-10 px-8 md:px-10 flex flex-col items-start gap-1.5 z-10">
              <h4 className={`text-[19px] md:text-[22px] font-['Inter'] tracking-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-white'}`}>
                Leaderboards
              </h4>
              <p className={`text-[15px] md:text-[16px] leading-[1.3] max-w-[440px] ${isLightMode ? 'text-black/65' : 'text-white/65'}`}>
                Experience increased accountability and engagement through our highly customizable leaderboard.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 w-full max-w-[500px]">
                {[
                  "Filter by any date range",
                  "Incorporate any KPI",
                  "Unlimited data levels",
                  "Rights-protected views",
                  "Achievement badges",
                  "Direct user messaging"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 shrink-0 flex items-center justify-center w-4 h-4 rounded-full ${isLightMode ? 'bg-black/10 text-black' : 'bg-white/10 text-white'}`}>
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </div>
                    <span className={`text-[13px] md:text-[14px] font-medium leading-[1.3] ${isLightMode ? 'text-black/80' : 'text-white/80'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute top-[340px] md:top-[280px] left-8 md:left-10 w-[calc(100%-2rem)] md:w-[120%]">
              <img 
                src={imgLeaderboardNew} 
                alt="Leaderboards Interface" 
                className="w-full h-auto object-contain object-left-top" 
              />
            </div>
          </div>

          {/* Card 2: Stage Kit */}
          <div className={`flex flex-col rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[600px] relative ${isLightMode ? 'bg-black/5' : 'bg-white/5'}`}>
            <div className="absolute top-0 left-0 w-full pt-8 md:pt-10 px-8 md:px-10 flex flex-col items-start gap-1.5 z-10">
              <h4 className={`text-[19px] md:text-[22px] font-['Inter'] tracking-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-white'}`}>
                Stage Kit
              </h4>
              <p className={`text-[15px] md:text-[16px] leading-[1.3] max-w-[320px] ${isLightMode ? 'text-black/65' : 'text-white/65'}`}>
                Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.
              </p>
            </div>
            
            <div className="absolute top-[200px] md:top-[220px] left-8 md:left-10 w-[calc(100%-2rem)] md:w-[120%]">
              <img 
                src={imgCard2} 
                alt="Stage Kit" 
                className="w-full h-auto object-contain object-left-top" 
              />
            </div>
          </div>

          {/* Card 3: Green Room */}
          <div className={`flex flex-col rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[600px] relative ${isLightMode ? 'bg-black/5' : 'bg-white/5'}`}>
            <div className="absolute top-0 left-0 w-full pt-8 md:pt-10 px-8 md:px-10 flex flex-col items-start gap-1.5 z-10">
              <h4 className={`text-[19px] md:text-[22px] font-['Inter'] tracking-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-white'}`}>
                Green Room
              </h4>
              <p className={`text-[15px] md:text-[16px] leading-[1.3] max-w-[320px] ${isLightMode ? 'text-black/65' : 'text-white/65'}`}>
                Invite speakers to a private waiting room to meet and prep to go on stage.
              </p>
            </div>
            
            <div className="absolute top-[200px] md:top-[220px] left-8 md:left-10 w-[calc(100%-2rem)] md:w-[120%]">
              <img 
                src={imgCard3} 
                alt="Green Room" 
                className="w-full h-auto object-contain object-left-top" 
              />
            </div>
          </div>

          {/* Card 4: Live Analytics */}
          <div className={`flex flex-col rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[600px] relative ${isLightMode ? 'bg-black/5' : 'bg-white/5'}`}>
            <div className="absolute top-0 left-0 w-full pt-8 md:pt-10 px-8 md:px-10 flex flex-col items-start gap-1.5 z-10">
              <h4 className={`text-[19px] md:text-[22px] font-['Inter'] tracking-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-white'}`}>
                Live Analytics
              </h4>
              <p className={`text-[15px] md:text-[16px] leading-[1.3] max-w-[320px] ${isLightMode ? 'text-black/65' : 'text-white/65'}`}>
                Track engagement, attendance, and conversion metrics in real-time as your event unfolds.
              </p>
            </div>
            
            <div className="absolute top-[200px] md:top-[220px] left-8 md:left-10 w-[calc(100%-2rem)] md:w-[120%]">
              <img 
                src="https://images.unsplash.com/photo-1610913721979-b20ede600e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc3NTg0MTk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Live Analytics" 
                className="w-full h-auto object-contain object-left-top" 
              />
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className={`group flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 font-['Inter'] text-[15px] font-medium
            ${isLightMode 
              ? 'border-black/20 text-black hover:bg-black/5' 
              : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            See all features
            <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-transform group-hover:translate-x-1 ${isLightMode ? 'bg-black/10 text-black' : 'bg-white/10 text-white'}`}>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}