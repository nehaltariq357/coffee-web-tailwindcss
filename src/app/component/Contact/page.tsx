import React from 'react';

const Contact = () => {
  return (
    <section className="contact-us">
      <h1>Contact Us</h1>
      <p>We love to hear from you! Please reach out with any questions or feedback.</p>
      
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact
