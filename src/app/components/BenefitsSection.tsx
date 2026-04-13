import React from "react";
import { useTheme } from "./ThemeProvider";

export function BenefitsSection() {
  const { isLightMode } = useTheme();

  return (
    <section className={`relative z-10 w-full px-4 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center border-t ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
      <div className="w-full max-w-[1280px] flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="font-['Roboto_Mono'] text-[#19ad7d] text-xs uppercase tracking-widest">
            Benefits
          </h2>
          <p className={`font-['Inter'] font-bold text-5xl md:text-[60px] tracking-[-3px] leading-[0.9] ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
            When behavior changes, results follow.
          </p>
          <p className={`font-['Roboto_Mono'] text-[15px] uppercase tracking-[-0.075px] max-w-[600px] leading-relaxed ${isLightMode ? 'text-[#4a5568]' : 'text-[#a3adb8]'}`}>
            Enzy provides real insights, without the data overload.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full pt-8 border-t ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
          
          {/* Feature 1 */}
          <div className={`flex flex-col gap-6 w-full border-t pt-10 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <div className="flex flex-col gap-5">
              <h3 className={`font-['Inter'] text-[48px] lg:text-[56px] font-bold tracking-[-2px] leading-none ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
                27%
              </h3>
              <p className="font-['Roboto_Mono'] text-[#6f6f6f] text-[15px] uppercase tracking-[-0.075px] leading-relaxed">
                Increase in sales when teams use Enzy's competitions, incentives, and leaderboards.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`flex flex-col gap-6 w-full border-t pt-10 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <div className="flex flex-col gap-5">
              <h3 className={`font-['Inter'] text-[48px] lg:text-[56px] font-bold tracking-[-2px] leading-none ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
                180+
              </h3>
              <p className="font-['Roboto_Mono'] text-[#6f6f6f] text-[15px] uppercase tracking-[-0.075px] leading-relaxed">
                Daily interactions. That means performance is always visible.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className={`flex flex-col gap-6 w-full border-t pt-10 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <div className="flex flex-col gap-5">
              <h3 className={`font-['Inter'] text-[48px] lg:text-[56px] font-bold tracking-[-2px] leading-none ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
                170%
              </h3>
              <p className="font-['Roboto_Mono'] text-[#6f6f6f] text-[15px] uppercase tracking-[-0.075px] leading-relaxed">
                More positive customer outcomes driven by consistent activity in Enzy.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className={`flex flex-col gap-6 w-full border-t pt-10 ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
            <div className="flex flex-col gap-3 h-full justify-center">
              <h3 className={`font-['Inter'] text-[24px] lg:text-[28px] font-bold tracking-[-1px] leading-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
                Visibility drives action.
              </h3>
              <h3 className={`font-['Inter'] text-[24px] lg:text-[28px] font-bold tracking-[-1px] leading-tight ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
                Action builds momentum.
              </h3>
              <h3 className={`font-['Inter'] text-[24px] lg:text-[28px] font-bold tracking-[-1px] leading-tight text-[#19ad7d]`}>
                Momentum drives revenue.
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}