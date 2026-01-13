import { motion } from "framer-motion";
import {
  FaBook,
  FaLaptopCode,
  FaMusic,
  FaPlane,
  FaCamera,
  FaGamepad,
} from "react-icons/fa";

const hobbies = [
  {
    name: "Artificial Intelligence & Coding",
    icon: <FaLaptopCode className="text-3xl" />,
    desc: "I love developing new AI ideas, experimenting with models, and building side projects.",
  },
  {
    name: "Listening to Music",
    icon: <FaMusic className="text-3xl" />,
    desc: "Lo-fi or movie soundtracks help me stay focused while coding.",
  },
  {
    name: "Watching Movies",
    icon: <FaGamepad className="text-3xl" />,
    desc: "I especially enjoy science fiction movies that spark imagination.",
  },
  {
    name: "Photography",
    icon: <FaCamera className="text-3xl" />,
    desc: "Capturing nature and city moments through my lens makes me truly happy.",
  },
  {
    name: "Reading Books & Magazines",
    icon: <FaBook className="text-3xl" />,
    desc: "I love reading about technology, psychology, and personal growth.",
  },
  {
    name: "Traveling",
    icon: <FaPlane className="text-3xl" />,
    desc: "Exploring new places and cultures always inspires me.",
  },
];

export default function HobbiesPage() {
  return (
    <div className="min-h-screen text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ background: "radial-gradient(circle at center, #000000 0%, #0a0a0a 50%, #000000 100%)" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-8">
        {hobbies.map((hobby, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="border border-purple-500/20 rounded-xl p-6 sm:p-7 hover:border-purple-500/35 transition-all backdrop-blur-sm"
            style={{ background: "rgba(0, 0, 0, 0.6)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(192, 132, 252, 0.15), inset 0 0 20px rgba(249, 168, 212, 0.05)" }}
          >
            <div className="text-purple-300 mb-4 flex justify-center">
              {hobby.icon}
            </div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-200 text-center">
              {hobby.name}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base text-center leading-relaxed">
              {hobby.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-gray-400 mt-12 sm:mt-16 text-sm italic px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        "Coding might be my profession, but inspiration comes from every hobby."
      </motion.p>
    </div>
  );
}
