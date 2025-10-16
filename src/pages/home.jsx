import { motion } from "framer-motion";
import profileImg from "../images/zess.jpg";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="text-center mt-32"
    >
      <section className="profile-card animate-fadeUp animate-delay-3">
        <img src={profileImg} alt="Zeynep Uğuz" className="profile-img" />

        <div className="profile-info">
          <h2 className="text-5xl font-bold text-pink-500">Zeynep Uğuz</h2>
          <p className="text-gray-400 text-sm mt-2">İstanbul, Türkiye</p>

          <p className="animate-fadeUp animate-delay-2">
            Full Stack AI Developer
          </p>
          <p className="profile-bio">
            I develop innovative solutions by integrating artificial intelligence, backend, and mobile technologies.
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/zeynepuguz"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.kaggle.com/zeynepuuz" target="_blank" rel="noreferrer" title="Kaggle">
            <img src="/src/icons/icons8-duck-32.png" alt="Duck Icon" className="duck-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/zeynep-u%C4%9Fuz-ab5a93262/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://medium.com/@zeynepuguz"
            target="_blank"
            rel="noreferrer"
            title="Medium"
          >
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
