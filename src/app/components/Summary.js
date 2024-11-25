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
  A <span className="highlight">versatile Software Engineer</span> dedicated to building 
  <span className="highlight">scalable backend systems</span>, designing <span className="highlight">intuitive user interfaces</span>, 
  and delivering solutions that drive real-world impact. With strong expertise in 
  <span className="highlight">NoSQL databases</span> such as DynamoDB and MongoDB, alongside traditional relational databases, 
  I excel at architecting efficient, high-performance data systems. Combining a passion for 
  <span className="highlight"> technology and creativity</span>, I specialize in simplifying complex workflows and making systems accessible, 
  empowering businesses to achieve their goals in fast-paced, competitive environments.
</p>

  </motion.section>
);

export default Summary;
