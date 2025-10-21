import { motion } from "framer-motion";
import profileImg from "../images/zz.jpg";

export default function AboutMePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-start py-8 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* 🌈 Background Gradient Motion */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #ec4899, #8b5cf6, #3b82f6)",
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
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-6 sm:mb-10 text-center"
      >
        About Me
      </motion.h1>

      {/* 🩵 Main Text Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-white/5 border border-pink-400/30 backdrop-blur-xl shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-8 text-gray-200 leading-relaxed text-justify"
      >
        <p className="mb-4 text-sm sm:text-base">
          I am a <span className="font-semibold text-white">4th-year Software Engineering student</span> 
          at Kırklareli University. My main area of expertise is 
          <span className="text-pink-300 font-medium"> Artificial Intelligence</span>, 
          particularly in <strong>Natural Language Processing (NLP), Machine Learning,</strong> 
          and <strong>Deep Learning</strong>.
        </p>

        <p className="mb-4 text-sm sm:text-base">
          I have developed a <strong>Turkish sentiment analysis tool</strong>, where I actively 
          used technologies such as <strong>Python, Keras, TensorFlow, PyTorch, scikit-learn, 
          Numpy, Zemberek, NlpAUG,</strong> and <strong>Pandas</strong>.
        </p>

        <p className="mb-4 text-sm sm:text-base">
          To integrate my AI models into real-world applications, I have been improving my 
          skills in <strong>backend development</strong>, gaining experience with 
          <strong> Java Spring Boot, RESTful APIs,</strong> and <strong>database management</strong>.
        </p>

        <p className="mb-4 text-sm sm:text-base">
          In addition, I have recently started exploring <strong>mobile application development</strong> 
          to make AI-powered systems more accessible to users.
        </p>

        <p className="mb-4 text-sm sm:text-base">
          My goal is to build <strong>AI-driven, fully integrated solutions</strong> that combine 
          intelligent models with backend and mobile technologies to create end-to-end products.
        </p>

        <p className="mb-4 text-sm sm:text-base">
          In this direction, I define myself as a 
          <span className="text-pink-300 font-semibold"> Full-Stack AI Developer</span>, aiming 
          to bring together different technologies to produce innovative and sustainable projects.
        </p>

        {/* Signature */}
        <p className="mt-6 italic text-right text-pink-300 text-sm sm:text-base">
          — Zeynep Uğuz 🪄
        </p>
      </motion.div>

      {/* 🎓 Education Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl w-full mt-8 sm:mt-12 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-gray-200 text-center backdrop-blur-lg shadow-lg"
      >
        <h3 className="text-pink-400 font-semibold mb-2 text-lg sm:text-xl">Education</h3>
        <p className="text-sm sm:text-base">🎓 4th-year Software Engineering @ Kırklareli University</p>
        <p className="mt-2 text-xs sm:text-sm text-gray-400">2022 – Continuous</p>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          GPA: <span className="text-white font-medium">3.36</span>
        </p>
        <p className="mt-1 text-xs sm:text-sm text-gray-400">
          ÖSYM Ranking: <span className="text-white font-medium">100.694</span>
        </p>
      </motion.div>

      {/* 🌍 Languages Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl w-full mt-6 sm:mt-8 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-gray-200 text-center backdrop-blur-lg shadow-lg"
      >
        <h3 className="text-pink-400 font-semibold mb-3 text-lg sm:text-xl">Languages</h3>
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
