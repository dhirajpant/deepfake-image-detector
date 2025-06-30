import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detector from "./pages/Detector";
import About from "./pages/About";
import Samples from "./pages/Samples";

export default function App() {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detector" element={<Detector />} />
          <Route path="/about" element={<About />} />
          <Route path="/samples" element={<Samples />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
