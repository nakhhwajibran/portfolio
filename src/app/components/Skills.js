'use client';

import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJenkins, FaChartBar, FaLinux, FaWindows, FaTerminal,
} from 'react-icons/fa';
import { 
  SiTypescript, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiNextdotjs, SiKubernetes, SiRedis, 
  SiAmazonrds, SiMicrosoftsqlserver, SiTailwindcss, SiMaterialdesign, SiFigma, SiJira, SiThunderbird, SiCypress,SiNginx, SiPrometheus, SiWebpack, SiVercel, SiApachemaven, SiGrafana, SiAzuredevops, SiGooglecloud, SiDocker, SiHelm, SiTerraform, SiAnsible, SiDatadog, SiSplunk, SiBitbucket
} from 'react-icons/si';
import { DiScrum, DiNpm } from 'react-icons/di';
import { TbBrandFirebase } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, color: 'text-yellow-500' },
        { name: 'Java', icon: <FaJava />, color: 'text-red-600' },
        { name: 'JavaScript', icon: <FaNodeJs />, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
        { name: 'Bash/Shell', icon: <FaTerminal />, color: 'text-gray-600' },
        { name: 'Linux', icon: <FaLinux />, color: 'text-black-600' },
      ],
    },
    {
      title: 'Cloud & Containerization',
      skills: [
        { name: 'AWS', icon: <FaAws />, color: 'text-yellow-400' },
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-400' },
        { name: 'Azure', icon: <SiAzuredevops />, color: 'text-red-600' },
        { name: 'GCP', icon: <SiGooglecloud />, color: 'text-orange-500' },
      ],
    },
    {
      title: 'CI/CD & Automation',
      skills: [
        { name: 'Jenkins', icon: <FaJenkins />, color: 'text-red-600' },
        { name: 'AWS DevOps', icon: <FaAws />, color: 'text-yellow-600' },
        { name: 'Maven', icon: <SiApachemaven />, color: 'text-red-500' },
        { name: 'Terraform', icon: <SiTerraform />, color: 'text-black-600' },
        { name: 'Ansible', icon: <SiAnsible />, color: 'text-gray-600' },
      ],
    },
    {
      title: 'Observability & Monitoring',
      skills: [
        { name: 'Grafana', icon: <SiGrafana />, color: 'text-orange-500' },
        { name: 'Prometheus', icon: <SiPrometheus />, color: 'text-orange-500' },
        { name: 'Datadog', icon: <SiDatadog />, color: 'text-red-500' },
        { name: 'Splunk', icon: <SiSplunk />, color: 'text-black-600' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-800 dark:text-white' },
        { name: 'Django', icon: <SiDjango />, color: 'text-green-700' },
        { name: 'Material-UI', icon: <SiMaterialdesign />, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500' },
        { name: 'Webpack', icon: <SiWebpack />, color: 'text-blue-600' },
        { name: 'NPM', icon: <DiNpm />, color: 'text-red-500' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'Redis', icon: <SiRedis />, color: 'text-red-600' },
        { name: 'Amazon RDS', icon: <SiAmazonrds />, color: 'text-yellow-400' },
        { name: 'Firebase', icon: <TbBrandFirebase />, color: 'text-yellow-500' },
        { name: 'Microsoft SQL Server', icon: <SiMicrosoftsqlserver />, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Tools & Miscellaneous',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-red-600' },
        { name: 'Jira', icon: <SiJira />, color: 'text-blue-600' },
        { name: 'Linux', icon: <FaLinux />, color: 'text-gray-700' },
        { name: 'Windows', icon: <FaWindows />, color: 'text-blue-600' },
        { name: 'Vercel', icon: <SiVercel />, color: 'text-gray-800' },
        { name: 'Agile Scrum', icon: <DiScrum />, color: 'text-yellow-600' },
        { name: 'Bit Bucket', icon: <SiBitbucket />, color: 'text-yellow-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title text-2xl font-bold text-center mb-8">SKILLS</h2>
      <div className="skills-categories grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title text-xl font-semibold mb-4">{category.title}</h3>
            <div className="skills-list flex flex-wrap gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`skills-item flex items-center gap-2 p-2 rounded-md border shadow-sm ${skill.color}`}
                  title={skill.name}
                >
                  {skill.icon}
                  <span className="skills-name text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
