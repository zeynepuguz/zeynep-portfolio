import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaKaggle,
  FaEnvelope,
} from "react-icons/fa";

export default function CommunicationPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = e.target.user_email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
      setStatus(" Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_oe145s8", // 🔹 senin Service ID
        "template_qecu3ce", // 🔹 senin Template ID
        formRef.current,
        "0FaPIPtJrieRZIsMi" // 🔹 senin Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  const links = [
    {
      name: "GitHub",
      icon: <FaGithub size={44} />,
      href: "https://github.com/zeynepuguz",
      color: "#f472b6",
      hover: "#a855f7",
    },
    {
      name: "Kaggle",
      icon: <FaKaggle size={44} />,
      href: "https://www.kaggle.com/zeynepuuz",
      color: "#20beff",
      hover: "#a855f7",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={44} />,
      href: "https://www.linkedin.com/in/zeynep-u%C4%9Fuz-ab5a93262/",
      color: "#0077b5",
      hover: "#f472b6",
    },
    {
      name: "Medium",
      icon: <FaMedium size={44} />,
      href: "https://medium.com/@zeynepuguz",
      color: "#f472b6",
      hover: "#a855f7",
    },
    {
      name: "Mail",
      icon: <FaEnvelope size={44} />,
      href: "mailto:zeynppuguzz4@gmail.com",
      color: "#f472b6",
      hover: "#a855f7",
    },
  ];
  <br />
  return (
    <div className="relative min-h-[calc(100vh-80px)] py-8 sm:py-16 lg:py-20 px-4 sm:px-6 text-white flex flex-col items-center justify-center">
      {/* 🌈 Arka plan */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg,#ec4899,#8b5cf6,#3b82f6,#8b5cf6,#ec4899)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-pink-400 mb-6 sm:mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Let's Connect and Collaborate
      </motion.h1>

      {/* 🌐 Sosyal Linkler */}
      <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20 flex-wrap">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, y: -3 }}
            className="transition-all"
            style={{ color: link.color }}
            onMouseEnter={(e) => (e.currentTarget.style.color = link.hover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = link.color)}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* 📬 Form */}
      <motion.div
        className="w-full max-w-[500px] bg-white/10 border border-pink-400/30 rounded-[28px] p-4 sm:p-6 lg:p-8 m-2 backdrop-blur-lg shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-pink-300 text-center mb-4 sm:mb-6">
          Send a Message
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 sm:gap-5">
          <input
            type="text"
            id="table"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 sm:p-4 rounded-2xl bg-white/20 border border-pink-400/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-sm sm:text-base"
          />
          <input
            type="email"
            id="table"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 sm:p-4 rounded-2xl bg-white/20 border border-pink-400/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-sm sm:text-base"
          />
          <textarea
            name="message"
            id="table"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 sm:p-4 rounded-2xl bg-white/20 border border-pink-400/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none text-sm sm:text-base"
          ></textarea>

          <motion.button
            type="submit"
            id="table"
            className="bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-2xl font-semibold shadow-md hover:shadow-pink-500/40 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <p className="text-center mt-4 text-xs sm:text-sm text-pink-300">{status}</p>
        )}
      </motion.div>
    </div>
  );
}
