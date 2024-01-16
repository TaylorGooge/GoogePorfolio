import "./App.css";
import Home from "./pages/home";
import BlogPost from "./pages/blogpost";
import BlogListCom from "./pages/bloglistcom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <BlogListCom type="portfolio" title="Projects" baseUrl="projects" />
          }
        />
        <Route
          path="/blog"
          element={<BlogListCom type="personal" title="Blog" baseUrl="blog" />}
        />
        <Route path="/projects/:slug" element={<BlogPost />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
