import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Lock scrolling when the popup is open
  if (typeof window !== 'undefined') {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
  }


  return (
    <section className="hero-section">
      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/pp-photo/img2.jpeg" // Replace with your image path
          alt="Adnan Ali"
          layout="fill"
          objectFit="cover"
          className="hero-image"
        />
      </motion.div>

      <motion.div
        className="hero-text-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">Hi, I am Adnan Ali</h1>
        <p className="mt-4 text-lg md:text-xl">Software Engineer</p>

        <motion.div
          className="mt-4 text-2xl md:text-3xl typewriter-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Typewriter
            options={{
              strings: [
                'Developer',
                'Problem Solver',
                'Crafting Code, Building Solutions',
                'Coding with Precision',
                'Digital Architect',
                'Turning Ideas into Reality',
                'Building the Next Generation',
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typewriter-text',
            }}
          />
        </motion.div>

        {/* View Resume Button */}
        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <button
            className="view-resume-btn"
            onClick={() => setIsPopupOpen(true)}
          >
            {/* <FaEye className="icon" /> */}
            View Resume
          </button>
        </motion.div>

        {/* Animated Scroll Prompt */}
        <motion.div
          className="mt-8 text-base md:text-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to Explore ↓
        </motion.div>
      </motion.div>

      {/* Resume Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="resume-popup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5 }}
            onMouseLeave={() => setIsPopupOpen(false)} // Close on mouse leave
          >
            <motion.div
              className="popup-overlay"
              onClick={() => setIsPopupOpen(false)}
            />
            <motion.div
              className="popup-content"
              onMouseLeave={() => setIsPopupOpen(false)} // Close on mouse leave
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                src="/resume.pdf"
                className="resume-frame"
                title="Resume"
              />
              <button
                className="download-resume-icon"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaDownload />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
