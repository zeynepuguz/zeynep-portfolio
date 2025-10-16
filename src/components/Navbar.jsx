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
    <header className="bg-pink-600/90 text-white shadow-lg">
      <nav className="flex justify-center space-x-8 py-3 text-sm">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="flex flex-col items-center hover:text-pink-200 transition"
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
