import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from '../../client';
import "./Testimonial.css";

const AUTOPLAY_INTERVAL = 7000; 

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null); 
  const [autoSelectIndex, setAutoSelectIndex] = useState(0); 

  useEffect(() => {
    fetch('https://hamzy-review.vercel.app/api/testimonials/approved')
      .then((res) => res.json())
      .then((data) => {
        // Handle response structure (it might be an array or an object with a data or value property)
        const incomingData = Array.isArray(data) ? data : data.value || data.data || [];
        setTestimonials(incomingData);
        
        if (incomingData.length > 0) {
            setSelectedTestimonial(incomingData[0]);
            setAutoSelectIndex(0);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
        setIsLoading(false);
      });
  }, []);

  const handleSelectTestimonial = useCallback((testimonial, index) => {
    setSelectedTestimonial(testimonial);
    setAutoSelectIndex(index); 
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setAutoSelectIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % testimonials.length;
          setSelectedTestimonial(testimonials[nextIndex]); 
          return nextIndex;
        });
      }, AUTOPLAY_INTERVAL);
      return () => clearInterval(interval); 
    }
  }, [testimonials]); 

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  // if (isLoading) return null;

  return (
    <section className="testimonial-section">
      <div className="tst-title">
        <h4>// CLIENT_FEEDBACK</h4>
        <h2>Reviews</h2>
      </div>

      <div className="tst-main-content-area">
        
        {/* Left Panel: Client List */}
        <div className="tst-names-list-panel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial._id || testimonial.id || index}
              className={`tst-name-card ${selectedTestimonial && (selectedTestimonial._id || selectedTestimonial.id) === (testimonial._id || testimonial.id) ? 'selected' : ''}`}
              onClick={() => handleSelectTestimonial(testimonial, index)}
            >
              <img
                src={
                  testimonial.image 
                    ? (testimonial.image.asset ? urlFor(testimonial.image).url() : testimonial.image) 
                    : (testimonial.pictureUrl || 'https://placehold.co/48x48')
                }
                alt={testimonial.name}
                className="tst-name-card-img"
              />
              <div className="tst-name-card-info">
                <span className="tst-name-card-name">{testimonial.name}</span>
                <span className="tst-name-card-job">
                  {testimonial.company ? `AT ${testimonial.company.toUpperCase()}` : 'CLIENT'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel: Display */}
        <div className="tst-full-display-panel">
           {selectedTestimonial && (
             <AnimatePresence mode="wait">
               <motion.div
                 key={selectedTestimonial._id || selectedTestimonial.id}
                 className="tst-full-testimonial-content"
                 variants={contentVariants}
                 initial="hidden"
                 animate="visible"
                 exit="exit"
                 style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
               >
                 <div>
                    <p className="tst-full-message">
                      {selectedTestimonial.message}
                    </p>
                 </div>

                    <div className="tst-full-meta">
                       <div className="tst-full-info">
                          <span className="tst-full-name">{selectedTestimonial.name}</span>
                          <span className="tst-full-job">
                             ROLE :: {selectedTestimonial.role ? selectedTestimonial.role.toUpperCase() : ''}
                          </span>
                          {/* Render link if it exists */}
                          {selectedTestimonial.link && (
                              <a 
                                href={selectedTestimonial.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: 'block', marginTop: '0.5rem', color: 'var(--accent-primary)', fontSize: '0.8rem', textDecoration: 'none' }}
                              >
                                [ VIEW VERIFIED REVIEW ↗ ]
                              </a>
                          )}
                       </div>
                       <div style={{ fontFamily: 'monospace', opacity: 0.5 }}>
                          ID: {(selectedTestimonial._id || selectedTestimonial.id || '000').slice(-3)}
                       </div>
                    </div>
               </motion.div>
             </AnimatePresence>
           )}
        </div>

      </div>
    </section>
  );
}

export default Testimonial;
