import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import { client } from '../../client';
import './Services.css';

function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"] | order(_createdAt asc)';
    client.fetch(query).then((res) => {
        setData(res);
    }).catch(err => console.error(err));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1, 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      id='services'
      className='svc'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
     <div className="svc-header-grid">
         <motion.h1 
            className="section-number-outline"
            variants={itemVariants}
         >
            01 / EXPERTISE
         </motion.h1>
         
         <div className="svc-container">
            <motion.h2 variants={itemVariants}>
              Visual Systems &amp;
              Art Direction
            </motion.h2>
         </div>
      </div>

      <motion.div
        className="svc-card-container"
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="svc-card"
            variants={itemVariants}
          >
            {/* Meta column */}
            <div className="svc-card-meta">
               <span>CONCEPT_0{index + 1}</span>
            </div>

            {/* Content Column */}
            <div className="svc-content-wrapper">
               <motion.h4>{item.heading || item.title}</motion.h4>
               <motion.p>{item.summary || item.description}</motion.p>
            </div>
            
            <div style={{ alignSelf: 'flex-end', opacity: 0.3, marginTop: '1rem', fontSize: '1.5rem' }}>
                +
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
