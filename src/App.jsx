import "./App.css";
import Home from "./pages/home";
import BlogPost from "./pages/blogpost";
import Projects from "./pages/projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/birdr" element={<BlogPost type="birdr" />} />
        <Route
          path="/projects/saasproject"
          element={<BlogPost type="saas" />}
        />
        <Route
          path="/projects/birdrapi"
          element={<BlogPost type="birdrapi" />}
        />
      </Routes>
    </Router>
  );
}
