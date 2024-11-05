// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote: "A fantastic developer who brings energy and insight to any team.",
      name: "Taiwo Hassan",
      position: "Project Manager",
    },
    {
      quote: "Exceptionally skilled and a pleasure to work with!",
      name: "Daniju",
      position: "Lead Designer",
    },
    {
      quote: "Delivered above and beyond on every project. Highly recommend!",
      name: "Saheed Oladele",
      position: "CTO",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.name}</h4>
            <span>{testimonial.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
