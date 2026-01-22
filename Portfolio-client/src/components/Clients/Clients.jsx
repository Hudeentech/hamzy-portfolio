import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import './Clients.css';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const query = '*[_type == "clients"]';
    
    client.fetch(query)
      .then((data) => {
        setClients(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="clients-section">
      <div className="clients-container">
        
        {/* Title Section */}
        <div className="clients-header">
           <h4 className="clients-subtitle">// NETWORK</h4>
           <h2 className="clients-title">Trusted By</h2>
        </div>

        {/* Logos Grid */}
        <motion.div 
          className="clients-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((clientItem, index) => (
            <motion.div 
              key={clientItem._id || index} 
              className="client-logo-card"
              variants={itemVariants}
            >
               {clientItem.logo && (
                 <img 
                   src={urlFor(clientItem.logo).url()} 
                   alt={clientItem.name || `Client ${index + 1}`} 
                   className="client-logo-img" 
                 />
               )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Clients;
