import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Turkish Sentiment Analysis Tool with Deep Learning",
    shortDesc:
      "A deep learning-based NLP system analyzing Turkish text sentiment using TensorFlow and Keras.",
  },
  {
    id: 7,
    title: "Turkish Sentiment Analysis Tool with Machine Learning",
    shortDesc:
      "A machine learning-based NLP system analyzing Turkish text sentiment using Scikit-learn.",
  },
  {
    id: 2,
    title: "Studies on Data Science",
    shortDesc:
      "Exploratory data analysis and ML experimentation on Kaggle with real-world datasets.",
  },
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
      "A functional Java Spring Boot e-commerce web app with MySQL integration.",
  },
  {
    id: 6,
    title: "Reporting Student Grades with Telerik Platform",
    shortDesc:
      "A reporting system visualizing student grades using .NET and Telerik UI.",
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 sm:py-16 px-4 sm:px-6 text-white">
      {/* Başlık */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-16 projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
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
        className="text-center text-gray-400 mt-8 sm:mt-16 text-xs sm:text-sm italic px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click "View Details" to explore each project in depth. 🚀
      </motion.p>
    </div>
  );
}
