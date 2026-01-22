import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client } from '../../client';
import './About.css';

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = '*[_type == "about"][0]';
    client.fetch(query)
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  // if (!data) return null;
  const displayData = data || {};

  return (
    <section className="about-section" id="about">
      <div className="abt-stream-container">
          
           {/* 1. Header Block */}
           <motion.div 
             className="abt-header-block"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <span className="abt-meta-label">
                {displayData.homeLabel || "ID_VERIFIED // 02"}
              </span>
           </motion.div>

           {/* 3. Narrative Body */}
           <motion.div 
             className="abt-body-block"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
           >
              <p className="abt-bio-lead">
                 {displayData.homeHeadline || "I help brands find their distinct visual voice in a noisy digital landscape."}
              </p>
              
              <div className="abt-bio-secondary">
                 {displayData.homeDescription || "My work sits at the intersection of design direction and technical execution. By combining rigorous grid systems with fluid digital art, I create experiences that are both structured and emotive."}
                 <br/><br/>
                 {displayData.homeFocus && (
                    <>Current Focus: {displayData.homeFocus}</>
                 )}
                 {!displayData.homeFocus && "Current Focus: 3D Web Experiences & Minimalist Ecommerce."}
              </div>
           </motion.div>

           {/* 4. Stats Footer */}
           <div className="abt-stats-row">
              <div className="minimal-stat">
                 <span className="m-stat-val">{displayData.stats?.years || "05"}</span>
                 <span className="m-stat-label">Years_Experience</span>
              </div>
              <div className="minimal-stat">
                 <span className="m-stat-val">{displayData.stats?.projects || "50+"}</span>
                 <span className="m-stat-label">Projects_Shipped</span>
              </div>
              <div className="minimal-stat">
                 <span className="m-stat-val">{displayData.stats?.clients || "100%"}</span>
                 <span className="m-stat-label">Client_Sat</span>
              </div>
           </div>

      </div>
    </section>
  );
}

export default About;