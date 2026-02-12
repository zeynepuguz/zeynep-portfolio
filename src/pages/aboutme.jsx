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
          I build Machine Learning and AI-driven systems with a strong focus on end-to-end model development
          and evaluation. My experience includes data preprocessing, feature engineering, comparative model
          experimentation, and interpretability analysis.
          <br /><br />
          I work with both classical ML algorithms and deep learning frameworks such as PyTorch and TensorFlow,
          aiming to develop reliable and scalable AI solutions. I have hands-on experience with Turkish NLP
          (Zemberek, text augmentation), sentiment classification, and model evaluation using metrics and
          interpretability tools such as SHAP.
          <br /><br />
          During my internships and projects, I have worked on real-world data problems, contributed to
          technical documentation and model evaluation, and focused on understanding model behavior rather
          than treating models as black boxes.
          <br /><br />
          My long-term goal is to deepen my expertise in advanced AI systems (NLP, LLMs, applied AI) while
          maintaining a solid software engineering foundation. I am interested in NLP, LLMs and Applied
          AI Systems, and I am highly motivated to learn, adapt, and take responsibility in data-driven
          environments.
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
        <p className="text-sm sm:text-base">🎓 Darica Gökşen Mustafa Yücel Anatolian High School</p>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">2017 – 2021</p>
        <p className="mt-3 text-sm sm:text-base">🎓 Software Engineering @ Kırklareli University</p>
        <p className="mt-2 text-xs sm:text-sm text-gray-400">2022 – Continues</p>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          Actual Average: <span className="text-white font-medium">3.41 / 4</span>
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
          <p className="text-sm sm:text-base">
            <span className="text-white font-medium">German</span> — A1 Level
          </p>
        </ul>
      </motion.div>
    </div>
  );
}
