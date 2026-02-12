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
        <img
          src={profileImg}
          alt="Zeynep Uğuz"
          className="profile-img w-32 h-32 sm:w-36 sm:h-36"
        />

        <div className="profile-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}>
            Zeynep Uğuz
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Gebze / Kocaeli, Turkey
          </p>

          <p className="animate-fadeUp animate-delay-2 text-lg sm:text-xl text-gray-200 font-medium">
            Machine Learning Engineer (Junior)
          </p>

          <p className="profile-bio text-sm sm:text-base mt-4 px-2">
            I build Machine Learning and AI-driven systems with a strong focus on end-to-end model development and evaluation. My experience includes data preprocessing, feature engineering, comparative model experimentation, and interpretability analysis. I work with both classical ML algorithms and deep learning frameworks such as PyTorch and TensorFlow, aiming to develop reliable and scalable AI solutions. My long-term goal is to deepen my expertise in advanced AI systems while maintaining a solid software engineering foundation.
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
