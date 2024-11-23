// components/ContactForm.js
'use client';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                e.target,
                'YOUR_USER_ID'
            )
            .then((result) => console.log(result.text))
            .catch((error) => console.error(error.text));
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
                <input type="email" name="email" placeholder="Your Email" required className="form-input" />
                <textarea name="message" placeholder="Your Message" required className="form-textarea"></textarea>
                <button type="submit" className="form-button">Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
