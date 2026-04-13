import React from "react";
import createImg from "figma:asset/e66ef56f0b767b50b8860584a5fa19bd69be614e.png";
import engageImg from "figma:asset/34d961d0ab311afc7564d03f49aed88b4a54a35f.png";
import analyzeImg from "figma:asset/818a5b0370e47250af5f3233218b98f9533f97ef.png";

export function HowItWorksSection() {
  return (
    <section className="relative z-20 w-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[32px] border-t border-white/60 px-4 md:px-12 lg:px-20 pt-16 pb-16 flex justify-center overflow-hidden rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] -mt-[150px] md:-mt-[250px] lg:-mt-[350px] shadow-[0_-20px_60px_rgba(0,0,0,0.1)] bg-[#ffffffe3]">
      <div className="w-full max-w-[1280px] flex flex-col items-start gap-12 relative">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full gap-6 text-center">
          <h2 className="font-['IvyOra_Text'] text-6xl md:text-8xl lg:text-[128px] text-[#0b0f14] tracking-[-5px] leading-[0.9] font-medium">
            How it works
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 max-w-[531px] md:max-w-[700px] lg:max-w-[800px] pt-4">
            <p className="font-['Inter'] text-sm md:text-base text-black/60 uppercase tracking-widest text-center max-w-[280px] md:max-w-[700px]">
              Behavior → Momentum → Revenue. Plug into your stack, make performance visible, and turn daily activity into momentum that drives revenue.
            </p>
            <button className="relative flex items-center justify-center px-6 py-3 rounded-[13px] border-[0.8px] border-[rgba(255,255,255,0.9)] backdrop-blur-[4px] bg-[linear-gradient(189.6deg,rgba(25,173,125,0.85)_25.1%,rgba(20,144,103,0.85)_64.2%)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),inset_2px_2px_5px_0px_rgba(255,255,255,0.4)] text-[#f5f7fa] font-['Inter'] font-medium text-[13px] transition-transform active:scale-95 hover:opacity-90 whitespace-nowrap w-max">
              Learn more
            </button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/10" />

        {/* Step 1: Create */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 pb-12 border-b border-black/10 group">
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[288px] shrink-0">
            <span className="font-['Inter'] text-lg text-black/50 font-medium">Step 1</span>
            <div className="flex items-center gap-4">
              <h3 className="font-['Inter'] text-5xl md:text-[59px] text-[#0b0f14] tracking-[-2px] font-bold">Integrate</h3>
              <div className="w-[80px] h-[80px] bg-white border border-black/5 flex items-center justify-center rounded-full text-[#0b0f14] group-hover:scale-105 transition-transform duration-500 shadow-xl">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </div>
            </div>
            <p className="font-['Inter'] text-[15px] text-black/70 leading-relaxed">
              Connect your stack. Enzy sits right on your tools for a smooth setup without changing your sources.
            </p>
          </div>
          <div className="w-full lg:w-[834px] lg:ml-auto h-[212px] bg-white/40 border-2 border-black/60 backdrop-blur-xl rounded-full overflow-hidden relative group-hover:border-black group-hover:bg-white/50 transition-colors duration-500 shadow-[inset_0_4px_24px_rgba(255,255,255,0.7)]">
            <img src={createImg} alt="Create Dashboard" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Step 2: Engage */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 pb-12 border-b border-black/10 group">
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[288px] shrink-0">
            <span className="font-['Inter'] text-lg text-black/50 font-medium">Step 2</span>
            <div className="flex items-center gap-4">
              <h3 className="font-['Inter'] text-5xl md:text-[60px] text-[#0b0f14] tracking-[-2px] font-bold">Activate</h3>
              <div className="w-[74px] h-[74px] bg-white border border-black/5 flex items-center justify-center rounded-full text-[#0b0f14] group-hover:scale-105 transition-transform duration-500 shadow-xl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </div>
            </div>
            <p className="font-['Inter'] text-[14px] text-black/70 leading-relaxed">
              Every action becomes visible—across reps, teams, and managers. No delays. No blind spots.
            </p>
          </div>
          <div className="w-full lg:w-[834px] lg:ml-auto h-[212px] bg-white/40 border-2 border-black/60 backdrop-blur-xl rounded-full overflow-hidden relative group-hover:border-black group-hover:bg-white/50 transition-colors duration-500 shadow-[inset_0_4px_24px_rgba(255,255,255,0.7)]">
            <img src={engageImg} alt="Engage Audience" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Step 3: Analyze */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 pb-12 border-b border-black/10 group">
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[288px] shrink-0">
            <span className="font-['Inter'] text-lg text-black/50 font-medium">Step 3</span>
            <div className="flex items-center gap-4">
              <h3 className="font-['Inter'] text-5xl md:text-[60px] text-[#0b0f14] tracking-[-2px] font-bold">Drive Momentum</h3>
              <div className="w-[65px] h-[65px] bg-white border border-black/5 flex items-center justify-center rounded-full text-[#0b0f14] group-hover:scale-105 transition-transform duration-500 shadow-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </div>
            </div>
            <p className="font-['Inter'] text-[14px] text-black/70 leading-relaxed">
              Visibility creates competition. Competition drives consistency. Consistency compounds into performance.
            </p>
          </div>
          <div className="w-full lg:w-[834px] lg:ml-auto h-[212px] bg-white/40 border-2 border-black/60 backdrop-blur-xl rounded-full overflow-hidden relative group-hover:border-black group-hover:bg-white/50 transition-colors duration-500 shadow-[inset_0_4px_24px_rgba(255,255,255,0.7)]">
            <img src={analyzeImg} alt="Analyze Results" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
}