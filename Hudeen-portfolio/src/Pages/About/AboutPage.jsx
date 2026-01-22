import React, { useEffect, useState } from 'react';
import "./about-page.css"; // Import the CSS file for styling
import Nav from "../../components/Nav/Nav";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { aboutPageData } from "../../data/mockData"; // Mock data no longer needed
import { client, urlFor } from '../../client';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const query = '*[_type == "about"][0]';
    
    client.fetch(query)
      .then((data) => {
        setAboutData(data);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error);
      });

    // Slideshow timer
    const timer = setInterval(() => {
     if(aboutData?.images) { // Changed schema expectation to 'images' array
        setCurrentIndex((prevIndex) => 
            prevIndex === aboutData.images.length - 1 ? 0 : prevIndex + 1
        );
     }
    }, 5000);
  
    return () => clearInterval(timer);
  }, [aboutData?.images?.length]); // Re-run if image count changes

  if (!aboutData) return (
    <div className="loading">
      <Nav />
      <div className="loading-content">
        <h1 className="loading-title">LOADING</h1>
        <div className="loading-bar-track">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );

  return (
  
    <>
    <Nav />

    <motion.article
      className="about-container"
      variants={containerVariants}
      initial="visible" // Start animation on load
      animate="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of container is visible
    >
     <motion.div className="profile-c">
        <motion.div
          className="profile-c"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="slideshow-container">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={aboutData?.images && aboutData.images[currentIndex] ? urlFor(aboutData.images[currentIndex]).url() : ''}
                alt={`Profile ${currentIndex + 1}`}
                className="profile-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .5 }}
              />
            </AnimatePresence>

              <button
              className='left'
                onClick={() => setCurrentIndex(prev => prev === 0 ? (aboutData?.images?.length || 1) - 1 : prev - 1)}
              >
                <i className='fas fa-chevron-left'></i>
              </button>
              <button
              className='right'
                onClick={() => setCurrentIndex(prev => prev === (aboutData?.images?.length || 1) - 1 ? 0 : prev + 1)}
              >
                <i className='fas fa-chevron-right'></i>
              </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="detail-card-BIO"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>{aboutData.name}</h2>
        {/* Simple paragraph instead of PortableText */}
        <p>{aboutData.bio}</p>
      </motion.div>

      <motion.article
        className="detail-card1"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Personal Information</h2>
        <p>
          <b>Age:  </b> {aboutData.age}
        </p>
        <p>
          <b>Location:  </b> {aboutData.location}
        </p>
        <p>
          <b>Occupation:  </b> {aboutData.occupation}
        </p>
        <p>
          <b>Native Language:  </b> {aboutData.language}
        </p>
      </motion.article>

      <motion.article
        className="detail-card2"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Hobbies</h2>
        <ul>
          {aboutData.hobbies?.map((hobby) => (
            <motion.li
              key={hobby}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              {hobby}
            </motion.li>
          ))}
        </ul>
      </motion.article>

      <motion.article
        className="detail-card3"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Skills</h2>
        <div>
          {aboutData.skills?.map((skill) => (
            <motion.p
              className="skills"
              key={skill}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              {skill}
            </motion.p>
          ))}
        </div>
      </motion.article>

      <motion.article
        className="detail-card4"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1>Experience</h1>
        <div>
        <p>{aboutData.experience}</p>
        </div>
      </motion.article>
    </motion.article>
    <Footer />
  </>
  );
};

export default AboutPage;