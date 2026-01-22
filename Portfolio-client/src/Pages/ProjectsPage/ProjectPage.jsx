import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import "./project-page.css";
import Footer from "../../components/Footer/Footer";
import { client, urlFor } from '../../client';

function ProjectPage() {
  const [projectData, setProjectData] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tags, setTags] = useState(["All"]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query)
      .then((data) => {
        setProjectData(data);
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

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Nav />
      {/* Wrapper to ensure Footer stays at bottom if content short, but here content is grid so usually fine. */}
      
      <div className="prj-page-container">
        
        {/* Header */}
        <div className="prj-page-title">
          <span>// ARCHIVE_VIEW</span>
          <h2>
            SELECTED PROJECTS
          </h2>
  
          <div className="toggel-btn">
            {tags.map((tag, index) => (
              <motion.button
                key={tag}
                className={`filter-btn ${
                  (selectedTag === null && tag === "All") || selectedTag === tag ? "active" : ""
                }`}
                onClick={() => handleClick(tag)}
              >
                {tag === "All" ? "[ ALL ]" : `[ ${tag.toUpperCase()} ]`}
              </motion.button>
            ))}
          </div>
        </div>
  
        {/* Grid */}
        <motion.div
          className="prj-page-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {projectData
            .filter((data) => {
                if (!selectedTag) return true;
                const pTags = Array.isArray(data.tags) ? data.tags : [data.tags];
                return pTags.includes(selectedTag);
            })
            .map((data) => (
              <motion.div
                key={data._id}
                className="prj-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => openModal(data)}
              >
                {/* Image on Top for Card Flow */}
                <div className="prj-img-container">
                {data.mainImage && (
                  <img
                    src={urlFor(data.mainImage).url()}
                    alt={data.title}
                    className="prj-p-img"
                  />
                )}
                </div>

                <div className="prj-main-c">
                  <h3 className="name">{data.title}</h3>
                </div>
  
                <div className="prj-main-desc">
                  <p>{Array.isArray(data.tags) ? data.tags.join(' / ') : data.tags} — {data.description}</p>
                </div>
              </motion.div>
            ))}
        </motion.div>
  
        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="p-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="p-modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="p-close-modal-btn" onClick={closeModal}>
                   &#x2715;
                </button>
  
                <h2>{selectedProject.title}</h2>
                <div style={{borderBottom: '1px solid var(--border-light)', marginBottom: '2rem', paddingBottom: '1rem', color: 'var(--accent-primary)', fontFamily:'monospace'}}>
                   CATEGORY :: {Array.isArray(selectedProject.tags) ? selectedProject.tags.join(', ').toUpperCase() : 'PROJECT'}
                </div>

                <p>{selectedProject.description}</p>
  
                {/* Case Images - Checking for extra images array or specific fields */}
                {selectedProject.images && selectedProject.images.map((img, idx) => (
                     <img
                     key={idx}
                     src={urlFor(img).url()}
                     alt={selectedProject.title}
                     className="p-modal-img"
                     />
                ))}
  
                <p>{selectedProject.overview}</p>
  
                <p>{selectedProject.conclusion}</p>
                
                <div style={{marginTop: '2rem'}}>
                    <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-btn"
                    >
                        View Project
                    </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
  
      </div>

      <Footer />
    </div>
  );
}

export default ProjectPage;
