'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      year: '2024',
      title: 'Master of Science in Information Technology & Analytics',
      institution: 'Rutgers University, Newark',
      description: 'GPA: 3.78/4.0.',
    },
    {
      year: '2018',
      title: 'Bachelor of Engineering in Electronics Engineering',
      institution: 'Mumbai University',
      description: 'GPA: 7.56/10.',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <motion.div
        className="timeline"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.5 }}
          >
            <div className="year">{edu.year}</div>
            <h3>{edu.title}</h3>
            <p>{edu.institution}</p>
            <p className="description">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
