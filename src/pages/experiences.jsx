import { motion } from "framer-motion";

export default function ExperiencesPage() {
  const experiences = [
  {
    company: "Koç Finansman Inc.",
    role: "Mentee · Turuncu Kanatlar Mentorship Program",
    period: "12/2025 – Continuous",
    location: "Istanbul, Turkey",
    description: `
I was selected as a mentee in a competitive mentorship program focused on technology, innovation,
and data-driven career development, where I am gaining exposure to real-world business problems
and industry practices. Interested in NLP, LLMs and Applied AI Systems.
    `.trim(),
  },
  {
    company: "INOSENS Information Technologies Ltd.",
    role: "Data Science & NLP Intern · Data Science and NLP Department",
    period: "04/08/2025 – 29/08/2025",
    location: "Kocaeli / Gebze · Hybrid",
    description: `
I developed Turkish NLP preprocessing pipelines using Zemberek and data augmentation techniques,
and applied feature engineering and data cleaning to improve sentiment classification performance.

I trained and evaluated machine learning and deep learning models, focusing on understanding model
behavior through comparative experiments using TensorFlow, PyTorch, and scikit-learn. I contributed
to model evaluation, metric analysis, and documentation to support reliable NLP solutions.
    `.trim(),
  },
  {
    company: "VBT Software Inc.",
    role: "Software Developer Intern · Software Development Department",
    period: "16/06/2025 – 28/07/2025",
    location: "Istanbul / Ataşehir · Remote",
    description: `
I received technical training and mentorship from experienced software engineers at VBT.
    `.trim(),
  },
];



  return (
    <div className="relative min-h-[calc(100vh-80px)] py-8 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden text-white">
      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-2 border-purple-500/40 pl-4 sm:pl-8 mt-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="relative mb-8 sm:mb-10"
          >
            {/* Dot */}
            <span className="absolute -left-[7px] sm:-left-[11px] top-1.5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fcaa]" />

            {/* Content */}
            <div
              className="border border-purple-500/20 backdrop-blur-xl rounded-xl p-4 sm:p-6 transition text-center"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)",
              }}
            >
              <h2 className="text-base sm:text-lg font-semibold text-white mb-1">
                {exp.company}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">{exp.period}</p>
              <p className="font-medium text-gray-200 text-sm sm:text-base">{exp.role}</p>
              <p className="text-xs sm:text-sm text-gray-400 mb-3">{exp.location}</p>

              <p className="text-gray-300 leading-loose whitespace-pre-line text-center text-xs sm:text-sm max-w-3xl mx-auto">

                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
