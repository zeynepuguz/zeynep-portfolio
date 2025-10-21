import { motion } from "framer-motion";
import profileImg from "../images/zess.jpg";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="text-center px-4 py-8 sm:py-16"
    >
      <section className="profile-card animate-fadeUp animate-delay-3 max-w-md mx-auto sm:max-w-lg">
        <img src={profileImg} alt="Zeynep Uğuz" className="profile-img w-32 h-32 sm:w-36 sm:h-36" />

        <div className="profile-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-2">Zeynep Uğuz</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">İstanbul, Türkiye</p>

          <p className="animate-fadeUp animate-delay-2 text-lg sm:text-xl text-pink-300 font-medium">
            Full Stack AI Developer
          </p>
          <p className="profile-bio text-sm sm:text-base mt-4 px-2">
            I develop innovative solutions by integrating artificial intelligence, backend, and mobile technologies.
          </p>
        </div>

        <div className="social-links flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
          <a
            href="https://github.com/zeynepuguz"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.kaggle.com/zeynepuuz"
            target="_blank"
            rel="noreferrer"
            title="Kaggle"
            className="social-link"
          >
            <i className="fab fa-kaggle"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zeynep-u%C4%9Fuz-ab5a93262/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://medium.com/@zeynepuguz"
            target="_blank"
            rel="noreferrer"
            title="Medium"
            className="social-link"
          >
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
