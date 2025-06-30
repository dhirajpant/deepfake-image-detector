import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/dhiraj",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/dhiraj",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:dhiraj@example.com",
      label: "Email",
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/dhiraj",
      label: "Instagram",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: send data to backend
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* About Me */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Hi, I’m <strong>Dhiraj</strong>, a passionate Computer Engineer and the sole developer behind this Deepfake Detector project.
          Sab kuch khud se banaya hai — from the CNN model training to frontend and backend development.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
          Mera mission hai aise powerful tools banane ka jo sachchai ko samajhne mein madad kare. 
          Niche diye gaye social links se mujhe follow karo ya contact karo.
        </p>

        <div className="flex justify-center space-x-10 mt-8">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Me */}
      <div id="contact">
        <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
          Contact Me
        </h2>

        {submitted ? (
          <p className="text-green-600 dark:text-green-400 text-center font-semibold text-lg">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
