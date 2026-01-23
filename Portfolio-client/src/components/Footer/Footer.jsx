import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from '../../client';
import "./Footer.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const query = '*[_type == "footer"][0]';
    client.fetch(query)
      .then((data) => setFooterData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!footerData) {
    return null; // Silent load
  }

  return (
    <motion.footer
      className="footer"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="contact-headlines">
         <motion.span className="contact-caption" variants={itemVariants}>
            {footerData.caption || "// INITIATE_CONTACT"}
         </motion.span>
         <motion.h1 className="contact-heading" variants={itemVariants}>
            {footerData.headline || "Let's Build Something NOVEL Together."}
         </motion.h1>
      </div>

      <div className="contact-links">
        <motion.div variants={itemVariants} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <div style={{fontFamily: 'Space Grotesk', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
             SOCIAL_LINKS_directory:
          </div>
          <ul>
            {footerData.links && footerData.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.button
          className="buzz"
          onClick={() => window.location = `mailto:${footerData.email || 'Duhamzy@gmail.com'}`}
          variants={itemVariants}
        >
          {footerData.buttonText || "Start A Project"}
        </motion.button>
      </div>

      <div className="footer-meta">
         <span>{footerData.copyright || "© 2026 DANESI HAMZAH."}</span>
         <span>ALL SYSTEMS NORMINAL.</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
