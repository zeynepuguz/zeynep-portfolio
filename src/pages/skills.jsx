import { motion } from "framer-motion";

const categorizedSkills = [
  {
    category: "Office & Version Control",
    skills: [
      { name: "Microsoft Word", level: 3 },
      { name: "Microsoft PowerPoint", level: 3 },
      { name: "Microsoft Excel", level: 3 },
      { name: "Git / GitHub", level: 3 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Microsoft SQL Server", level: 2 },
        { name: "PostgreSQL", level: 2 },
        { name: "MySQL", level: 1 },
    ],
  },
  {
    category: "Programming & Backend",
    skills: [
      { name: "Java", level: 2 },
      { name: "Spring Boot", level: 2 },
      { name: "C / C++", level: 1 },
      { name: "C#", level: 2 },
      { name: ".NET", level: 2 },
      { name: "Node.js", level: 2 },
      { name: "Python", level: 2 },
    ],
  },
  {
    category: " Artificial Intelligence & Deep Learning",
    skills: [
      { name: "Keras", level: 2 },
      { name: "TensorFlow", level: 2 },
      { name: "PyTorch", level: 2 },
      { name: "Zemberek", level: 2 },
      { name: "NLPAug", level: 2 },
    ],
  },
  {
    category: " Data Science & Visualization",
    skills: [
      { name: "NumPy", level: 3 },
      { name: "Pandas", level: 3 },
      { name: "Matplotlib", level: 2 },
      { name: "Image Processing", level: 1 },
    ],
  },
  {
    category: " Web Technologies",
    skills: [
      { name: "JavaScript", level: 1 },
      { name: "HTML / CSS", level: 2 },
      { name: "PHP", level: 1 },
      { name: "React", level: 1 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills & Technologies
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {categorizedSkills.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 border-b border-gray-700 pb-2">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {section.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="bg-gray-800/60 p-3 sm:p-4 lg:p-5 rounded-2xl text-center hover:bg-gray-700/70 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3">{skill.name}</h3>
                  <div className="flex justify-center space-x-1 sm:space-x-2">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          dot <= skill.level ? "bg-blue-400" : "bg-gray-500"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm mt-2 text-gray-400">
                    {skill.level === 1
                      ? "Beginner"
                      : skill.level === 2
                      ? "Intermediate"
                      : "Advanced"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
