'use client';

import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experienceData = [
    {
      year: 'Aug 2021 - July 2023',
      duration: '1 year 10 months',
      title: 'DevOps Engineer',
      company: 'Impact Guru Technology Ventures Private Ltd.',
      location: 'Mumbai, India',
      responsibilities: [
        
        "AWS deployments by designing Terraform's modular templates that cut configuration eﬀorts by 30%.",
        "Multi-environment setup time by 40% by developing Terraform modules and orchestrating containerized apps on Amazon EKS, enabling faster scaling.",
        "Optimal resource distribution by deploying multi-cluster Kubernetes on AKS and OpenShift with Helm, reducing overhead by 30%.",
        "Release time was reduced by 35% by building CI/CD pipelines with AWS DevOps and Jenkins, incorporating automated testing and rollback.",
        "Collaborating in the automation of AWS infrastructure via Terraform and Jenkins software and services configuration via chef cookbooks.",
      ],
    },
    {
      year: 'Jan 2020 - July 2021',
      duration: '1 year 7 months',
      title: 'Senior Software Engineer',
      company: 'Impact Guru Technology Ventures Private Ltd.',
      location: 'Mumbai, India',
      responsibilities: [
        "Downtime was reduced by 13% by revamping and optimizing cleanup processes, leading to more stable and efficient operations.",
        "Code management was streamlined by orchestrating development on AWS with GitHub and S3 integration, resulting in faster and more reliable deployments.",
        "Feature delivery was accelerated through cross-team collaboration on microservice middleware, enabling timely AWS S3 deployments.",
        "Team productivity increased by 50% through the mentorship of five junior backend developers, resulting in streamlined processes and faster releases."
      ],
    },
    {
      year: 'Oct 2018 - Dec 2019',
      duration: '1 year 2 months',
      title: 'Software Engineer',
      company: 'Impact Guru Technology Ventures Private Ltd.',
      location: 'Mumbai, India',
      responsibilities: [
        "A 98% client satisfaction rate was achieved through prompt collaboration with managers to resolve inquiries, enhancing client relationships and minimizing escalations.",
        "Outreach to thousands of clients was streamlined by using Python scripts to retrieve data from APIs, apply ranking algorithms, and generate Jinja templates, resulting in automated, targeted email campaigns.",
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
