import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  isLightMode: boolean;
  toggleTheme: () => void;
  setIsLightMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isLightMode: false,
  toggleTheme: () => {},
  setIsLightMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === "/";
    }
    return false;
  });

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme, setIsLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);