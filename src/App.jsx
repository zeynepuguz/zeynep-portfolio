import { createBrowserRouter, Router, RouterProvider } from "react-router"; 
import AboutMePage from "./pages/aboutme";
import AchievementsPage from "./pages/achievements";
import CommunicationPage from "./pages/communication";
import ExperiencesPage from "./pages/experiences";
import HobbiesPage from "./pages/hobbies";
import ProjectsPage from "./pages/projects";
import ProjectDetailPage from "./pages/projectsdetail";
import SkillsPage from "./pages/skills";
import HomePage from "./pages/home";
import MainLayout from "./layouts/main-layout";
import CertificatesPage from "./pages/certificates";

const router = createBrowserRouter([
    {
      path: "/", element:<MainLayout/>,//her türlü mainlayout gelecek ancak children ile altına hangi bileşenlerin geleceği de söyleniyor
      children:
      [
        { index: true , element:<HomePage/> },
        { path:"aboutme", element:<AboutMePage/> },
        { path:"achievements", element:<AchievementsPage/> },
        { path:"communication", element:<CommunicationPage/> },
        { path:"experiences", element:<ExperiencesPage/> },
        { path:"hobbies", element:<HobbiesPage/> },
        { path:"projects", element:<ProjectsPage/> },
        { path: "projects/:id", element: <ProjectDetailPage /> },
        { path:"skills", element:<SkillsPage/> },
        { path:"certificates", element:<CertificatesPage/> },
      ]
    },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;