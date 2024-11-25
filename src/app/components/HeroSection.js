import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroSection = () => (
  <section className="hero-section">
    <motion.div
      className="hero-image-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/pp-photo/img2.jpeg" /* Replace with your image path */
        alt="Adnan Ali"
        className="hero-image"
      />
    </motion.div>

    <motion.div
      className="hero-text-container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hi, I'm Adnan Ali
      </h1>
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

      <motion.div
        className="mt-8 text-base md:text-lg"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Scroll to Explore ↓
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
