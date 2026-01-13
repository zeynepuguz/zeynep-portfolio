import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import hch1 from "../images/hch1.jpg";
import hch2 from "../images/hch2.jpg";
import hch3 from "../images/hch3.jpg";

import evo1 from "../images/evo1.jpeg";
import evo2 from "../images/evo2.jpeg";
import evo3 from "../images/evo3.jpeg";
import evo4 from "../images/evo4.jpeg";
import evo5 from "../images/evo5.jpeg";
import evo6 from "../images/evo6.jpeg";
import evo7 from "../images/evo7.jpeg";
import evo8 from "../images/evo8.jpeg";
import evo9 from "../images/evo9.jpg";
import evo10 from "../images/evo10.jpg";

import pina1 from "../images/pina1.jpeg";
import pina2 from "../images/pina2.jpeg";
import pina3 from "../images/pina3.jpeg";
import pina4 from "../images/pina4.jpeg";
import pina5 from "../images/pina5.jpg";
import { a } from "framer-motion/client";

export default function AchievementsPage() {

  const hchSlides = [hch1, hch2, hch3];
  const evoSlides = [ evo8,evo10, evo7, evo1, evo4, evo5, evo6, evo2, evo3, evo9];
  const pinaSlides = [pina4,pina5, pina2, pina3, pina1];

  const [indexHch, setIndexHch] = useState(0);
  const [indexEvo, setIndexEvo] = useState(0);
  const [indexPina, setIndexPina] = useState(0);

  // 🔄 5 saniye aralıklarla geçiş
  useEffect(() => {
    const hchTimer = setInterval(() => {
      setIndexHch((prev) => (prev + 1) % hchSlides.length);
    }, 2000);
    const evoTimer = setInterval(() => {
      setIndexEvo((prev) => (prev + 1) % evoSlides.length);
    }, 2000);
    const pinaTimer = setInterval(() => {
      setIndexPina((prev) => (prev + 1) % pinaSlides.length);
    }, 2000);
    return () => {
      clearInterval(hchTimer);
      clearInterval(evoTimer);
      clearInterval(pinaTimer);
    };
  }, []);

  const achievements = [
    {
      year: "2024",
      title: "BigIdea Idea Hackathon (weepay & Kırklareli University)",
      team: "AI and Data Science Club",
      rank: "2nd Place 🥈",
      project: "Innovative Payment & AI Solutions",
      description:
        "We achieved 2nd place in the BigIdea Hackathon organized by weepay and Kırklareli University.",
      slides: hchSlides,
      activeIndex: indexHch,
    },

    {
      year: "2025",
      title: "TEKNOFEST – Blockchain Technologies Finalist",
      team: "Team EvoGenius",
      rank: "7th Place Nationwide",
      project: "Digital Garden",
      description:
        "We collaboratively developed a blockchain-based agricultural traceability system that ensures transparency and authenticity throughout the supply chain.As a team, we ranked 7th nationwide at Teknofest 2025 Blockchain Technologies, demonstrating strong integration between AI, IoT, and blockchain innovation.",
      slides: evoSlides,
      activeIndex: indexEvo,
    },
    {
      year: "2025",
      title: "TEKNOFEST – Smart Transportation Finalist",
      team: "Team Pina39",
      rank: "8th Place Nationwide",
      project: "EcoMarineAI",
      description:
        "Together with my team, we created an AI-powered coastal pollution detection and monitoring system that integrates drone and satellite data for real-time environmental analysis. Our project ranked 8th nationwide at Teknofest 2025 Smart Transportation, highlighting our teamwork and cross-disciplinary approach.",
      slides: pinaSlides,
      activeIndex: indexPina,
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-8 sm:py-16 text-white flex flex-col items-center justify-start px-4 sm:px-6">
      {/* 🌈 Arka plan */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-25 blur-3xl"
        style={{
          backgroundImage: "linear-gradient(120deg,#c084fc,#a78bfa,#f9a8d4)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* 🎖️ Kartlar */}
      <div className="flex flex-col gap-6 sm:gap-10 items-center w-full mt-8">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="achievement-card border border-purple-500/20 backdrop-blur-xl rounded-2xl overflow-hidden w-full max-w-[650px]"
            style={{ background: "rgba(0, 0, 0, 0.6)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)" }}
          >
            {/* 🔄 Görsel Alanı */}
            <div className="slider-container">
              {a.slides.map((img, j) => (
                <div
                  key={j}
                  className={`slide-wrapper ${
                    a.activeIndex === j ? "active" : ""
                  }`}
                >
                  {/* 🔹 Arka plan blur */}
                  <img
                    src={img}
                    alt={`${a.project}-blur-${j}`}
                    className="slide-bg"
                  />
                  {/* 🔹 Ön plan net */}
                  <img
                    src={img}
                    alt={`${a.project}-${j}`}
                    className="slide-foreground"
                  />
                </div>
              ))}
              <div className="dots">
                {a.slides.map((_, j) => (
                  <span
                    key={j}
                    className={`dot ${
                      a.activeIndex === j ? "active-dot" : ""
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            {/* 📜 Metin kısmı */}
            <div className="p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-400">{a.year}</p>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-1">{a.title}</h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 italic">{a.team}</p>
              <p className="text-sm sm:text-md text-white mt-2 font-semibold">{a.project}</p>
              <p className="text-white font-semibold mt-1 text-sm sm:text-base">{a.rank}</p>
              <p className="text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
