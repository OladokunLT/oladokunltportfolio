import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message}></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
