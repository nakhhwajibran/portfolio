// components/Summary.js
'use client';
import { motion } from 'framer-motion';

const Summary = () => (
    <motion.section
        id="summary"
        className="summary-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <h1 className="summary-title">Adnan Mohsin Ali</h1>
        <p className="summary-text">
            Innovative Software Engineer with 2.5+ years of experience in developing scalable backend solutions...
        </p>
    </motion.section>
);

export default Summary;
