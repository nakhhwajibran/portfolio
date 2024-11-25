import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center">
    <motion.h1
      className="text-5xl font-extrabold"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hi, I'm Adnan Ali
    </motion.h1>
    <motion.p
      className="mt-4 text-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      Software Engineer
    </motion.p>

    <motion.div
      className="mt-4 text-3xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Typewriter
        options={{
          strings: ['Developer', 'Engineer', 'Problem Solver', 'NextJs'],
          autoStart: true,
          loop: true,
        }}
      />
    </motion.div>

    <motion.div
      className="mt-8 text-lg"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      Scroll to Explore ↓
    </motion.div>
  </section>
);

export default HeroSection;
