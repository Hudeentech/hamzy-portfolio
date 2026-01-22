import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from '../../client';
import "./Exp.css";

function Exp() {
  const [headerData, setHeaderData] = useState(null);
  const [toolsData, setToolsData] = useState([]);

  useEffect(() => {
    // Fetch header and new 'tools' based schema
    const query = '{ "header": *[_type == "experienceHeader"][0], "list": *[_type == "experience"] }';
    
    client.fetch(query)
      .then((data) => {
        setHeaderData(data.header);
        setToolsData(data.list);
      })
      .catch((err) => console.error(err));
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="exp-section">
      <div className="exp-container">
        
        {/* Header Section */}
        {headerData && (
          <motion.div 
            className="exp-header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="exp-label">Technological Arsenal</span>
            <h2 className="exp-title">
              <span>{headerData.heading || "My Tools"}</span>{' '}
              <span className="exp-title-contrast">
                 {headerData.contrast1 && `${headerData.contrast1}, `} {headerData.contrast2 && `${headerData.contrast2} & `} {headerData.contrast3}
              </span>
            </h2>
          </motion.div>
        )}

        {/* Tools / Skills Grid */}
        <motion.div 
          className="exp-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {toolsData && toolsData.map((category, index) => (
            <motion.div 
              className="exp-card"
              key={index}
              variants={cardVariants}
            >
              <div className="exp-year-wrapper">
                {/* Reusing existing class for styling consistency, but displaying category name */}
                <h3 className="exp-category-title">{category.category}</h3>
              </div>
              
              <div className="exp-skills-container">
                {category.tools && category.tools.map((tool, idx) => (
                  <motion.div 
                    className="skill-icon-wrap" 
                    key={idx}
                    title={tool.name}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tool.icon && (
                       <img src={urlFor(tool.icon).url()} alt={tool.name} className="skill-icon" />
                    )}
                    {/* Optional: Show name on hover or below if design permits, for now keep icons clean */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Exp;
