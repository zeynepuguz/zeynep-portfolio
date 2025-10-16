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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills & Technologies
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-12">
        {categorizedSkills.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
              {section.category}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="bg-gray-800/60 p-5 rounded-2xl text-center hover:bg-gray-700/70 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`w-3 h-3 rounded-full ${
                          dot <= skill.level ? "bg-blue-400" : "bg-gray-500"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm mt-2 text-gray-400">
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
