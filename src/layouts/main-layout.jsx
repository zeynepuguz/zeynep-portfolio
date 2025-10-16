import { Outlet } from "react-router";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
import { Home,UserRound, Briefcase,Sparkles,FolderGit2,Trophy,MessagesSquare,Palette, Award} from "lucide-react"; 
export default function MainLayout() {
    return (
        <div id="main-layout" className="min-h-screen flex flex-col relative text-white overflow-hidden">
            <header className="container">
                <nav>
                <NavLink to="/">Home <br /><Home size={20} /> {/* ← ikon */}</NavLink>
                <NavLink to="/aboutme">About Me <br /><UserRound size={20} /></NavLink>
                <NavLink to="/experiences">Experiences <br /> <Briefcase size={20} /></NavLink>
                <NavLink to="/achievements">Achievements <br /> <Trophy size={20} /></NavLink>
                <NavLink to="/projects">Projects <br /><FolderGit2 size={20} /></NavLink>
                <NavLink to="certificates">Certificates <br /><Award size={20} /> </NavLink>
                <NavLink to="/communication">Communication <br /><MessagesSquare size={20} /></NavLink>
                <NavLink to="/skills">Skills <br /><Sparkles size={20} /></NavLink>
                <NavLink to="/hobbies">Hobbies <br /><Palette size={20} /></NavLink>
            </nav>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}