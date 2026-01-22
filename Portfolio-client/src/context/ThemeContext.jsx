import React, { createContext, useContext, useEffect, useState } from 'react';

import { client } from '../client'; // Ensure correct path

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Load custom theme settings from Sanity
  useEffect(() => {
    const fetchThemeParams = async () => {
      try {
        const query = '*[_type == "themeSettings"][0]';
        const settings = await client.fetch(query);
        
        if (settings) {
          const root = window.document.documentElement;
          
          if (settings.primaryColor?.hex) {
            root.style.setProperty('--accent-primary', settings.primaryColor.hex);
            root.style.setProperty('--accent-hover', settings.primaryColor.hex); // Simple fallback for hover
          }
          
          if (settings.secondaryColor?.hex) {
            root.style.setProperty('--orange-accent', settings.secondaryColor.hex);
          }
          
          if (settings.backgroundColor?.hex) {
            root.style.setProperty('--bg-main', settings.backgroundColor.hex);
          }
          if (settings.surfaceColor?.hex) {
            root.style.setProperty('--bg-surface', settings.surfaceColor.hex);
          }
          if (settings.textColor?.hex) {
            root.style.setProperty('--text-main', settings.textColor.hex);
          }
        }
      } catch (error) {
        // console.error("Failed to fetch theme settings:", error); 
      }
    };

    fetchThemeParams();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
