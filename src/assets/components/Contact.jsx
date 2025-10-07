import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const Contact = ({darkMode}) => {
  const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      setAnimate(true);
    }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for messaging! I’ll get back to you soon 😊", {
      style: {
        background: "var(--color-main)",
        color: "var(--color-text)",
        fontFamily: "var(--font-sans)",
        borderRadius: "12px",
        padding: "16px 24px",
      },
      iconTheme: {
        primary: "var(--color-text)",
        secondary: "var(--color-main)",
      },
    });
    setTimeout(() => {
      e.target.submit();
    }, 1200); // 1.2 seconds delay for user to see the toast
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-20 py-20 overflow-hidden transition-colors duration-500" style={{
        backgroundColor: darkMode ? "var(--color-bg-secondary)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-main opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-main opacity-15 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-main opacity-10 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-main opacity-10 rounded-full animate-spin-slow"></div>

      {/* Section Title */}
      <div className={`text-center mb-12 opacity-0 transform translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-200 animate-fade-up"
            : ""
        }`}>
        <h2 className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "var(--font-serif)" , marginBottom: "1rem" }}>
          Contact <span className="text-main">Me</span>
        </h2>
        <p className="text-lg font-sans opacity-80">
          Let’s connect! Feel free to reach out for collaborations or inquiries.
        </p>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/fardinhasan.mayen@gmail.com"
        method="POST"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-center p-8 rounded-2xl bg-[var(--color-bg-secondary)] shadow-lg animate-fade-up backdrop-blur-md"
      >
        <input
          type="hidden"
          name="_next"
          value="https://fardinhasanmayen.netlify.app/thanks.html"
        />
        <input type="hidden" name="_captcha" value="false" />

        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            aria-label="Full Name"
            required
            className="w-full sm:w-[49%] p-4 text-[var(--color-text)] bg-[var(--color-bg)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            aria-label="Email Address"
            required
            className="w-full sm:w-[49%] p-4 text-[var(--color-text)] bg-[var(--color-bg)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
          />
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-4">
          <input
            type="tel"
            name="Mobile Number"
            placeholder="Mobile Number"
            aria-label="Mobile Number"
            className="w-full sm:w-[49%] p-4 text-[var(--color-text)] bg-[var(--color-bg)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            aria-label="Subject"
            className="w-full sm:w-[49%] p-4 text-[var(--color-text)] bg-[var(--color-bg)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
          />
        </div>

        <textarea
          name="Message"
          placeholder="Your Message"
          aria-label="Your Message"
          required
          className="w-full mt-4 p-4 text-[var(--color-text)] bg-[var(--color-bg)] rounded-lg resize-none h-40 outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
        ></textarea>

        <motion.input
          type="submit"
          value="Send Message"
          className="mt-6 px-8 py-3 bg-[var(--color-main)] text-[var(--color-text)] font-semibold rounded-full cursor-pointer border-2 border-[var(--color-main)] transition-all duration-300 hover:bg-[var(--color-text)] hover:text-[var(--color-main)] animate-glow-hover"
          whileHover={{ scale: 1.05 }}
        />
      </motion.form>

      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
};

export default Contact;
