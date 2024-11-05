import React from 'react';

const Contact = () => (
  <div className="bg-offwhite min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-5 h-[70vh] space-y-16 w-full bg-lightBrown p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-offwhite mb-4">Contact Us</h1>
      <p className="text-center text-white mb-6">
        We love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <textarea
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-Brown h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-Brown text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition duration-150"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
