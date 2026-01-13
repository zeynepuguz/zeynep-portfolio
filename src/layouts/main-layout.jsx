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
    { to: "/experiences", label: "Experiences", icon: <Briefcase size={16} /> },
    { to: "/achievements", label: "Achievements", icon: <Trophy size={16} /> },
    { to: "/projects", label: "Projects", icon: <FolderGit2 size={16} /> },
    { to: "/certificates", label: "Certificates", icon: <Award size={16} /> },
    { to: "/skills", label: "Skills", icon: <Sparkles size={16} /> },
    { to: "/hobbies", label: "Hobbies", icon: <Palette size={16} /> },
    { to: "/communication", label: "Contact", icon: <MessagesSquare size={16} /> },
  ];

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const left = Math.round(el.scrollLeft);

    // 🔥 Ana düzeltme: padding hesaba katılıyor
    const paddingOffset = 20; 
    setAtStart(left <= paddingOffset);
    setAtEnd(left >= maxScroll - paddingOffset);
  };

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -250, behavior: "smooth" });
    setTimeout(updateScrollButtons, 400);
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 250, behavior: "smooth" });
    setTimeout(updateScrollButtons, 400);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div className="page-wrapper">
      <header className="main-header" style={{ 
        background: "linear-gradient(135deg, #1a0a14 0%, #000000 25%, #0a0308 50%, #000000 75%, #1a0a14 100%)", 
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(0, 0, 0, 0.15)", 
        borderBottom: "2px solid rgba(249, 168, 212, 0.5)"
      }}>
        <div className="arrow-zone">
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
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
