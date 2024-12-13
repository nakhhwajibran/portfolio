'use client';

import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experienceData = [
    {
      year: 'Jul 2024 - Present',
      duration: '6 months',
      title: 'Lecturer',
      company: 'University of Massachusetts Boston',
      location: 'Boston, MA',
      responsibilities: [
        'Delivered comprehensive lectures on core Java programming and advanced data structures, fostering practical problem-solving skills.',
        'Supervised and guided 10+ student-led software development projects, collaborating with clients from the UMass Venture Development Center.',
        'Incorporated real-world case studies to illustrate the software development lifecycle, enhancing student engagement and industry readiness.',
      ],
    },
    {
      year: 'Dec 2023 - Jul 2024',
      duration: '7 months',
      title: 'Software Engineer Intern',
      company: 'WhoozCooking Inc.',
      location: 'Boston, MA',
      responsibilities: [
        'Developed RESTful APIs to automate JSON parsing from Excel files, reducing onboarding processes by 50%.',
        'Integrated Stripe and DoorDash APIs for secure payment processing and dynamic delivery fee calculation, increasing backend efficiency by 30%.',
        'Architected microservices using AWS DynamoDB for real-time triggers and Kafka for seamless inter-service communication.',
        'Deployed services on Kubernetes with Amazon EKS, ensuring consistent runtime environments across pipelines.',
        'Enhanced development workflows by contributing to a CI/CD pipeline setup using Git and Jenkins.',
      ],
    },
    {
      year: 'Sep 2020 - Jul 2022',
      duration: '1 year 10 months',
      title: 'Associate Software Engineer',
      company: 'TIBCO Software',
      location: 'Pune, India',
      responsibilities: [
        'Engineered REST APIs for analytical web applications, reducing data transfer latency by 20%.',
        'Optimized 100+ database objects across NoSQL, MongoDB, and SAP BW/4HANA for faster data retrieval.',
        'Improved web page load speed by 15% through advanced caching strategies and efficient DOM manipulation.',
        'Documented and validated RESTful APIs using tools like Postman to ensure consistent functionality.',
        'Collaborated in cross-functional teams using Agile Scrum methodologies to deliver high-quality software products.',
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
