import { NavLink } from "react-router-dom";
import { Home, UserRound, FolderGit2, MessageSquare } from "lucide-react";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <UserRound size={18} /> },
    { to: "/projects", label: "Projects", icon: <FolderGit2 size={18} /> },
    { to: "/contact", label: "Contact", icon: <MessageSquare size={18} /> },
  ];

  return (
    <header className="text-white shadow-lg" style={{ 
      background: "linear-gradient(135deg, #1a0a14 0%, #000000 25%, #000000 50%, #000000 75%, #1a0a14 100%)", 
      boxShadow: "0 2px 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(249, 168, 212, 0.15)", 
      borderBottom: "2px solid rgba(249, 168, 212, 0.5)",
      backdropFilter: "blur(10px)"
    }}>
      <nav className="flex justify-center space-x-8 py-3 text-sm">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="flex flex-col items-center hover:text-purple-300 transition"
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
