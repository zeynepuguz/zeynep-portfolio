import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
import {
  Home, UserRound, Briefcase, Sparkles, FolderGit2,
  Trophy, MessagesSquare, Palette, Award,
} from "lucide-react";

export default function MainLayout() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={16} /> },
    { to: "/aboutme", label: "About", icon: <UserRound size={16} /> },
    { to: "/experiences", label: "Experience", icon: <Briefcase size={16} /> },
    { to: "/achievements", label: "Achievements", icon: <Trophy size={16} /> },
    { to: "/projects", label: "Projects", icon: <FolderGit2 size={16} /> },
    { to: "/certificates", label: "Certificates", icon: <Award size={16} /> },
    { to: "/skills", label: "Skills", icon: <Sparkles size={16} /> },
    { to: "/hobbies", label: "Hobbies", icon: <Palette size={16} /> },
    { to: "/communication", label: "Contact", icon: <MessagesSquare size={16} /> },
  ];

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-wrapper">
      <header className="main-header">
        <button
          className={`scroll-btn left ${atStart ? "disabled" : ""}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>

        <nav className="scroll-container" ref={scrollRef}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          className={`scroll-btn right ${atEnd ? "disabled" : ""}`}
          onClick={scrollRight}
        >
          &#10095;
        </button>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
