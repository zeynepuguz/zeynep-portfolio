import { motion } from "framer-motion";

// Sertifika görsellerini import et (örnek, kendi dosya adlarınla değiştir)
import algoDataImg from "../images/crt1.png";
import cssImg from "../images/crt2.png";
import javaImg from "../images/crt3.png";
import oopImg from "../images/crt4.png";
import algoDesignImg from "../images/crt5.png";
import aiIntroImg from "../images/crt6.png";
import mlImg from "../images/crt7.png";
import python101Img from "../images/crt8.png";
import python201Img from "../images/crt9.png";
import python301Img from "../images/crt10.png";
import python401Img from "../images/crt11.png";
import dlImg from "../images/crt12.png";


export default function CertificatesPage() {
  const certificates = [
    {
      date: "28/04/2023",
      title: "Algorithms and Data Structures Advanced Level",
      from: "BTK",
      image: algoDataImg,
    },
    {
      date: "26/11/2023",
      title: "CSS Basics",
      from: "BTK",
      image: cssImg,
    },
    {
      date: "14/12/2023",
      title: "Introduction to Programming with Java",
      from: "BTK",
      image: javaImg,
    },
    {
      date: "15/12/2023",
      title: "Object Oriented Programming with Applications",
      from: "BTK",
      image: oopImg,
    },
    {
      date: "23/05/2024",
      title: "Algorithm Design",
      from: "BTK",
      image: algoDesignImg,
    },
    {
      date: "19/09/2024",
      title: "Introduction to Artificial Intelligence and Algorithms",
      from: "BTK",
      image: aiIntroImg,
    },
    {
      date: "13/10/2024",
      title: "Machine Learning 101",
      from: "Turkcell",
      image: mlImg,
    },
    {
      date: "03/02/2025",
      title: "Python 101",
      from: "Turkcell",
      image: python101Img,
    },
    {
      date: "03/02/2025",
      title: "Python 201",
      from: "Turkcell",
      image: python201Img,
    },
    {
      date: "03/02/2025",
      title: "Python 301",
      from: "Turkcell",
      image: python301Img,
    },
    {
      date: "03/02/2025",
      title: "Python 401",
      from: "Turkcell",
      image: python401Img,
    },
    {
      date: "08/08/2025",
      title: "Introduction to Deep Learning",
      from: "BTK",
      image: dlImg,
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 text-white flex flex-col items-center justify-start">
      {/* 🌈 Arka plan degrade */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-25 blur-3xl"
        style={{
          backgroundImage: "linear-gradient(120deg,#ec4899,#8b5cf6,#3b82f6)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Başlık */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-pink-400 mb-12 text-center"
      >
        Certificates
      </motion.h1>

      {/* 🧾 Sertifika Kartları */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-6xl">
        {certificates.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-pink-400/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Sertifika Görseli */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Metin Alanı */}
            <div className="p-5 text-center">
              <p className="text-sm text-gray-400">{c.date}</p>
              <h2 className="text-lg font-semibold text-pink-300 mt-1">
                {c.title}
              </h2>
              <p className="text-sm text-gray-300 mt-1">from {c.from}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}