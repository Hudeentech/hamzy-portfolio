import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Hero/Hero.css";
import { client, urlFor } from '../../client';

function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const query = '*[_type == "hero"][0]';
    client.fetch(query)
      .then((data) => setHeroData(data))
      .catch((err) => console.error(err));
  }, []);

  // if (!heroData) return null; <-- Removed to prevent layout shift
  const displayData = heroData || {};

  return (
    <section className="hero-section">
      <div className="futuristic-container">
        
        {/* Left: Data/Info Column */}
        <div className="f-col-left">
           <motion.div 
             className="f-meta-tag"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
           >
              {displayData.smallText || "GRAPHIC_DESIGN / ART_DIRECTION"}
           </motion.div>

           <motion.h1 
             className="f-title"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.1 }}
           >
             {displayData.title || "DANESI HAMZAH"}
           </motion.h1>

           <motion.p 
             className="f-bio"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.7, delay: 0.3 }}
           >
             {displayData.bio || "VISUAL DESIGNER [v.2.0] SPECIALIZED IN BRAND IDENTITY, DIGITAL ART & EDITORIAL LAYOUTS."}
           </motion.p>

           <motion.div 
             className="f-actions"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.7, delay: 0.5 }}
           >
              <a href="#projects" className="f-btn primary">
                 {displayData.cta1 || "View_Portfolio"}
              </a>
              <a href="#contact" className="f-btn secondary">
                 {displayData.cta2 || "Start Collaboration"}
              </a>
           </motion.div>
        </div>

        {/* Right: Visual Port */}
        <div className="f-col-right">
           <div className="f-image-frame-outer">
              {/* Tech Decorations */}
              <div className="f-decor-corner top-left"></div>
              <div className="f-decor-corner bottom-right"></div>
              <div className="f-scan-line"></div>

              <motion.div 
                className="f-image-wrapper"
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {displayData.image && (
                    <img 
                    src={urlFor(displayData.image).url()} 
                    alt={displayData.title} 
                    className="f-hero-img" 
                    />
                )}
              </motion.div>
              
              {/* Floating Data Badge */}
              <motion.div 
                className="f-data-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                 <span className="lbl">STATUS</span>
                 <span className="val">{displayData.status || "AVAILABLE"}</span>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
