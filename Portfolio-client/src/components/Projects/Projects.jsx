import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from '../../client';
import "./Projects.css";

function Projects({ blog, onClick }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [showArticle, setShowArticle] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectData, setProjectData] = useState([]);
  const [tags, setTags] = useState(["All"]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query)
      .then((data) => {
        setProjectData(data);
        // Extract unique tags if available, else stick to defaults or derive
        if(data.length > 0) {
            const allTags = data.reduce((acc, curr) => {
                const tagList = Array.isArray(curr.tags) ? curr.tags : [curr.tags];
                return [...acc, ...tagList];
            }, []);
            const uniqueTags = ["All", ...new Set(allTags.filter(Boolean))];
            setTags(uniqueTags);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (tag) => {
    setSelectedTag(tag === "All" ? null : tag);
  };

  // Animation Variants (Kept same)
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const titleVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
  const buttonVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const projectCardVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showArticle) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [showArticle]);

  return (
    <div className="prj-c">
      {/* Title Header */}
      <div className="prj-title">
         <div>
            <motion.h4 variants={titleVariants} initial="hidden" whileInView="visible">SELECTED WORKS</motion.h4>
            <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible">
               Visual Archive
            </motion.h2>
         </div>
         
         <motion.div
            className="toggel-btn"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
         >
            {tags.map((tag, index) => (
               <motion.button
                  key={tag}
                  className={`filter-btn ${
                  (selectedTag === null && tag === "All") || selectedTag === tag ? "active" : ""
                  }`}
                  onClick={() => handleClick(tag)}
                  custom={index}
                  variants={buttonVariants}
               >
                  {tag.toUpperCase()}
               </motion.button>
            ))}
         </motion.div>
      </div>

      {/* Project Grid */}
      <motion.div
        className="prj-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
      {projectData
        .filter((data) => {
            if (!selectedTag) return true;
            const pTags = Array.isArray(data.tags) ? data.tags : [data.tags];
            return pTags.includes(selectedTag);
        })
        .map((data, index) => (
        <motion.div
          key={data._id || index}
          className="prj-b"
          variants={projectCardVariants}
          onClick={() => {
            setSelectedProject(data);
            setShowArticle(true);
          }}
        >
          <div className="img-container">
            {data.mainImage && (
             <img src={urlFor(data.mainImage).url()} alt={data.title} className="prj-img" />
            )}
            {!data.mainImage && data.images && (
                <img src={urlFor(data.images).url()} alt={data.title} className="prj-img" />
            )}
          </div>

          <div className="prj-content-container">
             <div className="prj-main-c">
                <h3 className="name">{data.title}</h3>
                <p>Mixed Media / {Array.isArray(data.tags) ? data.tags.join(', ') : data.tags}</p>
             </div>
             <div style={{ fontSize: '1.5rem', transform: 'rotate(-45deg)', opacity: 0.5 }}>→</div>
          </div>
        </motion.div>
        ))}
      </motion.div>

      {/* Project Details Modal */}
      {showArticle && selectedProject && (
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setShowArticle(false)}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={e => e.stopPropagation()}
        >
          <button 
            className="modal-close"
            onClick={() => setShowArticle(false)}
          >
            ×
          </button>
          {selectedProject.mainImage && (
             <img 
            src={urlFor(selectedProject.mainImage).url()} 
            alt={selectedProject.title} 
            className="modal-image"
          />
          )}

         <div className="modal-text-container">
            <h2 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '1rem' }}>
               {selectedProject.title}
            </h2>
            <p>{selectedProject.overview || selectedProject.description}</p>
          </div>
          <div className="modal-links">
            <a 
            href={selectedProject.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="demo-link"
            >
            View Casestudy
            </a>
          </div>
        </motion.div>
      </motion.div>
      )}
    </div>
    );
}

export default Projects;
