import React, { useEffect, useState } from 'react'
import "./styles.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CHARS = 500;
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm(parsed);
      setCharCount(parsed.message?.length || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message" && value.length > MAX_CHARS) return;

    setForm({ ...form, [name]: value });

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!EMAIL_REGEX.test(form.email)) newErrors.email = "Invalid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate send (replace with actual email logic or API)
    alert("Message sent successfully!");
    localStorage.removeItem("contactForm");
    setForm({ name: "", email: "", message: "" });
    setCharCount(0);
  };
  return <section className="section contact-section" id="contact">
    <h2 className="section-title">Contact Us</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className='mt-8'
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Email:
        <input
          className='mt-8'
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Message:
        <textarea
          className='mt-8'
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
        />
        <div className="char-count">{charCount}/{MAX_CHARS}</div>
        {errors.message && <span className="error">{errors.message}</span>}
      </label>

      <button type="submit">Send</button>
    </form>
  </section>
}

export default ContactForm