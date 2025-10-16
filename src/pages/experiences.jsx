import { motion } from "framer-motion";

export default function ExperiencesPage() {
  const experiences = [
    {
      company: "VBT Yazılım A.Ş.",
      role: "Software Development Intern",
      period: "16 Jun 2025 – 29 July 2025",
      location: "Remote",
      description: `
During my internship at VBT Yazılım A.Ş., I had the opportunity to receive technical training from many talented engineers across various departments, which significantly contributed to my professional development. 
I individually developed the projects StajVBTReport and InsightHub, and collaboratively built the Vbt_Internship_Project with a team. 
Detailed explanations of these projects can be found on the Projects page.`,
    },
    {
      company: "İNOSENS Bilişim Teknolojileri",
      role: "Data Science & NLP Intern",
      period: "04 August 2025 – 29 August 2025",
      location: "Hybrid – Kocaeli, Gebze",
      description: `
During this internship, I worked on a Sentiment Analysis project using multiple LSTM architectures. 
The details of this project are available on the Projects page.`,
    },
    {
      company: "TEKNOFEST 2025 – Blockchain Technologies (Team EvoGenius)",
      role: "AI & Blockchain Developer",
      period: "2025",
      location: "Istanbul, Türkiye",
      description: `
As part of Team EvoGenius, we developed the “Dijital Bahçem” project — 
a blockchain-based agricultural traceability system ensuring product originality and transparency. 
We successfully became Teknofest 2025 Blockchain Competition Finalists. 
More details are available on the Achievements page.`,
    },
    {
      company: "TEKNOFEST 2025 – Smart Transportation (Team Pina39)",
      role: "AI & Backend Developer",
      period: "2025",
      location: "Istanbul, Türkiye",
      description: `
As a member of Team Pina39, we developed the “EcoMarineAI” project — 
an AI-powered coastal pollution detection and smart monitoring system integrating drone and satellite data. 
We became Teknofest 2025 Smart Transportation Finalists. 
Additional achievements are listed on the Achievements page.`,
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-20 px-6 overflow-hidden text-white">
      {/* 🌈 Background gradient motion */}
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

      {/* Sayfa başlığı */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-pink-400 mb-12 text-center"
      >
        Experiences
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-2 border-pink-400/40 pl-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }} // 💡 EKLENDİ
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="relative mb-10"
          >

            {/* Nokta */}
            <span className="absolute -left-[11px] top-1.5 w-4 h-4 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899aa]" />

            {/* İçerik */}
            <div className="bg-white/5 border border-pink-400/30 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-pink-500/20 transition text-center">
              <h2 className="text-lg font-semibold text-pink-300 mb-1">
                {exp.company}
              </h2>
              <p className="text-sm text-gray-400 mb-1">{exp.period}</p>
              <p className="font-medium text-gray-200">{exp.role}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.location}</p>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-center">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
