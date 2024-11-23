// components/Project.js
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const response = await axios.get(
                'https://api.github.com/users/adi-tsvet/repos'
            );
            setProjects(response.data);
        }
        fetchProjects();
    }, []);

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="project-section"
        >
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="project-title">{project.name}</h3>
                        <p className="project-description">
                            {project.description || 'No description available'}
                        </p>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View on GitHub →
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};


export default Project;
