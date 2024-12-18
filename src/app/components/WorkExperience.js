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
        'Delivered courses on Java programming, data structures, and algorithms.',
        'Introduced students to serverless architectures using AWS Lambda and Azure Functions.',
        'Taught modern DevOps practices including Docker, Kubernetes, and Jenkins pipelines.',
        'Mentored 10+ student projects collaborating with UMass Venture Development clients to deliver scalable solutions using Agile practices.',
      ],
    },
    {
      year: 'Dec 2023 - Jul 2024',
      duration: '7 months',
      title: 'Software Engineer Intern',
      company: 'WhoozCooking Inc.',
      location: 'Boston, MA',
      responsibilities: [
        'Developed a food delivery platform integrating real-time tracking, chef profiles, and meal customization using Node.js, React.js, and MongoDB.',
        'Built reusable React components with Redux, improving performance and reducing load time by 30%.',
        'Automated DoorDash API integrations via webhooks for real-time delivery updates and dynamic fee calculations.',
        'Integrated secure authentication using JWT, OAuth 2.0, and Passport.js for API endpoint security.',
        'Architected microservices using AWS DynamoDB for real-time data triggers and Kafka for seamless communication.',
        'Deployed microservices on Amazon EKS with Kubernetes, ensuring consistent environments across pipelines.',
        'Streamlined workflows by setting up a CI/CD pipeline using GitHub Actions and Jenkins.',
      ],
    },
    {
      year: 'Sep 2020 - Jul 2022',
      duration: '1 year 10 months',
      title: 'Associate Software Engineer',
      company: 'TIBCO Software',
      location: 'Pune, India',
      responsibilities: [
        'Engineered RESTful APIs within a microservices architecture, reducing data latency by 20% and improving system uptime.',
        'Improved web page load speeds by 15% through efficient DOM manipulation, caching strategies, and cookies optimization.',
        'Developed responsive UIs with Material-UI and Tailwind CSS for interactive dashboards using D3.js and Chart.js.',
        'Optimized over 100 database objects across NoSQL, MongoDB, and SAP BW/4HANA for faster data retrieval.',
        'Validated and documented REST APIs using Postman and Thunder Client for consistent functionality.',
        'Configured AWS CloudWatch for real-time monitoring, logging, and issue resolution in microservices.',
        'Collaborated with cross-functional teams using Agile Scrum to deliver high-quality software solutions.',
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
