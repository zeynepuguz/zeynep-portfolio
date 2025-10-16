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
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    desc: "I love creating new AI ideas, experimenting with models, and building side projects 🤖",
  },
  {
    name: "Listening to Music",
    icon: <FaMusic className="text-4xl text-pink-400" />,
    desc: "Lo-fi or movie soundtracks help me stay focused while coding 🎧",
  },
  {
    name: "Watching Movies",
    icon: <FaGamepad className="text-4xl text-purple-400" />,
    desc: "I especially enjoy science fiction movies that spark imagination ✨",
  },
  {
    name: "Photography",
    icon: <FaCamera className="text-4xl text-yellow-400" />,
    desc: "Capturing nature and city moments through my lens makes me truly happy 📸",
  },
  {
    name: "Reading Books & Magazines",
    icon: <FaBook className="text-4xl text-green-400" />,
    desc: "I love reading about technology, psychology, and personal growth 📚",
  },
  {
    name: "Traveling",
    icon: <FaPlane className="text-4xl text-orange-400" />,
    desc: "Exploring new places and cultures always inspires me 🌍",
  },
];

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎨 My Hobbies & Interests
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {hobbies.map((hobby, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="bg-gray-800/60 hover:bg-gray-700/70 rounded-2xl p-6 flex flex-col items-center text-center transition"
          >
            {hobby.icon}
            <h2 className="text-xl font-semibold mt-4 mb-2">{hobby.name}</h2>
            <p className="text-gray-400 text-sm">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-gray-400 mt-16 text-sm italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        "Coding might be my profession, but inspiration comes from every hobby." 💫
      </motion.p>
    </div>
  );
}
