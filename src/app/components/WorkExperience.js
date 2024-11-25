'use client';

import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experienceData = [
    {
      year: 'Jul 2024 - Present',
      duration: 'Present (6 months)',
      title: 'Lecturer',
      company: 'University of Massachusetts Boston',
      location: 'Boston, MA',
      responsibilities: [
        'Delivered engaging lectures on core Java programming and advanced data structures.',
        'Supervised and mentored 10+ student-driven software development projects.',
      ],
    },
    {
      year: 'Dec 2023 - Jul 2024',
      duration: '7 months',
      title: 'Software Engineer Intern',
      company: 'WhoozCooking Inc.',
      location: 'Boston, MA',
      responsibilities: [
        'Developed RESTful APIs for admin functionalities, reducing onboarding time by 50%.',
        'Integrated third-party APIs, improving backend efficiency by 30%.',
        'Architected a microservices-based solution using AWS DynamoDB and Kafka.',
      ],
    },
    {
      year: 'Sep 2020 - Jul 2022',
      duration: '1 year 10 months',
      title: 'Associate Software Engineer',
      company: 'TIBCO Software',
      location: 'Pune, India',
      responsibilities: [
        'Engineered REST APIs for an analytical web application, decreasing latency by 20%.',
        'Designed and optimized 100+ database objects across MySQL, MongoDB, and SAP BW/4HANA.',
        'Collaborated within cross-functional teams through all phases of the SDLC.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="workexperience-section">
      <h2 className="workexperience-title">Work Experience</h2>
      <motion.div
        className="workexperience-timeline"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="workexperience-item"
            variants={itemVariants}
          >
            <div className="workexperience-year">
              <h3>{exp.year}</h3>
              <p>{exp.duration}</p>
            </div>
            <div className="workexperience-content">
              <h3 className="workexperience-job-title">{exp.title}</h3>
              <p className="workexperience-company">
                {exp.company} - {exp.location}
              </p>
              <ul className="workexperience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
