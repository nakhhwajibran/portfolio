'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const [projects, setProjects] = useState({ software: [], data: [] });
  const [activeTab, setActiveTab] = useState('software');

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get('https://api.github.com/users/adi-tsvet/repos');
        const allProjects = response.data;

        const categorizedProjects = {
          software: allProjects.filter((project) =>
            ['flush-email', 'boostlet', 'PowerBoostlet', 'qr-image-drop', 'wash-boom'].includes(project.name)
          ),
          data: allProjects.filter((project) =>
            ['smart-city-realtime-data-Engineering', 'Twitter-Analysis-Airflow-ETL', 'Stock-Market-Kafka-Real-Time'].includes(project.name)
          ),
        };

        setProjects(categorizedProjects);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    }

    fetchProjects();
  }, []);

  const backgroundImages = {
    'flush-email': '/project-image/flush-email.jpeg',
    'boostlet': '/project-image/boostlet.jpeg',
    'PowerBoostlet': '',
    'wash-boom': '/project-image/wash-boom.jpeg',
    'qr-image-drop': '/project-image/qr-image-drop.jpeg',
    'smart-city-realtime-data-Engineering': '/project-image/smartstreet.jpeg',
    'Twitter-Analysis-Airflow-ETL': '/project-image/twitter.jpeg',
    'Stock-Market-Kafka-Real-Time': '/project-image/stockmarket.jpeg',
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Projects</h2>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          Software Engineering
        </button>
        <button
          className={`tab-button ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
        >
          Data Engineering
        </button>
      </div>
      <div className="project-grid">
        <AnimatePresence mode="wait">
          {projects[activeTab]?.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="card-inner">
                {/* Card Front */}
                <div
                  className="card-front"
                  style={{
                    backgroundImage: `url(${backgroundImages[project.name] || '/logo.png'})`,
                  }}
                >
                  <h3 className="project-title">{project.name}</h3>
                </div>

                {/* Card Back */}
                <div
                  className="card-back"
                  style={{
                    backgroundImage: `url(${backgroundImages[project.name] || '/next.svg'})`,
                  }}
                >
                  <div className="project-links">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-icon"
                    >
                      <FaGithub />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <p className="project-description">
                    {project.description || 'No description available'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Project;
