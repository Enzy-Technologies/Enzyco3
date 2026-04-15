import React from "react";
import { Link } from "react-router";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function CTAButton({ href, className = "", children, ...props }: CTAButtonProps) {
  const baseClasses = "relative flex items-center justify-center px-6 py-3 rounded-[13px] border-[0.8px] border-[rgba(255,255,255,0.9)] backdrop-blur-[4px] bg-[linear-gradient(189.6deg,rgba(25,173,125,0.85)_25.1%,rgba(20,144,103,0.85)_64.2%)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),inset_2px_2px_5px_0px_rgba(255,255,255,0.4)] text-[var(--color-surface-light)] font-['Inter'] font-medium text-[13px] transition-transform active:scale-95 hover:opacity-90 whitespace-nowrap w-max pointer-events-auto";
  
  if (href) {
    // If it's an external link
    if (href.startsWith("http")) {
      return (
        <a href={href} className={`${baseClasses} ${className}`}>
          {children}
        </a>
      );
    }
    // Internal routing
    return (
      <Link to={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
