import { motion } from 'framer-motion';

const Summary = () => (
  <motion.section
    id="summary"
    className="summary-section"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <p className="summary-text">
  A <span className="highlight">versatile DevOps/SRE Engineer</span> with a proven track record of building 
  <span className="highlight"> Kubernetes</span>, environments in <span className="highlight"> AWS</span>, 
  streamlining <span className="highlight"> CI/CD pipelines </span>, and ensuring eﬃcient, secure deployments. Skilled in
  <span className="highlight"> Terraform-based infrastructure automation </span> containerization with <span className="highlight"> Docker </span> and 
  <span className="highlight"> Helm </span>, and  proficient in observability tools such as <span className="highlight"> Prometheus </span> and 
  <span className="highlight"> Datadog </span>. <span className="highlight"> AWS Solutions Architect - Associate Certified</span>
  , driven by continuous improvement and collaboration across teams.
</p>


  </motion.section>
);

export default Summary;
