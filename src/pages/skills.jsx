import { motion } from "framer-motion";

const categorizedSkills = [
  {
    category: "CORE DATA SCIENCE",
    skills: [
      { name: "Python", level: 3 },
      { name: "Pandas", level: 3 },
      { name: "NumPy", level: 3 },
      { name: "Exploratory Data Analysis (EDA)", level: 3 },
      { name: "Data Cleaning & Preprocessing", level: 3 },
      { name: "Feature Engineering", level: 3 },
      { name: "Model Evaluation (Precision/Recall, ROC-AUC)", level: 3 },
    ],
  },
  {
    category: "MACHINE LEARNING",
    skills: [
      { name: "scikit-learn", level: 3 },
      { name: "Supervised Learning (Classification/Regression)", level: 3 },
      { name: "Cross-Validation", level: 2 },
      { name: "Hyperparameter Tuning", level: 2 },
      { name: "Pipeline Design", level: 2 },
      { name: "Error Analysis", level: 2 },
    ],
  },
  {
    category: "DEEP LEARNING",
    skills: [
      { name: "TensorFlow / Keras", level: 3 },
      { name: "PyTorch", level: 2 },
      { name: "Transfer Learning", level: 2 },
      { name: "CNN Architectures (ResNet, EfficientNet)", level: 2 },
    ],
  },
  {
    category: "NATURAL LANGUAGE PROCESSING (NLP)",
    skills: [
      { name: "Text Preprocessing", level: 3 },
      { name: "Turkish NLP", level: 3 },
      { name: "Zemberek", level: 3 },
      { name: "Text Classification", level: 3 },
      { name: "Sentiment Analysis", level: 3 },
      { name: "Text Augmentation (nlpaug)", level: 2 },
    ],
  },
  {
    category: "DATA VISUALIZATION & REPORTING",
    skills: [
      { name: "Matplotlib", level: 2 },
      { name: "Seaborn", level: 1 },
      { name: "Reporting & Insight Communication", level: 2 },
    ],
  },
  {
    category: "DATABASES & QUERYING",
    skills: [
      { name: "SQL (General)", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "Microsoft SQL Server", level: 2 },
      { name: "MySQL", level: 2 },
    ],
  },
  {
    category: "TOOLS & PLATFORMS",
    skills: [
      { name: "Git / GitHub", level: 3 },
      { name: "Google Colab", level: 3 },
      { name: "Visual Studio Code", level: 3 },
      { name: "Jupyter Notebook", level: 2 },
    ],
  },
  {
    category: "OTHER SKILLS",
    skills: [
      { name: "Java Spring Boot", level: 3 },
      { name: "C#", level: 2 },
      { name: ".NET", level: 2 },
      { name: "C / C++", level: 1 },
      { name: "Microsoft Office Applications", level: 3 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div
      className="min-h-screen text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      style={{
        background:
          "radial-gradient(circle at center, #000000 0%, #0a0a0a 50%, #000000 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 mt-8">
        {categorizedSkills.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-purple-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)",
            }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white border-b border-purple-400/30 pb-3">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {section.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="border border-purple-500/20 p-4 sm:p-5 rounded-lg hover:border-purple-500/35 transition-all"
                  style={{
                    background: "rgba(29, 28, 29, 0.5)",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.5), 0 0 20px rgba(192, 132, 252, 0.1)",
                  }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between mb-3 gap-3">
                    <h3 className="text-sm sm:text-base font-medium text-gray-200">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {skill.level === 1
                        ? "Beginner"
                        : skill.level === 2
                        ? "Intermediate"
                        : "Advanced"}
                    </span>
                  </div>

                  <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 3) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: j * 0.04 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-gray-400 mt-12 text-sm italic px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Note: I also have introductory experience with Java Spring Boot for backend development.
      </motion.p>
    </div>
  );
}
