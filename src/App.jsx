import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header (always visible) */}
      <Header />

      {/* Main content: switched by route */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer (always visible) */}
      <Footer />
    </div>
    // <>Welcome to My Personal Site!</>
  )
}

export default App
