'use client';

import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiNextdotjs, SiKubernetes } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-500' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-600' },
    { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-800 dark:text-white' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-700' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'Kafka', icon: <SiKubernetes />, color: 'text-orange-500' }, // Placeholder icon for Kafka
    { name: 'AWS', icon: <FaAws />, color: 'text-yellow-400' },
    { name: 'Database Design', icon: <FaDatabase />, color: 'text-purple-500' },
    { name: 'Figma', icon: <FiFigma />, color: 'text-pink-500' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skills-item ${skill.color}`}
            title={skill.name}
          >
            {skill.icon}
            <span className="skills-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
