const categorizedSkills = [
  {
    category: "CORE & ML",
    skills: [
      { name: "Python ", level: 3 },
      { name: " Scikit-learn ", level: 3 },
      { name: " Model Evaluation & Experimentation ", level: 3 },
      { name: " Feature Engineering ", level: 3 },
      { name: " End-to-End ML Pipelines ", level: 3 },
    ],
  },
  {
    category: "DEEP LEARNING",
    skills: [
      { name: "PyTorch ", level: 3 },
      { name: " TensorFlow", level: 3 },
    ],
  },
  {
    category: "INTERPRETABILITY & ANALYSIS",
    skills: [
      { name: "Model Interpretability (SHAP) ", level: 3 },
      { name: " Data Preprocessing & EDA", level: 3 },
    ],
  },
  {
    category: "NATURAL LANGUAGE PROCESSING (NLP)",
    skills: [
      { name: "Text Preprocessing ", level: 3 },
      { name: " Turkish NLP (Zemberek) ", level: 3 },
      { name: " Sentiment Analysis ", level: 3 },
      { name: " Text Augmentation", level: 2 },
    ],
  },
  {
    category: "DATABASES & QUERYING",
    skills: [
      { name: "SQL ", level: 3 },
      { name: " PostgreSQL ", level: 3 },
      { name: " MySQL ", level: 3 },
      { name: " Microsoft SQL Server ", level: 2 },
    ],
  },
  {
    category: "TOOLS & PLATFORMS",
    skills: [
      { name: "Git / GitHub ", level: 3 },
      { name: " Jupyter ", level: 3 },
      { name: " VS Code ", level: 3 },
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
      <div className="max-w-2xl mx-auto mt-12">
        <div className="space-y-12">
          {categorizedSkills.map((section, i) => (
            <section key={i} className="text-center">
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-5 pb-2 border-b border-white/10 inline-block">
                {section.category}
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mt-5">
                {section.skills.map((skill, j) => (
                  <span key={j} className="contents">
                    <span className="inline-block px-3 py-1.5 rounded-md bg-white/[0.06] text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                    {j < section.skills.length - 1 && (
                      <span className="text-gray-600 text-sm select-none px-3" aria-hidden="true">|</span>
                    )}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <br /><br /><br />

      <p className="text-center text-gray-500 mt-20 text-sm tracking-wide">
        Focus: ML, NLP, and applied AI systems.
      </p>
    </div>
  );
}
