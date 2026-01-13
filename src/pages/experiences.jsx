import { motion } from "framer-motion";

export default function ExperiencesPage() {
  const experiences = [
  {
    company: "Koç Finansman Inc.",
    role: "Mentee — Orange Wings Mentorship Program",
    period: "12/2025 – Ongoing",
    location: "Istanbul, Turkey",
    description: `
I was selected as a mentee in Koç Finans Turuncu Kanatlar Mentorship Program, where I receive guidance
on career development, industry expectations, and professional networking.

I am especially excited to learn directly from experienced professionals, gain real-world insights
into finance and data-driven business environments, and apply this mentorship to my long-term growth
as a data-focused professional.
    `.trim(),
  },
  {
    company: "INOSENS Information Technologies Ltd.",
    role: "Data Science & NLP Intern",
    period: "04/08/2025 – 29/08/2025",
    location: "Hybrid — Gebze, Kocaeli",
    description: `
During my internship at INOSENS, I worked on end-to-end Natural Language Processing tasks focused on
Turkish text data. I developed NLP preprocessing pipelines using Zemberek and custom rule-based
cleaning methods, and applied data augmentation techniques to improve robustness on noisy text.

I performed feature engineering and data cleaning for sentiment classification tasks, trained
machine learning and deep learning models, and focused on understanding model behavior rather than
optimizing accuracy alone. I also contributed to model evaluation, metric analysis, and technical
documentation for NLP solutions.
    `.trim(),
  },
  {
    company: "VBT Software Inc.",
    role: "Software Developer Intern",
    period: "16/06/2025 – 28/07/2025",
    location: "Remote",
    description: `
During my internship at VBT Software, I gained exposure to real-world software development practices
through technical training and mentorship across multiple departments.

This experience strengthened my problem-solving skills, improved my understanding of professional
development workflows, and enhanced my ability to collaborate effectively within engineering teams.
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
