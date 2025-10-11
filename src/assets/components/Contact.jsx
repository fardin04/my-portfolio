import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ darkMode }) => {
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
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-20 py-20 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg-secondary)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-main opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-main opacity-15 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-main opacity-10 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-main opacity-10 rounded-full animate-spin-slow"></div>

      {/* Section Title */}
      <div
        className={`text-center mb-12 opacity-0 transform translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-200 animate-fade-up"
            : ""
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-serif mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Contact <span className="text-main">Me</span>
        </h2>
        <p className="text-lg font-sans opacity-80">
          Let’s connect! Feel free to reach out for collaborations or inquiries.
        </p>
      </div>

      {/* Contact Form */}
      <div
        className={`z-10 w-full max-w-3xl p-8 rounded-2xl shadow-lg backdrop-blur-md bg-opacity-10 transition-all duration-500 transform opacity-0 translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-300 animate-fade-up"
            : ""
        } ${
          darkMode
            ? "bg-[rgba(255,255,255,0.05)]"
            : "bg-[rgba(178,34,52,0.1)]"
        } `}
        style={{ transition: "all 0.6s ease" }}
        // onMouseEnter={(e) => {
        //   e.currentTarget.style.boxShadow =
        //     "0 0 12px 6px var(--color-main), 0 0 20px 8px var(--color-main)";
        // }}
        // onMouseLeave={(e) => {
        //   e.currentTarget.style.boxShadow = "";
        // }}
      >
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/fardinhasan.mayen@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >
          {/* Hidden Form Fields */}
          <input
            type="hidden"
            name="_next"
            value="https://fardinhasanmayen.netlify.app/thanks.html"
          />
          <input type="hidden" name="_captcha" value="false" />

          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              required
              className="p-4 w-full rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
              className="p-4 w-full rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
            />
          </div>

          {/* Row 2: Number + Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="Mobile Number"
              placeholder="Mobile Number"
              className="p-4 w-full rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
            />
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="p-4 w-full rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
            />
          </div>

          {/* Row 3: Message */}
          <textarea
            name="Message"
            placeholder="Your Message"
            required
            className="p-4 w-full rounded-lg h-40 resize-none text-[var(--color-text)] bg-[var(--color-bg)] outline-none focus:ring-2 focus:ring-[var(--color-main)] transition-all duration-300"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-full font-semibold bg-[var(--color-main)] text-[var(--color-text)] border-2 border-[var(--color-main)] transition-all duration-300 hover:bg-[var(--color-text)] hover:text-[var(--color-main)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
};

export default Contact;
