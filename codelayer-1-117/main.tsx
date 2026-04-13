import React from 'react';

export default function Component() {
  const column1Ref = React.useRef<HTMLDivElement>(null);
  const column2Ref = React.useRef<HTMLDivElement>(null);
  const [hoveredLogo, setHoveredLogo] = React.useState<number | null>(null);
  const [randomHighlightedLogo, setRandomHighlightedLogo] = React.useState<number | null>(null);

  // Generate 50 logo placeholders with testimonials
  const testimonials = [
    "Absolutely transformed our business operations!",
    "Best decision we ever made for our company.",
    "Outstanding service and remarkable results.",
    "Exceeded all of our expectations tremendously.",
    "Game-changer for our entire organization.",
    "Incredible value and exceptional support.",
    "Made our workflow seamless and efficient.",
    "Revolutionary impact on our productivity.",
    "Their expertise is truly unmatched.",
    "Fantastic experience from start to finish.",
  ];

  const logos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Company ${i + 1}`,
    testimonial: testimonials[i % testimonials.length]
  }));

  // Split logos into two columns
  const column1Logos = logos.filter((_, index) => index % 2 === 0);
  const column2Logos = logos.filter((_, index) => index % 2 === 1);

  // Random testimonial display when not hovering
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredLogo === null) {
        const randomIndex = Math.floor(Math.random() * logos.length);
        setRandomHighlightedLogo(logos[randomIndex].id);
        
        setTimeout(() => {
          setRandomHighlightedLogo(null);
        }, 3000); // Show for 3 seconds
      }
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, [hoveredLogo, logos.length]);

  // Auto-scroll functionality for column 1 (scrolls down)
  React.useEffect(() => {
    const container = column1Ref.current;
    if (!container) return;

    const scrollSpeed = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Auto-scroll functionality for column 2 (scrolls up)
  React.useEffect(() => {
    const container = column2Ref.current;
    if (!container) return;

    // Start from bottom
    container.scrollTop = container.scrollHeight;

    const scrollSpeed = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (container.scrollTop <= 0) {
        container.scrollTop = container.scrollHeight - container.clientHeight;
      } else {
        container.scrollTop -= scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const renderLogo = (logo: typeof logos[0]) => {
    const isHovered = hoveredLogo === logo.id;
    const isRandomHighlighted = randomHighlightedLogo === logo.id;
    const showTestimonial = isHovered || isRandomHighlighted;

    return (
      <div
        key={logo.id}
        className="relative backdrop-blur-md bg-white/30 border border-white/40 rounded-lg p-8 flex items-center justify-center hover:bg-white/40 transition-all duration-200 shadow-lg cursor-pointer"
        onMouseEnter={() => setHoveredLogo(logo.id)}
        onMouseLeave={() => setHoveredLogo(null)}
      >
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
            <span className="text-2xl text-blue-600">{logo.id}</span>
          </div>
          <p className="text-gray-600 text-sm">{logo.name}</p>
        </div>
        
        {/* Testimonial overlay */}
        {showTestimonial && (
          <div className="absolute inset-0 backdrop-blur-lg bg-blue-600/95 rounded-lg flex items-center justify-center p-6 animate-in fade-in duration-300">
            <p className="text-white text-center italic">"{logo.testimonial}"</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-8">Partner Logos</h1>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Column 1 - Scrolls Down */}
          <div 
            ref={column1Ref}
            className="flex flex-col gap-6 overflow-y-auto max-h-[80vh] scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {column1Logos.map((logo) => renderLogo(logo))}
          </div>

          {/* Column 2 - Scrolls Up */}
          <div 
            ref={column2Ref}
            className="flex flex-col gap-6 overflow-y-auto max-h-[80vh] scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {column2Logos.map((logo) => renderLogo(logo))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}