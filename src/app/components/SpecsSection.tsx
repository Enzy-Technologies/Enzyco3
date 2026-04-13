import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeProvider";

export function SpecsSection() {
  const { isLightMode } = useTheme();

  return (
    <section className={`relative z-10 w-full px-4 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center border-t ${isLightMode ? 'border-black/10' : 'border-white/10'}`}>
      <div className="w-full max-w-[1500px] flex flex-col items-center">
        
        {/* Large Liquid Glass Pill Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[1400px] w-full mb-20 md:mb-32"
          style={{ aspectRatio: '16 / 7' }}
        >
          {/* Pill-shaped glass container */}
          <div
            className="relative overflow-hidden transition-all duration-500 w-full h-full"
            style={{
              borderRadius: '392px',
              background: 'rgba(11, 15, 20, 0.4)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(25, 173, 125, 0.15)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Inner gradient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(25, 173, 125, 0.05), rgba(60, 217, 163, 0.03))',
                borderRadius: 'inherit',
              }}
            />

            {/* Right blur accent inside pill */}
            <div
              className="absolute rounded-full blur-[80px] opacity-40"
              style={{
                background: 'rgba(60, 217, 163, 0.15)',
                width: '360px',
                height: '360px',
                right: '10%',
                top: '-10%',
              }}
            />

            {/* Left blur accent inside pill */}
            <div
              className="absolute rounded-full blur-[80px] opacity-30"
              style={{
                background: 'rgba(25, 173, 125, 0.12)',
                width: '320px',
                height: '320px',
                left: '5%',
                bottom: '-15%',
              }}
            />

            {/* Left hand image inside pill */}
            <div className="absolute h-[70%] left-0 bottom-0 w-[32%] pointer-events-none z-10">
              <ImageWithFallback 
                alt="Left Hand" 
                className="absolute h-full w-auto object-contain object-bottom-left" 
                src="https://39823762.fs1.hubspotusercontent-na2.net/hubfs/39823762/Enzy.co/Untitled-2%201.png"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
                }}
              />
            </div>

            {/* Right hand image inside pill */}
            <div className="absolute h-[70%] right-0 bottom-0 w-[32%] pointer-events-none z-10">
              <ImageWithFallback 
                alt="Right Hand" 
                className="absolute h-full w-auto object-contain object-bottom-right right-0" 
                src="https://39823762.fs1.hubspotusercontent-na2.net/hubfs/39823762/Enzy.co/Untitled-2%201-1.png"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
                }}
              />
            </div>

            {/* Content container - centered */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 md:px-20 py-12 md:py-16">
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-3xl"
              >
                <h2 
                  className="text-3xl md:text-4xl lg:text-[56px] font-normal leading-tight md:leading-[70px] tracking-[-0.0625em] mb-6 text-[#f5f7fa]"
                  style={{ fontFamily: "'IvyOra_Text', serif" }}
                >
                  "Makes other platforms<br />look elementary. It really stands out."
                </h2>
              </motion.div>

              {/* Attribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8"
              >
                <p className="text-base md:text-[18px] leading-[26px] text-[#a3adb8]">
                  Code Mangeltron, CEO of All
                </p>
              </motion.div>

              {/* CTA Button with gradient border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <button
                  className="relative flex items-center justify-center px-6 py-3 rounded-[13px] border-[0.8px] border-[rgba(255,255,255,0.76)] backdrop-blur-[2px] bg-[linear-gradient(189.6deg,rgba(25,173,125,0.39)_25.1%,rgba(20,144,103,0.39)_64.2%)] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25),inset_2px_2px_5px_0px_rgba(255,255,255,0.25)] text-[#f5f7fa] font-['Inter'] font-medium text-[13px] transition-opacity hover:opacity-90 whitespace-nowrap"
                  onClick={() => console.log('View More clicked')}
                >
                  View More
                </button>
              </motion.div>
            </div>
          </div>

          {/* Outer glow effect around pill */}
          <div
            className="absolute -inset-[2px] rounded-[392px] opacity-30 pointer-events-none -z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(25, 173, 125, 0.2), rgba(60, 217, 163, 0.15))',
              filter: 'blur(40px)',
            }}
          />
        </motion.div>

        {/* Header content */}
        <div className="flex flex-col items-center w-full max-w-[800px] gap-8 mb-20">
          <h2 className="font-['Roboto_Mono'] text-[#19ad7d] text-xs uppercase tracking-widest text-center">
            Specs
          </h2>
          <h3 className={`font-['Inter'] font-bold text-5xl md:text-[60px] tracking-[-3px] leading-[0.9] text-center ${isLightMode ? 'text-[#0b0f14]' : 'text-[#f5f7fa]'}`}>
            Why Choose Enzy?
          </h3>
          <p className="font-['Roboto_Mono'] text-[#6f6f6f] text-[15px] uppercase tracking-[-0.075px] text-center leading-relaxed max-w-[600px]">
            You need a solution that keeps up. That's why we developed Enzy. A developer-friendly approach to streamline your business.
          </p>
          <a href="#" className="relative flex items-center justify-center px-6 py-3 mt-4 rounded-[13px] border-[0.8px] border-[rgba(255,255,255,0.76)] backdrop-blur-[2px] bg-[linear-gradient(189.6deg,rgba(25,173,125,0.39)_25.1%,rgba(20,144,103,0.39)_64.2%)] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25),inset_2px_2px_5px_0px_rgba(255,255,255,0.25)] text-[#f5f7fa] font-['Inter'] font-medium text-[13px] transition-opacity hover:opacity-90 whitespace-nowrap w-max">
            Discover More
          </a>
        </div>

        {/* Comparison Table */}
        <div className="w-full max-w-[1280px] overflow-x-auto pb-12 pt-4 px-4 scrollbar-hide">
          <div className={`min-w-[1000px] relative rounded-[32px] border transition-colors duration-500 overflow-hidden shadow-2xl ${isLightMode ? 'bg-white/40 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-3xl' : 'bg-[#0a0f16]/40 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-3xl'}`}>
            
            {/* Animated Liquid Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  x: ["0%", "5%", "0%"],
                  y: ["0%", "10%", "0%"],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#19ad7d]/20 blur-[120px] mix-blend-screen"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  x: ["0%", "-10%", "0%"],
                  y: ["0%", "-5%", "0%"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#149067]/20 blur-[140px] mix-blend-screen"
              />
            </div>

            {/* Table Content (Grid for better scannability) */}
            <div className="relative z-10 w-full flex flex-col">
              
              {/* Table Header */}
              <div className={`grid grid-cols-[1.2fr_1.5fr_1fr_1fr] border-b ${isLightMode ? 'border-black/5' : 'border-white/5'}`}>
                <div className="p-6 md:p-8 flex items-end">
                  <h4 className={`font-['Inter'] font-semibold text-xs md:text-sm uppercase tracking-widest ${isLightMode ? 'text-black/40' : 'text-white/40'}`}>Capabilities</h4>
                </div>

                <div className="p-6 md:p-8 relative overflow-hidden flex flex-col justify-end border-x-2 border-t-2 border-[#19ad7d] bg-[#19ad7d]/10 rounded-t-[24px] shadow-[0_-10px_30px_rgba(25,173,125,0.1)]">
                  <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#19ad7d]/20 to-transparent pointer-events-none" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#19ad7d]/40 blur-[40px] rounded-full pointer-events-none" />
                  <h4 className="font-['IvyOra_Text'] font-bold text-4xl text-[#19ad7d] tracking-tight relative z-10">Enzy</h4>
                  <p className="text-[#19ad7d]/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 relative z-10">The Operating System</p>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-end">
                  <h4 className={`font-['Inter'] font-semibold text-lg tracking-tight ${isLightMode ? 'text-black/60' : 'text-white/60'}`}>Traditional Tools</h4>
                  <p className={`text-xs mt-1 ${isLightMode ? 'text-black/40' : 'text-white/40'}`}>CRMs & Dashboards</p>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-end">
                  <h4 className={`font-['Inter'] font-semibold text-lg tracking-tight ${isLightMode ? 'text-black/60' : 'text-white/60'}`}>Gamification Tools</h4>
                  <p className={`text-xs mt-1 ${isLightMode ? 'text-black/40' : 'text-white/40'}`}>Points & Badges</p>
                </div>
              </div>

              {/* Table Rows */}
              {[
                { cap: "Real-Time Behavior Visibility", enzy: "See rep activity as it happens", trad: "Delayed reporting", gami: "Limited activity tracking" },
                { cap: "Built-In Competition", enzy: "Live leaderboards & rankings", trad: "No competition layer", gami: "Static metrics only" },
                { cap: "Momentum System", highlight: true, enzy: "Activity → consistency → performance loop", trad: "No reinforcement system", gami: "Disconnected features" },
                { cap: "Daily Engagement", enzy: "Used 100+ times per day", trad: "Checked occasionally", gami: "Not part of daily workflow" },
                { cap: "Manager Control", enzy: "Intervene in real time", trad: "React after results drop", gami: "React after results drop" },
                { cap: "System Integration", enzy: "Sits on top of your CRM", trad: "Replace or silo data", gami: "Replace or silo data" }
              ].map((row, i, arr) => (
                <div key={i} className={`grid grid-cols-[1.2fr_1.5fr_1fr_1fr] group transition-colors duration-300 ${isLightMode ? 'hover:bg-black/[0.02]' : 'hover:bg-white/[0.02]'} ${i !== arr.length - 1 ? (isLightMode ? 'border-b border-black/5' : 'border-b border-white/5') : ''}`}>
                  
                  {/* Capability Cell */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    {row.highlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#19ad7d] mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#19ad7d] animate-pulse shadow-[0_0_8px_rgba(25,173,125,0.8)]" />
                        Core Advantage
                      </span>
                    )}
                    <span className={`font-['Inter'] font-semibold text-[15px] ${isLightMode ? 'text-[#1a202c]' : 'text-white'}`}>
                      {row.cap}
                    </span>
                  </div>

                  {/* Enzy Cell */}
                  <div className={`p-6 md:p-8 flex items-center gap-4 relative border-x-2 border-[#19ad7d] bg-[#19ad7d]/[0.08] ${i === arr.length - 1 ? 'rounded-b-[24px] border-b-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="w-6 h-6 bg-[#19ad7d] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(25,173,125,0.4)]">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`font-['Inter'] font-semibold text-[15px] leading-snug ${isLightMode ? 'text-[#0b0f14]' : 'text-white'}`}>
                      {row.enzy}
                    </span>
                  </div>

                  {/* Traditional Tools Cell */}
                  <div className={`p-6 md:p-8 flex items-center gap-3 transition-opacity duration-300 ${isLightMode ? 'opacity-70 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isLightMode ? 'bg-black/10 text-black/60' : 'bg-white/10 text-white/60'}`}>
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <span className={`font-['Inter'] font-medium text-[14px] leading-snug ${isLightMode ? 'text-black/70' : 'text-white/70'}`}>
                      {row.trad}
                    </span>
                  </div>

                  {/* Gamification Cell */}
                  <div className={`p-6 md:p-8 flex items-center gap-3 transition-opacity duration-300 ${isLightMode ? 'opacity-70 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isLightMode ? 'bg-black/10 text-black/60' : 'bg-white/10 text-white/60'}`}>
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <span className={`font-['Inter'] font-medium text-[14px] leading-snug ${isLightMode ? 'text-black/70' : 'text-white/70'}`}>
                      {row.gami}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}