'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from adding query parameters to the URL
    const form = e.target;

    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    //console.log({ name, email, message }); // Simulate sending form data

    setIsSubmitted(true);

    // Display success message for 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset(); // Reset the form fields

      // Scroll back to the contact section
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

      // Update the URL without query parameters
      const url = new URL(window.location.href);
      url.search = ''; // Remove query parameters
      window.history.replaceState({}, document.title, url);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      {isSubmitted ? (
        <motion.div
          className="success-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3>Thank you for reaching out!</h3>
          <p>I’ll get back to you shortly.</p>
        </motion.div>
      ) : (
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            className="form-textarea"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="form-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default ContactForm;
