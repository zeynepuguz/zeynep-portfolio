import { motion } from "framer-motion";

export default function AboutMePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-start py-8 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* 🌈 Background Gradient Motion */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #c084fc, #a78bfa, #f9a8d4)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🩷 Header */}
      {/* 🩵 Main Text Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full border border-purple-500/20 backdrop-blur-xl shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 text-gray-200 leading-relaxed text-justify mt-8"
        style={{ background: "rgba(0, 0, 0, 0.6)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)" }}
      >
        <p className="mb-4 text-sm sm:text-base">
          I am a final year Software Engineering student with a strong and growing focus on Data Science,
          Machine Learning, and applied Artificial Intelligence. Throughout my academic and practical
          journey, I have become particularly interested in transforming raw data into meaningful insights
          and building models that are not only accurate, but also interpretable and reliable.
          <br /><br />
          My primary areas of interest include Machine Learning and Natural Language Processing.
          I have hands-on experience working with Python, Pandas, NumPy, scikit-learn, TensorFlow and PyTorch
          and I have actively worked on NLP projects involving Turkish text using tools such as Zemberek and
          various text augmentation techniques. I enjoy working on the entire data pipeline, from data
          cleaning and feature engineering to model training, evaluation and performance analysis.
<br /><br />
          Rather than treating models as black boxes, I focus on understanding model behavior, analyzing
          errors and evaluating performance using appropriate metrics such as precision, recall, ROC-AUC,
          and confusion matrices. I believe that a strong data scientist should not only build models but
          also be able to explain their decisions and limitations clearly.
<br /><br />
          During my internships and projects, I have worked on real-world data problems, collaborated in
          team-based environments and contributed to technical documentation and model evaluation processes.
          These experiences have strengthened my ability to think analytically, work systematically and
          approach problems with a data driven mindset.
<br /><br />
          My long-term goal is to grow as an applied Data Scientist, contribute to impactful data-driven
          projects, and continuously deepen my understanding of machine learning, statistics and real world
          data challenges. I am highly motivated to learn, adapt, and take responsibility in environments
          where data is used to drive meaningful decisions.
<br /><br />
        </p>

      </motion.div>

      {/* 🎓 Education Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl w-full mt-8 sm:mt-12 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-gray-200 text-center backdrop-blur-lg shadow-lg"
      >
        <h3 className="text-white font-semibold mb-2 text-lg sm:text-xl">Education</h3>
        <p className="text-sm sm:text-base">🎓 4th-year Software Engineering @ Kırklareli University</p>
        <p className="mt-2 text-xs sm:text-sm text-gray-400">2022 – Present</p>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          GPA: <span className="text-white font-medium">3.36</span>
        </p>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          National University Entrance Exam Ranking: <span className="text-white font-medium">100,694</span>
        </p>
      </motion.div>

      {/* 🌍 Languages Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl w-full mt-6 sm:mt-8 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-gray-200 text-center backdrop-blur-lg shadow-lg"
      >
        <h3 className="text-white font-semibold mb-3 text-lg sm:text-xl">Languages</h3>
        <ul className="list-disc text-center text-gray-300 pl-6 space-y-2">
          <p className="text-sm sm:text-base">
            <span className="text-white font-medium">Turkish</span> — Native
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-white font-medium">English</span> — B1 Level
          </p>
        </ul>
      </motion.div>
    </div>
  );
}
