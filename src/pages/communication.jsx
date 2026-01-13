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
        "service_oe145s8",
        "template_qecu3ce",
        formRef.current,
        "0FaPIPtJrieRZIsMi"
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
      hover: "#c084fc",
    },
    {
      name: "Kaggle",
      icon: <FaKaggle size={44} />,
      href: "https://www.kaggle.com/zeynepuuz",
      color: "#f472b6",
      hover: "#c084fc",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={44} />,
      href: "https://www.linkedin.com/in/zeynep-u%C4%9Fuz-ab5a93262/",
      color: "#f472b6",
      hover: "#c084fc",
    },
    {
      name: "Medium",
      icon: <FaMedium size={44} />,
      href: "https://medium.com/@zeynepuguz",
      color: "#f472b6",
      hover: "#c084fc",
    },
    {
      name: "Mail",
      icon: <FaEnvelope size={44} />,
      href: "mailto:zeynppuguzz4@gmail.com",
      color: "#f472b6",
      hover: "#c084fc",
    },
  ];
  <br />
  return (
    <div className="relative min-h-[calc(100vh-80px)] py-8 sm:py-16 lg:py-20 px-4 sm:px-6 text-white flex flex-col items-center justify-center">
      {}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg,#c084fc,#a78bfa,#f9a8d4,#a78bfa,#c084fc)",
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


      {}
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

      {}
      <motion.div
        className="w-full max-w-[500px] border border-purple-500/20 rounded-[28px] p-4 sm:p-6 lg:p-8 m-2 backdrop-blur-lg shadow-2xl mt-8"
        style={{ background: "rgba(0, 0, 0, 0.6)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
          Send a Message
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 sm:gap-5">
          <input
            type="text"
            id="table"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 sm:p-4 rounded-2xl bg-slate-700/50 border border-purple-500/30 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm sm:text-base"
          />
          <input
            type="email"
            id="table"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 sm:p-4 rounded-2xl bg-slate-700/50 border border-purple-500/30 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm sm:text-base"
          />
          <textarea
            name="message"
            id="table"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-gray-300/50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition resize-none text-sm sm:text-base"
          ></textarea>

          <motion.button
            type="submit"
            id="table"
            className="bg-gradient-to-r from-purple-600 to-purple-800 py-3 rounded-2xl font-semibold shadow-md hover:shadow-purple-500/50 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <p className="text-center mt-4 text-xs sm:text-sm text-white">{status}</p>
        )}
      </motion.div>
    </div>
  );
}
