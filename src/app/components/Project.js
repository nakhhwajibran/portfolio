'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const [projects, setProjects] = useState({ software: [], devops: [] });
  const [activeTab, setActiveTab] = useState('software');

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get('https://api.github.com/users/nakhhwajibran/repos');
        const allProjects = response.data;
        // console.log(response.data)

        const categorizedProjects = {
          software: allProjects.filter((project) =>
            ['docker-django-nginx-mysql', 'covid19india', 'docker-MERN-App', 'docker-flask-app'].includes(project.name)
          ),
          devops: allProjects.filter((project) =>
            ['docker-django-nginx-mysql', 'terraform-aws-3tier-app', 'docker-MERN-App', 'docker-flask-app', 'kubernetes','Jenkins'].includes(project.name)
          ),
        };

        setProjects(categorizedProjects);
      } catch (error) {
        // console.error('Error fetching GitHub projects:', error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Projects</h2>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'devops' ? 'active' : ''}`}
          onClick={() => setActiveTab('devops')}
        >
         Devops
        </button>
        <button
          className={`tab-button ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          Software Engineering
        </button>
      </div>
      <div className="project-grid">
        <AnimatePresence mode="wait">
          {projects[activeTab]?.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-inner">
                {/* Card Front */}
                <div className="card-front">
                  <img
                    src={`https://opengraph.githubassets.com/1/${project.owner.login}/${project.name}`}
                    alt={`${project.name} preview`}
                    className="project-image"
                  />
                  <h3 className="project-title">{project.name}</h3>
                  
                </div>

                {/* Card Back */}
                <div className="card-back">
                  <div className="project-description-wrapper">
                    <p className="project-description">
                      {project.description || 'No description available'}
                    </p>
                  </div>
                  <div className="project-links">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    {project.homepage && (
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
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
