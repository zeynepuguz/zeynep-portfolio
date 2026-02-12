import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Turkish Sentiment Analysis Tool with Deep Learning",
    shortDesc:
      "Deep learning–based sentiment analysis models for Turkish text data (LSTM, BiLSTM, CNN-LSTM).",
  },
  {
    id: 7,
    title: "Turkish Sentiment Analysis Tool with Machine Learning",
    shortDesc:
      "Traditional ML models for Turkish sentiment analysis with text preprocessing and feature extraction.",
  },
  {
    id: 2,
    title: "Studies on Data Science",
    shortDesc:
      "Kaggle notebooks covering data preprocessing, exploratory data analysis, and basic ML techniques.",
  },
  {
    id: 6,
    title: "Used Car Price Prediction",
    shortDesc:
      "Regression-based ML model with EDA, quantile regression for price range estimation, and SHAP for interpretability.",
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white" style={{ background: "radial-gradient(circle at center, #000000 0%, #0a0a0a 50%, #000000 100%)" }}>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="project-card rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="mb-3 text-sm sm:text-base lg:text-lg font-semibold">{project.title}</h2>
              <p className="text-xs sm:text-sm lg:text-base">{project.shortDesc}</p>
            </div>

            <button
              onClick={() => navigate(`/projects/${project.id}`)}
              className="project-btn px-3 sm:px-4 py-2 mt-6 sm:mt-8 rounded-full w-full text-center text-xs sm:text-sm"
            >
              🔍 View Details
            </button>
          </motion.div>
        ))}
      </div>

      

      <motion.p
        className="text-center text-gray-500 mt-4 text-xs italic px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        ML & Data Science projects — see below for other software projects.
      </motion.p>

      {/* Other Software Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mt-12">
        {[
          {
            id: 3,
            title: "Corporate Communication Platform – InsightHub",
            shortDesc:
              "A Java-based internal communication and monitoring platform for corporate teams.",
          },
          {
            id: 4,
            title: "Library Management System (Java)",
            shortDesc:
              "A desktop application managing library records and members using Java and MySQL.",
          },
          {
            id: 5,
            title: "E-Commerce Website",
            shortDesc:
              "A modern e-commerce platform with user authentication, product listing, cart management, and payment features.",
          },
        ].map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="project-card rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="mb-3 text-sm sm:text-base lg:text-lg font-semibold">{project.title}</h2>
              <p className="text-xs sm:text-sm lg:text-base">{project.shortDesc}</p>
            </div>

            <button
              onClick={() => navigate(`/projects/${project.id}`)}
              className="project-btn px-3 sm:px-4 py-2 mt-6 sm:mt-8 rounded-full w-full text-center text-xs sm:text-sm"
            >
              🔍 View Details
            </button>
          </motion.div>
        ))}
        <motion.p
        className="text-center text-gray-400 mt-8 sm:mt-16 text-xs sm:text-sm italic px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click "View Details" to explore each project in depth. 🚀
      </motion.p>
      </div>
    </div>
  );
}
